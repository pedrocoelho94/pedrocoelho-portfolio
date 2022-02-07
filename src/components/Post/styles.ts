import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article``

export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.huge};
  `}
`

export const Excerpt = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.huge};
  `}
`
export const Cover = styled.img`
  ${({ theme }) => css`
    border-radius: 5px;
    max-height: 55rem;
    object-fit: cover;
    margin-bottom: ${theme.spacings.large};

    ${media.lessThan('medium')`
      min-height: 20rem;
    `}
  `}
`

export const Links = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
    display: grid;
    grid-template-columns: 1fr 1fr;

    a:nth-child(1) {
      border-radius: 5px 0 0 5px;
      border-right: 1px solid ${theme.colors.background};
    }

    a:nth-child(2) {
      border-radius: 0 5px 5px 0;
    }

    a {
      background-color: ${theme.colors.secondary};
      padding: ${theme.spacings.small};
      text-align: center;
      font-weight: bold;
      align-self: center;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }

    ${media.lessThan('medium')`
      grid-template-columns: 1fr;

      a:nth-child(1) {
        border-radius: 5px 5px 0 0;
        border-right: none;
        border-bottom: 1px solid ${theme.colors.background};
      }

      a:nth-child(2) {
        border-radius: 0 0 5px 5px;
      }
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    word-break: break-word;
    flex-direction: column;
    gap: 2rem;
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
    line-height: 3rem;
    margin-bottom: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.large};
    border-bottom: 2px solid ${theme.colors.secondary};

    p:empty {
      display: none;
    }

    a:hover {
      text-decoration: underline;
    }

    ul,
    li {
      width: calc(100% - 1rem);
      list-style: initial;
      position: relative;
      left: 1rem;
    }

    li:not(:last-child) {
      margin-bottom: ${theme.spacings.small};
    }

    img {
      position: relative;
      width: auto;
      height: auto;
      left: 50%;
      transform: translateX(-50%);

      max-height: 65rem;
      max-width: 100%;
      object-fit: contain;
      border-radius: 5px;
    }
  `}
`

export const Tags = styled.p`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
  `}
`
type BarProps = {
  showBar: boolean
}

export const ProgressContainer = styled.div<BarProps>`
  ${({ theme, showBar }) => css`
    position: fixed;
    left: 0;
    opacity: 0;
    top: 6rem;
    width: 100%;
    height: 6px;
    background: ${theme.colors.primary};
    z-index: ${theme.layers.layer8};

    ${showBar &&
    `
      opacity: 1
    `}
  `}
`
type ScrolledProps = {
  scrolled: string
}

export const ProgressBar = styled.div.attrs(({ scrolled }: ScrolledProps) => ({
  style: {
    width: scrolled
  }
}))<ScrolledProps>`
  ${({ theme }) => css`
    height: 6px;
    background-color: ${theme.colors.highlight};
  `}
`

export const Valores = styled.div`
  position: fixed;
  z-index: 99999;
  bottom: 2rem;
  font-size: 5rem;
  color: red;
  font-weight: bold;
`
