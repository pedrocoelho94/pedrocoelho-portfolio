import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type NavProps = {
  isAtTop: boolean
}

export const Wrapper = styled.nav<NavProps>`
  ${({ theme, isAtTop = true }) => css`
    position: fixed;
    width: 100%;
    background-color: transparent;
    height: 6rem;
    transition: background-color 0.2s ease-in-out;
    z-index: ${theme.layers.layer9};

    ${!isAtTop &&
    `
      background-color: ${theme.colors.secondary};
      box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.85);
    `}
  `}
`

export const NavContent = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  max-height: 6rem;
  padding-top: 12px;
  padding-bottom: 8px;
  caret-color: transparent;
`

export const Menu = styled.ul`
  ${({ theme }) => css`
    height: 6rem;

    a {
      color: ${theme.colors.white};
      height: 6rem;
      position: relative;
      display: inline-block;
      line-height: 6rem;
      transition: ${theme.transitions.fast};

      &:hover {
        color: ${theme.colors.highlight};
      }

      & + a {
        margin-left: 2rem;
      }

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0.2rem;
        background: ${theme.colors.highlight};
        bottom: 1.5rem;
        left: 0;
        transition: ${theme.transitions.fast};
      }

      &:hover::after {
        width: 100%;
      }
    }

    ${media.lessThan('small')`
      display: none;
    `}
  `}
`

export const MenuItem = styled.li``

export const NavIcon = styled.div`
  cursor: pointer;
  display: none;

  ${media.lessThan('small')`
    display: block;
  `}
`

type OpenProps = {
  open: boolean
}

export const Line = styled.span<OpenProps>`
  ${({ theme, open }) => css`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: ${theme.colors.primary};
    transition: ${theme.transitions.faster};

    :nth-child(2) {
      width: ${open ? '35%' : '70%'};
    }

    :nth-child(3) {
      width: ${open ? '55%' : '70%'};
    }
  `}
`

export const SidenavContainer = styled.div<OpenProps>`
  ${({ theme, open }) => css`
    position: fixed;
    top: 0;
    left: -100%;
    background-color: ${theme.colors.secondary};
    height: 100vh;
    width: 100%;
    padding: ${theme.spacings.medium} 0;
    transition: left 0.3s ease-in-out;

    ${media.greaterThan('small')`
      display: none;
    `}

    ${open &&
    `
      left: 0;
    `}
  `}
`
export const SidenavContent = styled.div``

export const HeaderMobile = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacings.huge};
  `}
`

export const CloseBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    color: ${theme.colors.primary};
    font-size: 3rem;
    transition: ${theme.transitions.faster};

    &:hover {
      color: ${theme.colors.highlight};
    }
  `}
`

export const MenuMobile = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    a {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.large};
      font-weight: bold;
      display: inline;
      transition: ${theme.transitions.faster};

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`

export const MobileItem = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
