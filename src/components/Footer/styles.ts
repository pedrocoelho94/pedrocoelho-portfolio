import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    min-height: 40rem;
    width: 100%;
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.xxlarge} 0;
  `}
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  ${media.lessThan('small')`
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  `}
`
export const Logo = styled.img`
  cursor: pointer;
  width: auto;
  height: 2rem;
`
export const Socials = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 2rem;
    gap: 1rem;

    svg {
      width: 2rem;
      height: 2rem;
      color: ${theme.colors.white};
      transition: ${theme.transitions.faster};

      &:hover {
        color: ${theme.colors.highlight};
      }
    }
  `}
`
export const Copyright = styled.p`
  ${({ theme }) => css`
    text-align: left;
    font-size: calc(${theme.font.sizes.small} - 0.2rem);
  `}
`
