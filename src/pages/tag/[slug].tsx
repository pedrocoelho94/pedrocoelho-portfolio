import { client } from 'graphql/client'
import { GET_PROJECTS_BY_SLUG } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PostsTemplate from 'templates/PostsTemplate'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'

type Post = {
  id: string
  title: string
  slug: string
  coverCard: Cover
  tags: Tag[]
}

export type PostsProps = {
  projects: Post[]
}

export default function TagsPage({ projects }: PostsProps) {
  const router = useRouter()

  const tagName = projects[0].tags.filter(
    (tag) => tag.slug === router.query.slug
  )[0].title

  return <PostsTemplate projects={projects} titlePage={`Tag: ${tagName}`} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await client.request(GET_PROJECTS_BY_SLUG, {
    tagSlug: params?.slug
  })

  if (!projects.length) return { notFound: true }

  return {
    revalidate: 60, // 1min
    props: { projects }
  }
}
