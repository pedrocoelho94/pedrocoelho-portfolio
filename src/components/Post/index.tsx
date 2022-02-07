import PostTags from 'components/PostTags'
import { useEffect, useState } from 'react'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'
import * as S from './styles'

type ProjectProps = {
  title: string
  excerpt?: string
  cover: Cover
  demoProjectUrl?: string
  githubRepo?: string
  content: {
    html: string
  }
  tags: Tag[]
}

const Post = ({
  title,
  excerpt,
  cover,
  content,
  tags,
  demoProjectUrl,
  githubRepo
}: ProjectProps) => {
  const [scrolledPx, setScrolledPx] = useState('0%')
  const [showBar, setShowBar] = useState(false)
  const [winScroll, setWinScroll] = useState(0)
  const [height, setHeight] = useState(0)

  function scrolledHeight() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = ((winScroll / height) * 100).toFixed(2)

    console.log(document.documentElement.scrollHeight, window.innerHeight)

    setWinScroll(winScroll)
    setHeight(height)

    setScrolledPx(() => `${scrolled}%`)

    if (window.scrollY > 30) {
      setShowBar(true)
    } else {
      setShowBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolledHeight)

    return () => {
      window.removeEventListener('scroll', scrolledHeight)
    }
  }, [])

  return (
    <>
      <S.ProgressContainer showBar={showBar}>
        <S.ProgressBar scrolled={scrolledPx} />
      </S.ProgressContainer>

      <S.Valores>
        {winScroll} {height} {scrolledPx}
      </S.Valores>

      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Excerpt>{excerpt}</S.Excerpt>
        <S.Cover src={cover.url} alt={cover.alt} />

        {!!demoProjectUrl || !!githubRepo ? (
          <S.Links>
            {!!demoProjectUrl && (
              <a href={demoProjectUrl} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}

            {!!githubRepo && (
              <a href={githubRepo} target="_blank" rel="noreferrer">
                Github Repositório
              </a>
            )}
          </S.Links>
        ) : (
          ''
        )}
        <S.Content dangerouslySetInnerHTML={{ __html: content.html }} />
        <S.Tags>
          <PostTags link={tags} text="Tags: " />
        </S.Tags>
      </S.Wrapper>
    </>
  )
}

export default Post
