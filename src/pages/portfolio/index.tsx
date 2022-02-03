import { client } from 'graphql/client'
import { GET_PROJECTS } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { PostsProps } from 'pages/tag/[slug]'
import PostsTemplate from 'templates/PostsTemplate'

export default function Home({ projects }: PostsProps) {
  console.log(projects)

  return <PostsTemplate projects={projects} titlePage="Projetos" />
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await client.request(GET_PROJECTS, {
    limit: 50
  })

  return {
    revalidate: 60, // 1min
    props: { projects }
  }
}
