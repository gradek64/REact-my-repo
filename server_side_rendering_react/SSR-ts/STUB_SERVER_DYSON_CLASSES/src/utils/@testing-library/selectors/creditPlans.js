/* eslint-disable jest/no-standalone-expect */

import { screen, waitFor } from '@testing-library/react'
import { getByTextWithMarkup } from '..'

export default {
  getLoader: () => screen.queryByTestId('credit-plan-loader'),
  getContent: () => screen.queryByTestId('credit-plan-content'),
  getRetryButton: () => screen.queryByRole('button', 'Retry'),
  getRetryButtonFinal: () => screen.queryByRole('button', 'Try a different payment method'),
  getRetryAlert: () => screen.queryByText(`Sorry, please try again or choose a different payment method.`),
  getRetryAlertFinal: () =>
    screen.queryByText(
      `Sorry, we can’t process your Argos Card credit plan right now. Please choose a different payment method.`,
    ),
  getFindOutMoreLink: () => screen.queryByText(`Find out more`),
  getSubmitPlanErrorAlert: () =>
    getByTextWithMarkup(
      `Sorry, we're experiencing some difficulties processing Argos Card payments right now. Please refresh and try again, or use another payment method.`,
    ),

  getAccordionTitleStep1: () => screen.queryByText(`1. Choose a credit plan`),
  getAccordionTitleStep1Normal: () => screen.queryByText(`1. Confirm normal credit`),
  getAccordionTitleStep1Chosen12Months: () => screen.queryByText(`1. 12 months Buy Now, Pay Later chosen`),
  getAccordionTitleStep1ChosenNormal: () => screen.queryByText(`1. Normal credit chosen`),
  getAccordionTitleStep2: () => screen.queryByText(`2. Enter Argos Card details`),
  getAccordionStep1EditButton: () => screen.queryByTestId(`accordion-steps-title-link-0`),
  getAccordionStep2EditButton: () => screen.queryByTestId(`accordion-steps-title-link-1`),

  getCreditPlanRadioOption1: () => screen.queryByText(`12 months Buy Now, Pay Later`),
  getCreditPlanRadioOption2: () => screen.queryByText(`6 months Buy Now, Pay Later`),
  getCreditPlanRadioOption3: () => screen.queryByText(`Normal credit`),

  getCreditPlanDescription: async (planType) => {
    await waitFor(() => expect(getByTextWithMarkup(`Argos Card Representative 29.9% APR variable.`)).toBeVisible())

    expect(screen.getByText(`Credit subject to status. T&Cs Apply.`)).toBeVisible()

    if (planType !== 'single') {
      expect(screen.queryByText(`What is a 12 months Buy Now, Pay Later plan?`)).toBeVisible()
      expect(
        screen.queryByText(
          `If you pay the balance in full within your agreed credit plan period, you won't pay any interest. If you pay after the agreed period, you'll be charged interest on any balance remaining at the end of the plan. This interest will be backdated to the date of purchase, known as deferred interest. You should always try and pay back as much as you can as quickly as you can to reduce the amount of interest you’ll be charged.`,
        ),
      ).toBeVisible()
    }
    expect(screen.queryByText(`More details.`)).toBeVisible()
    expect(screen.queryByText('More details.').closest('a').href).toContain('/help/argos-card/credit-plan-info-hd')
    expect(getByTextWithMarkup(`Don't have an Argos Card? Find out more`)).toBeVisible()
  },

  getTotalToPayTitle: () => screen.queryByText('Total to pay'),
  getTotalToPayAmount: (amount) => screen.queryByText(amount ?? '£120.95'),
  getSelectPlanButton: () => screen.queryByRole('button', { name: 'Select credit plan' }),
  getConfirmPlanButton: () => screen.queryByRole('button', { name: 'Confirm credit plan' }),
}
