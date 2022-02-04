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
        <S.CoverContainer
          coverCard={`${coverCard.url}`}
          aria-label={`${coverCard.alt}`}
        >
          <S.Overlay />

          <S.Info>
            <S.Title>{title}</S.Title>

            {tags?.map((tag) => (
              <S.Tags key={tag.id}>{tag.title}</S.Tags>
            ))}
          </S.Info>
        </S.CoverContainer>
      </a>
    </Link>
  </S.Wrapper>
)

export default ProjectBox
