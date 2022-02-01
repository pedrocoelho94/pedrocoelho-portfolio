import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const BaseTemplate = ({ children }: BaseTemplateProps) => (
  <>
    <Navbar />
    <S.Content>{children}</S.Content>
    <Footer />
  </>
)

export default BaseTemplate
