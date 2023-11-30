
import { NextApiRequest } from 'next'
import { useState } from 'react'
import ChangeConsulModal from '../../../components/ChangeConsulModal/ChangeConsulModal'
import Code from '../../../components/Code/Code'
import PageWithHeaderAndTitle from '../../../layouts/PageWithHeaderAndTitle'
import { getConsul } from '../../../utils'

// repo/
// ├─ configs/
// │  ├─ ui-payment/
// │  │  ├─ dev/
// │  │  │  ├─ sit1.json

const Config = ({ consul, location }: any) => {
  const [newConsul, setNewConsul] = useState(JSON.stringify(consul, null, 2))
  const [showModal, setShowModal] = useState(false)

  return (
    <PageWithHeaderAndTitle title="Config">
      {/* <ChangeConsulModal
        showModal={showModal}
        setShowModal={setShowModal}
        oldValue={consul}
        newValueString={newConsul}
        location={location}
      /> */}
      <Code code={newConsul} setCode={setNewConsul} />
      <button onClick={() => setShowModal(true)}>
        Apply
      </button>
    </PageWithHeaderAndTitle>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const location = req.query as { repo: string; env: string; file: string }
  const consul = await getConsul(location)

  return {
    props: {
      consul,
      location,
    },
  }
}

export default Config
