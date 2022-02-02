import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`
export const CoverContainer = styled.div`
  position: relative;
  padding-bottom: 105%;
  max-width: 100%;
`

export const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
`

export const Info = styled.div`
  ${({ theme }) => css`
    min-height: 12rem;
    padding: ${theme.spacings.small};

    background: ${theme.colors.secondary};
    border-radius: 0 0 5px 5px;

    ${media.between('medium', 'large')`
      min-height: 8rem;
    `}
  `}
`
export const Tags = styled.span`
  ${({ theme }) => css`
    display: inline-block;
    margin-bottom: 0.5rem;

    a {
      display: inline-flex;
      background-color: ${theme.colors.highlight};
      color: ${theme.colors.primary};
      padding: ${theme.spacings.tiny};
      margin: ${theme.spacings.tiny} 0;
      border-radius: 5px;
      line-height: 1;
      margin-right: 1rem;
      font-size: 1.4rem;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.highlight};
      }
    }
  `}

  ${media.between('small', 'large')`
    display: none;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};

    ${media.between('medium', 'large')`
      font-size: ${theme.font.sizes.normal};
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`
