import { client } from 'graphql/client'
import { GET_PROJECTS } from 'graphql/queries'
import { GetStaticProps } from 'next'

import HomeTemplate from 'templates/HomeTemplate'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'

type Post = {
  id: string
  title: string
  slug: string
  cover: Cover
  tags: Tag[]
}

export type HomeProps = {
  projects: Post[]
}

export default function Home({ projects }: HomeProps) {
  return <HomeTemplate projects={projects} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { projects } = await client.request(GET_PROJECTS, {
    limit: 6
  })

  return {
    revalidate: 60, // 1 mimute
    props: { projects }
  }
}
