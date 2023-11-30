import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header/Header'

const Main = styled.main`
  padding: 2.5rem 1rem;

  @media screen and (min-width: ${(props) => props.theme.screen_md_min}) {
    padding: 2.5rem 6rem;
  }

  // max-width: 1200px;
  margin: auto;
`

const PageTitle = styled.h2`
  border-bottom: 1px solid ${(props) => props.theme.color_grey_light_mid};

  padding-bottom: 2rem;
  margin-bottom: 2rem !important;
`

const PageWithHeaderAndTitle = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Main>
        <PageTitle>{title}</PageTitle>
        {children}
      </Main>
    </>
  )
}

export default PageWithHeaderAndTitle
