
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding: 0.75rem 1rem;

  svg {
    width: 70px;
    height: auto;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <p>Logo</p>
    </HeaderWrapper>
  )
}

export default Header
