import Link from 'next/link'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'
import * as S from './styles'

export type ProjectBoxProps = {
  title: string
  slug: string
  coverCard: Cover
  tags?: Tag[]
}
const ProjectBox = ({ title, slug, coverCard, tags }: ProjectBoxProps) => (
  <S.Wrapper>
    <Link href={`/portfolio/${slug}`}>
      <a>
        <S.CoverContainer>
          <S.Cover src={`${coverCard.url}`} alt={`${coverCard.alt}`} />
        </S.CoverContainer>
      </a>
    </Link>
    <S.Info>
      {tags?.map((tag) => (
        <S.Tags key={tag.id}>
          <Link href={`/tag/${tag.slug}`}>
            <a>{tag.title}</a>
          </Link>
        </S.Tags>
      ))}
      <Link href={`/portfolio/${slug}`}>
        <a>
          <S.Title>{title}</S.Title>
        </a>
      </Link>
    </S.Info>
  </S.Wrapper>
)

export default ProjectBox
