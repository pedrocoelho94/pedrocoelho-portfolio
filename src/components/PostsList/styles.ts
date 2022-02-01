import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import * as ProjectBoxStyles from 'components/ProjectBox/styles'

export const Wrapper = styled.div``

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.medium};
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
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    ${ProjectBoxStyles.Title} {
      font-size: ${theme.font.sizes.normal};
    }

    ${ProjectBoxStyles.Info} {
      min-height: 9rem;
    }

    ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `}

    ${media.lessThan('small')`
    grid-template-columns: 1fr;
  `}
  `}
`
