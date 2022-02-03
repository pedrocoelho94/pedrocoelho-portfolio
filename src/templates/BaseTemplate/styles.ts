import styled, { css } from 'styled-components'

export const Content = styled.main`
  ${({ theme }) => css`
    padding-top: 6rem;

    /* margin: ${theme.spacings.huge} 0; */
  `}
`
