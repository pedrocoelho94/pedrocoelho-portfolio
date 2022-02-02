import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    min-height: 20rem;
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.large} 0;
  `}
`
