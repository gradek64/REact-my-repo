import { NextApiRequest, NextApiResponse } from 'next'
import { API_ERRORS } from '../../constants'
import { HashDoesNotMatchException } from '../../exceptions'
import { setFeatures } from '../../services/consul'
import { Features } from '../../types/features'

export interface PostFeaturesSuccessfulResponse {
  features: Features
  hash: string
}

export interface PostFeaturesErrorResponse {
  error: API_ERRORS
}

export type PostFeaturesResponse =
  | PostFeaturesSuccessfulResponse
  | PostFeaturesErrorResponse

export default async (
  req: NextApiRequest,
  res: NextApiResponse<PostFeaturesResponse>
) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  const { hash: requestHash, features: requestFeatures } = req.body

  try {
    const { features, hash } = await setFeatures(requestFeatures, requestHash)

    // TODO: ideally we want to send what is in ConsulData
    res.status(200).json({ features, hash })
  } catch (err) {
    if (err instanceof HashDoesNotMatchException) {
      // TODO: get from enum
      res.status(409).json({ error: API_ERRORS.HASHES_DO_NOT_EQUAL })
    }
  }
}
