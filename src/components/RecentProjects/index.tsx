import ProjectBox from 'components/ProjectBox'
import Link from 'next/link'
import { HomeProps } from 'pages'
import * as S from './styles'

const RecentProjects = ({ projects }: HomeProps) => (
  <S.Wrapper>
    <S.Info>
      <S.Title>Projetos Recentes</S.Title>
      <S.ViewMore>
        <Link href="/portfolio">
          <a>Ver todos os projetos</a>
        </Link>
      </S.ViewMore>
    </S.Info>
    <S.Content>
      {projects.map((item) => (
        <ProjectBox
          key={item.id}
          slug={item.slug}
          title={item.title}
          cover={item.cover}
          tags={item.tags}
        />
      ))}
    </S.Content>
  </S.Wrapper>
)

export default RecentProjects
