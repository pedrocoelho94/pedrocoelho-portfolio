import styled, { css } from 'styled-components'

type isError = {
  isInvalid: boolean
}

export const Label = styled.label``

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: 500;
    font-size: ${theme.font.sizes.normal};
    border-radius: 5px;
    line-height: 22px;
    background-color: transparent;
    border: 2px solid ${theme.colors.highlight};
    transition: ${theme.transitions.faster};
    padding: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};
    width: 100%;
    outline: 0;
    height: 15rem;
    line-height: 150%;
    resize: vertical;

    &:focus {
      border: 2px solid ${theme.colors.outline};
    }
  `}
`

export const FormErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.warning};
  `}
`

export const Wrapper = styled.div<isError>`
  ${({ theme, isInvalid }) => css`
    display: flex;
    flex-direction: column;

    ${Textarea} {
      ${isInvalid &&
      `
      border-color: ${theme.colors.warning};
    `}
    }
  `}
`
