import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  height: 100vh;

  ${media.lessThan('medium')`
    height: 100%;
    margin: 6rem 0;
  `}

  ${media.lessThan('small')`
    margin: 3rem 0;
  `}
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

    ${media.lessThan('medium')`
      height: 100%;
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
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

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.normal};
    `}
  `}
`
export const ExtraInfo = styled.p`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.spacings.xlarge};
    font-size: ${theme.font.sizes.normal};
    opacity: 0.5;

    span {
      display: block;
      font-weight: bold;
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    border: none;
    padding: ${theme.spacings.small};
    border-radius: 5px;
    background: ${theme.colors.highlight};
    color: ${theme.colors.background};
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: ${theme.spacings.xlarge};
    border: 2px solid ${theme.colors.highlight};
    transition: ${theme.transitions.fast};

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.small}
    `}

    &:hover {
      color: ${theme.colors.highlight};
      background: ${theme.colors.background};
    }
  `}
`

export const Socials = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 3rem;

    svg {
      width: 4rem;
      height: 4rem;
      color: ${theme.colors.highlight};
      transition: ${theme.transitions.faster};

      ${media.lessThan('small')`
        width: 3rem;
        height: 3rem;
      `}

      &:hover {
        filter: brightness(0.7);
      }
    }
  `}
`

export const Image = styled.div``
