import React from 'react'
import ContentLoader from 'react-content-loader'

import * as Styled from './PageSkeleton.styles'

const PageSkeleton = () => (
  <div className='page-container'>
    <Styled.Heading className='h1'>
      <Styled.Text>
        <ContentLoader
          height={35}
          width={250}
          viewBox={`0 0 250 35`}
          speed={1}
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
          uniquekey='page_header'>
          <rect x='0' y='0' rx='2' ry='2' width='250' height='35' />
        </ContentLoader>
      </Styled.Text>
    </Styled.Heading>
    <div className='main-section'>
      <ContentLoader
        height={100}
        width={400}
        viewBox={`0 0 400 100`}
        speed={1}
        backgroundColor='#ffffff'
        foregroundColor='#f5f5f5'
        uniquekey='page_content'>
        <rect x='0' y='0' rx='2' ry='2' width='400' height='100' />
      </ContentLoader>
    </div>
  </div>
)

export default PageSkeleton
