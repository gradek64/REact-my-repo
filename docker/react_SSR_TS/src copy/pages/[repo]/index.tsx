import { NextApiRequest } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { getConsulStructure } from '../../utils'

// repo/
// ├─ configs/
// │  ├─ ui-payment/
// │  │  ├─ dev/
// │  │  ├─ staging/
// │  │  ├─ production/

interface Props {
  environments: Array<{
    name: string
    path: string
    sha: string
    size: number
    url: string
  }>
}

const EnvironmentList = ({ environments }: Props) => {
  const { asPath } = useRouter()

  return (
    <div>
      {environments?.map((env) => {
        return (
          <div key={env.name}>
            <Link href={`${asPath}/${env.name}`}>
              <a>{env.name}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { repo } = req.query as { repo: string }
  const environments = await getConsulStructure(repo)

  return {
    props: {
      environments,
    },
  }
}

export default EnvironmentList
