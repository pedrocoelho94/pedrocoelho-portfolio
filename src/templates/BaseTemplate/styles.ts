import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    padding-top: 6rem;
    padding-bottom: 6rem;
    /* margin: ${theme.spacings.huge} 0; */
  `}
`
