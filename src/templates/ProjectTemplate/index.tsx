import { Container } from 'components/Container'
import Post from 'components/Post'
import { Section } from 'components/Section'
import Head from 'next/head'
import { ProjectProps } from 'pages/portfolio/[slug]'
import BaseTemplate from 'templates/BaseTemplate'
// import * as S from './styles'

const ProjectTemplate = ({ project }: ProjectProps) => (
  <>
    <Head>
      <title>{project.title} | Pedro Coelho</title>
    </Head>
    <BaseTemplate>
      <Container>
        <Section>
          <Post
            title={project.title}
            excerpt={project.excerpt}
            demoProjectUrl={project.demoProjectUrl}
            githubRepo={project.githubRepo}
            cover={project.cover}
            content={project.content}
            tags={project.tags}
          />
        </Section>
      </Container>
    </BaseTemplate>
  </>
)

export default ProjectTemplate
