import { Container } from 'components/Container'
import * as S from './styles'

const Hero = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Title>Olá, eu sou o Pedro!</S.Title>
        <S.Description>
          Im a freelance graphic designer with a penchant for UI. Ive worked as
          an art director for the last few years in the tourism, consumer
          product, and sport industries.
        </S.Description>
        <S.Button>Entre em contato</S.Button>

        <S.Socials>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Github</span>
        </S.Socials>
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default Hero
