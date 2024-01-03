import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'

import {
  getMeta,
} from '../../selectors'

interface GetSnapshotRedirectsProps {
  children: JSX.Element
}

export const GetSnapshotRedirects: React.FC<GetSnapshotRedirectsProps> = ({ children }) => {

  // const { error } = useSelector(getMeta)
  // const location = useLocation()
  /* 
    if (error) {
      if (typeof error === 'object' && !(error instanceof Error) && error.status === '400') {//StatusCode.UNAUTHORIZED) {
        return (
          <Redirect
            to={`/login?pageName=mandatoryPrepay&successUrl=${encodeURIComponent(
              `${location.pathname}${location.search}`,
            )}`}
          />
        )
      }
  
      //return <Redirect to={errorPath} />
    } */
  return children
}

export default GetSnapshotRedirects
