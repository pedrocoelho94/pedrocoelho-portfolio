import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div``

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.medium};

    ${media.lessThan('small')`
      font-size: calc(${theme.font.sizes.small} - 0.3rem);
    `}
  `}
`

export const Title = styled.h2`
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  line-height: 1;
`

export const ViewMore = styled.p`
  text-align: right;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
`
