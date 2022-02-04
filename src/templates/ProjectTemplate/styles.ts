import { Section } from 'components/Section'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const RelatedPosts = styled(Section)`
  ${({ theme }) => css`
    max-width: calc(${theme.grid.maxContent} + 4.8rem);
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-areas: 'left right';
  `}
`

export const LinkContent = styled.a`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: ${theme.spacings.medium};
    border-radius: 5px;

    span {
      transition: ${theme.transitions.faster};
    }

    span:nth-child(1) {
      font-weight: bold;
      color: ${theme.colors.primary};
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    ${media.lessThan('medium')`
      padding: 0;

      &:hover {
        background-color: transparent;

        span:nth-child(2) {
          filter: brightness(0.7)
        }
      }
    `}
  `}
`

export const Left = styled.div`
  grid-area: left;
  text-align: left;
  width: 100%;

  ${LinkContent} {
  }
`

export const Right = styled.div`
  grid-area: right;
  text-align: right;
  width: 100%;

  ${LinkContent} {
  }
`
