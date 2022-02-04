import { Container } from 'components/Container'
import Post from 'components/Post'
import { Section } from 'components/Section'
import Head from 'next/head'
import Link from 'next/link'
import { ProjectProps } from 'pages/portfolio/[slug]'
import BaseTemplate from 'templates/BaseTemplate'
import * as S from './styles'

const ProjectTemplate = ({ project, siblingsPosts }: ProjectProps) => (
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

        <S.RelatedPosts>
          {!!siblingsPosts.prev && (
            <S.Left>
              <Link href={`/portfolio/${siblingsPosts.prev.slug}`} passHref>
                <S.LinkContent>
                  <span>Anterior</span>
                  <span>{siblingsPosts.prev.title}</span>
                </S.LinkContent>
              </Link>
            </S.Left>
          )}

          {!!siblingsPosts.next && (
            <S.Right>
              <Link href={`/portfolio/${siblingsPosts.next.slug}`} passHref>
                <S.LinkContent>
                  <span>Próximo</span>
                  <span>{siblingsPosts.next.title}</span>
                </S.LinkContent>
              </Link>
            </S.Right>
          )}
        </S.RelatedPosts>
      </Container>
    </BaseTemplate>
  </>
)

export default ProjectTemplate
