import styled from 'styled-components'

export const animationInDuration = 200

interface FormProps {
  padding?: boolean
}

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin:10px;

  h3 {
    color:green;
    font-style:italic;
  }

  label {
    padding-left:5px;
  }
`
