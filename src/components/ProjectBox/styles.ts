import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type CoverCardProps = {
  coverCard: string
}

export const Wrapper = styled.div``

export const Overlay = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    opacity: 0;
    transition: ${theme.transitions.faster};
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    transition: ${theme.transitions.faster};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    padding: 0.5rem;
    color: ${theme.colors.gray10};

    ${media.between('small', 'large')`
      font-size: ${theme.font.sizes.normal};
    `}
  `}
`

export const Tags = styled.span`
  font-weight: bold;
  display: inline-block;
  margin-top: 0.5rem;

  ${media.between('small', 'large')`
      display: none;
    `}

  &:not(:last-child)::after {
    content: ', ';
    white-space: pre;
  }
`

export const CoverContainer = styled.div<CoverCardProps>`
  ${({ coverCard }) => css`
    position: relative;
    background-image: url(${coverCard});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-bottom: 140%;

    &:hover {
      ${Overlay} {
        opacity: 0.85;
      }

      ${Info} {
        opacity: 1;
      }
    }
  `}
`
