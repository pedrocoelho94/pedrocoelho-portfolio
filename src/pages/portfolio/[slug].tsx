import { client } from 'graphql/client'
import { GET_PROJECT } from 'graphql/queries'
import { GetStaticPaths, GetStaticProps } from 'next'
import ProjectTemplate from 'templates/ProjectTemplate'
import { Cover } from 'types/shared/cover'
import { Tag } from 'types/shared/tag'

export type SingleProjectProps = {
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

export type ProjectProps = {
  project: SingleProjectProps
}

export default function ProjectPage({ project }: ProjectProps) {
  return <ProjectTemplate project={project} />
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

  return {
    revalidate: 60, // 1min
    props: {
      project: projects[0]
    }
  }
}
