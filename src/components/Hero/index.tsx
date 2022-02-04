import { Container } from 'components/Container'
import Link from 'next/link'
import * as S from './styles'

import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs'

const Hero = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Title>Olá, eu sou o Pedro!</S.Title>
        <S.Description>
          Estudante de desenvolvimento web com foco no Front-end. Meu objetivo
          hoje é entrar no mercado de trabalho como programador JavaScript. Se
          gostou do que viu aqui nao deixe de entrar em contato comigo.
        </S.Description>
        <S.ExtraInfo>
          <span>Possuo experiência com:</span>
          HTML, CSS, JS, React, NextJS, Styled-Components, Headless CMS
        </S.ExtraInfo>
        <Link href="/contato" passHref>
          <S.Link>Entre em contato</S.Link>
        </Link>

        <S.Socials>
          <span>
            <a
              href="https://www.instagram.com/pdrocoelho/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={40} />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/pedrocoelho94/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={40} />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/pedrocoelho94"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={40} />
            </a>
          </span>
        </S.Socials>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default Hero
