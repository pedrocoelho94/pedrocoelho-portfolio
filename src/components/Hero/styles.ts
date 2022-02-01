import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  height: 100vh;
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
    height: calc(100vh - 6rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.small};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Description = styled.h2`
  text-align: center;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.normal};
    `}
  `}
`

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.small};
    border-radius: 5px;
    background: ${theme.colors.highlight};
    color: ${theme.colors.black};
    font-size: 2rem;
  `}
`

export const Socials = styled.div``

export const Image = styled.div``
