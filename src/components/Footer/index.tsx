import { Container } from 'components/Container'
import { useRouter } from 'next/router'
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'
import * as S from './styles'

const Footer = () => {
  const router = useRouter()

  function handleClick() {
    if (router.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <S.Logo
            onClick={handleClick}
            title="Ir para página inicial"
            src="/img/pedrocoelho-logo2.png"
            alt="logo do site"
          />

          <S.Socials>
            <span>
              <a
                href="https://www.instagram.com/pdrocoelho/"
                target="_blank"
                rel="noreferrer"
              >
                <BsInstagram />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/pedrocoelho94/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </span>
            <span>
              <a
                href="https://github.com/pedrocoelho94"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
            </span>
          </S.Socials>
        </S.Content>
        <S.Copyright>
          Copyright © 2022. Todos os direitos reservados.
        </S.Copyright>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
