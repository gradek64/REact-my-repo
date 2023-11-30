import { NextApiRequest } from 'next'
import Link from 'next/link'
import { getConsulStructure } from '../utils'

// repo/
// ├─ configs/
// │  ├─ ui-payment/
// │  ├─ ui-basket/

interface Props {
  repos: Array<{
    name: string
    path: string
    sha: string
    size: number
    url: string
  }>
}

const Post = ({ repos }: Props) => {
  return (
    <div>
      {repos.map((repo) => {
        return (
          <div key={repo.name}>
            <Link href={`/${repo.name}`}>
              <a>{repo.name}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {

  const repos = await getConsulStructure()

  return {
    props: {
      repos,
    },
  }
}

export default Post
