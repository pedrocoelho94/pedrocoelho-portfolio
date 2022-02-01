import { Container } from 'components/Container'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import * as S from './styles'
import NavbarLink from 'components/NavbarLink'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)

  function navEffects() {
    if (window.pageYOffset > 70) {
      setIsAtTop(false)
    } else {
      setIsAtTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navEffects)

    return () => window.removeEventListener('scroll', navEffects)
  }, [])

  return (
    <S.Wrapper isAtTop={isAtTop}>
      <Container>
        <S.NavContent>
          <Link href="/">
            <a onClick={() => setToggle(false)}>
              <S.Logo src="/img/coelho.svg" alt="Pedro Coelho" />
            </a>
          </Link>
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
              <S.Logo src="/img/coelho.svg" alt="Pedro Coelho" />
              <S.CloseBtn onClick={() => setToggle(false)}>X</S.CloseBtn>
            </S.HeaderMobile>
            <S.MenuMobile>
              <NavbarLink href="/portfolio">Portfolio</NavbarLink>
              <NavbarLink href="/contato">Contato</NavbarLink>
            </S.MenuMobile>
          </S.SidenavContent>
        </Container>
      </S.SidenavContainer>
    </S.Wrapper>
  )
}

export default Navbar
