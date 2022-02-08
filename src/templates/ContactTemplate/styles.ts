import styled, { css } from 'styled-components'
import { Section } from 'components/Section'

export const Wrapper = styled(Section)`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin-left: auto;
    margin-right: auto;
    min-height: 44.5rem;
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.large};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.normal};
    margin-bottom: ${theme.spacings.xhuge};
  `}
`
export const Form = styled.form`
  ${({ theme }) => css`
    div {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const ConfirmationMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.highlight};
  `}
`
export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
  `}
`
