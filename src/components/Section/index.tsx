import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.huge} 0;
  `}
`
