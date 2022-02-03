import { useEffect, useState } from 'react'

import NavbarLink from 'components/NavbarLink'
import { Container } from 'components/Container'

import { IoMdClose } from 'react-icons/io'

import * as S from './styles'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  function navEffects() {
    if (window.scrollY > 30) {
      setIsAtTop(false)
    } else {
      setIsAtTop(true)
    }
  }

  useEffect(() => {
    // ao navegar de volta para a página anterior essa verificação tbm é feita
    if (window.scrollY > 30) {
      setIsAtTop(false)
    }

    window.addEventListener('scroll', navEffects)

    return () => window.removeEventListener('scroll', navEffects)
  }, [])

  return (
    <S.Wrapper isAtTop={isAtTop}>
      <Container>
        <S.NavContent>
          <NavbarLink href="/">
            <S.Logo
              onClick={() => setToggle(false)}
              src="/img/coelho.svg"
              alt="Pedro Coelho"
            />
          </NavbarLink>
          <S.Menu>
            <NavbarLink href="/portfolio">Portfolio</NavbarLink>
            <NavbarLink href="/contato">Contato</NavbarLink>
          </S.Menu>

          <S.NavIcon onClick={() => setToggle(!toggle)}>
            <S.Line open={toggle} />
            <S.Line open={toggle} />
            <S.Line open={toggle} />
          </S.NavIcon>
        </S.NavContent>
      </Container>

      <S.SidenavContainer open={toggle}>
        <Container>
          <S.SidenavContent>
            <S.HeaderMobile>
              <NavbarLink href="/">
                <S.Logo
                  onClick={() => setToggle(false)}
                  src="/img/coelho.svg"
                  alt="Pedro Coelho"
                />
              </NavbarLink>

              <S.CloseBtn onClick={() => setToggle(false)}>
                <IoMdClose />
              </S.CloseBtn>
            </S.HeaderMobile>
            <S.MenuMobile>
              <li>
                <NavbarLink href="/portfolio">Portfolio</NavbarLink>
              </li>
              <li>
                <NavbarLink href="/contato">Contato</NavbarLink>
              </li>
            </S.MenuMobile>
          </S.SidenavContent>
        </Container>
      </S.SidenavContainer>
    </S.Wrapper>
  )
}

export default Navbar
