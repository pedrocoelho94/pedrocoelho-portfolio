import { client } from 'graphql/client'
import { GET_PROJECT, GET_SIBLIGNS_POSTS } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProjectTemplate from 'templates/ProjectTemplate'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'

export type SingleProjectProps = {
  createdAt: string
  id: string
  title: string
  slug: string
  excerpt?: string
  demoProjectUrl?: string
  githubRepo?: string
  cover: Cover
  content: {
    html: string
  }
  tags: Tag[]
}

type SiblingProps = {
  slug: string
  title: string
}

export type ProjectProps = {
  project: SingleProjectProps
  siblingsPosts: {
    prev?: SiblingProps
    next?: SiblingProps
  }
}

export default function ProjectPage({ project, siblingsPosts }: ProjectProps) {
  return <ProjectTemplate project={project} siblingsPosts={siblingsPosts} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { projects } = await client.request(GET_PROJECT, {
    slug: params?.slug
  })

  if (!projects.length) return { notFound: true }

  const createdAt = projects[0].createdAt

  const { prev, next } = await client.request(GET_SIBLIGNS_POSTS, {
    date: createdAt
  })

  const siblingsPosts = {
    prev: prev[0] || null,
    next: next[0] || null
  }

  return {
    revalidate: 60, // 1min
    props: {
      project: projects[0],
      siblingsPosts
    }
  }
}
