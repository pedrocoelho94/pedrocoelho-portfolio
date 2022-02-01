import styled, { css } from 'styled-components'

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
    max-height: 40rem;
    object-fit: cover;
    margin-bottom: ${theme.spacings.huge};
  `}
`
export const Links = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
    margin-bottom: ${theme.spacings.huge};
    display: grid;
    grid-template-columns: 1fr 1fr;

    a:nth-child(1) {
      border-radius: 5px 0 0 5px;
    }

    a:nth-child(2) {
      border-radius: 0 5px 5px 0;
    }

    a {
      background-color: ${theme.colors.secondary};
      padding: ${theme.spacings.small};
      text-align: center;
      font-weight: bold;
      transition: filter 0.2s ease-in-out;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
    line-height: 2.5rem;
    margin-bottom: ${theme.spacings.huge};

    p {
      margin-bottom: ${theme.spacings.medium};
    }

    img {
      height: 100%;
      object-fit: cover;
    }
  `}
`

export const Tags = styled.p`
  ${({ theme }) => css`
    max-width: ${theme.grid.maxContent};
    margin: 0 auto;
  `}
`
