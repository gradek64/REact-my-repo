import { NextApiRequest } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getConsulStructure } from '../../../utils'

// repo/
// ├─ configs/
// │  ├─ ui-payment/
// │  │  ├─ dev/
// │  │  │  ├─ sit1.json
// │  │  │  └─ stub.json

interface Props {
  files: Array<{
    name: string
    path: string
    sha: string
    size: number
    url: string
  }>
}

const FileList = ({ files }: Props) => {
  const { asPath } = useRouter()

  return (
    <div>
      {files?.map((file) => {
        const filename = file.name.split('.')[0]
        return (
          <div key={filename}>
            <Link href={`${asPath}/${filename}`}>
              <a>{filename}</a>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export const getServerSideProps = async (req: NextApiRequest) => {
  const { repo, env } = req.query as { repo: string; env: string }
  const files = await getConsulStructure(`${repo}/${env}`)

  return {
    props: {
      files,
    },
  }
}

export default FileList
