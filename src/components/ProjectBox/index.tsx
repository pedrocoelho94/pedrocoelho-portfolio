import Link from 'next/link'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'
import * as S from './styles'

export type ProjectBoxProps = {
  title: string
  slug: string
  cover: Cover
  tags?: Tag[]
}

const ProjectBox = ({ title, slug, cover, tags }: ProjectBoxProps) => (
  <Link href={`/portfolio/${slug}`}>
    <a>
      {console.log(tags)}
      <S.Wrapper>
        <S.CoverContainer>
          <S.Cover src={`${cover.url}`} alt={`${cover.alt}`} />
        </S.CoverContainer>

        <S.Info>
          {tags?.map((tag) => (
            <S.Tags key={tag.id}>
              <Link href={`tag/${tag.slug}`}>
                <a>{tag.title}</a>
              </Link>
            </S.Tags>
          ))}
          <S.Title>{title}</S.Title>
        </S.Info>
      </S.Wrapper>
    </a>
  </Link>
)

export default ProjectBox
