const qs = require('qs')
const SessionManager = require('../../data/SessionManager')
const {
  argosCardCreditPlansDatasets,
  creditPlansResponseDatasets,
  monthlyPaymentCreditPlanDatasets,
} = require('../../data/CreditPlans/Datasets')

const modifyStubCreditPlans = {
  path: '/payment-stub/credit-plans',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    const query = req.query
    const { type, value } = query
    const sessionData = SessionManager.getSession(req)
    const creditPlans = sessionData.creditPlans

    if (type === 'argosCardCreditPlan') {
      if (argosCardCreditPlansDatasets[value]) {
        creditPlans.setArgosCardCreditPlanType(value)
        console.log(`API: Set  argos card plan data response - ${argosCardCreditPlansDatasets[value].description}`)
      } else {
        console.log('Failed to update argos card plan data')
      }
    }

    if (type === 'setMonthlyPaymentCreditPlanAPRAndLength') {
      const queryParams = qs.parse(value, {
        ignoreQueryPrefix: true,
      })
      if (queryParams.apr && queryParams.minimumDuration && queryParams.maximumDuration) {
        const { apr, minimumDuration, maximumDuration } = queryParams
        creditPlans.setMonthlyPaymentPlanValues({ apr, minimumDuration, maximumDuration })
        console.log(`API: Set monthly payment plan to - ${JSON.stringify({ apr, minimumDuration, maximumDuration })}`)
      } else {
        console.log('Failed to set Monthly Payment Credit Plan custom settings')
      }
    }

    if (type === 'monthlyPaymentCreditPlan') {
      if (monthlyPaymentCreditPlanDatasets[value]) {
        creditPlans.setMonthlyPaymentCreditPlanType(value)
        console.log(`API: Set monthly payment plan data - ${monthlyPaymentCreditPlanDatasets[value].description}`)
      } else {
        console.log('Failed to update monthly payment plan data')
      }
    }

    if (type === 'creditPlansResponse') {
      if (creditPlansResponseDatasets[value]) {
        creditPlans.setCreditPlansResponseType(value)
        console.log(`API: Set credit plans response - ${creditPlansResponseDatasets[value].description}`)
      } else {
        console.log('Failed to update credit plans response')
      }
    }

    SessionManager.saveSession(sessionData, req)
    return creditPlans.toJson()
  },
  render: (req, res) => {
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(res.body)
  },
}

module.exports = modifyStubCreditPlans
