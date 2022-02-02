import ProjectBox from 'components/ProjectBox'
import { PostsProps } from 'pages/tag/[slug]'
import * as S from './styles'

type PostsListProps = {
  titlePage: string
} & PostsProps

const PostsList = ({ projects, titlePage }: PostsListProps) => (
  <S.Wrapper>
    <S.Info>
      <S.Title>{titlePage}</S.Title>
    </S.Info>
    <S.Content>
      {projects.map((item) => (
        <ProjectBox
          key={item.id}
          slug={item.slug}
          title={item.title}
          coverCard={item.coverCard}
          tags={item.tags}
        />
      ))}
    </S.Content>
  </S.Wrapper>
)

export default PostsList
