import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    width: 15rem;
    background: ${theme.colors.highlight};
    border-radius: 5px;
    border: 2px solid ${theme.colors.highlight};
    cursor: pointer;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.normal};
    padding: ${theme.spacings.xsmall} 0;
    transition: ${theme.transitions.faster};
    font-weight: 700;
    outline: 0;

    &:focus {
      border: 2px solid ${theme.colors.outline};
    }

    &:disabled {
      cursor: initial;
      filter: brightness(0.4);

      &:hover {
        cursor: initial;
        filter: brightness(0.4);
      }
    }

    &:hover {
      filter: brightness(0.8);
    }
  `}
`
