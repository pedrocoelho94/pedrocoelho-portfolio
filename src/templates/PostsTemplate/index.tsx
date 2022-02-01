import { Container } from 'components/Container'
import PostsList from 'components/PostsList'
import { Section } from 'components/Section'
import Head from 'next/head'
import { PostsProps } from 'pages/tag/[slug]'
import BaseTemplate from 'templates/BaseTemplate'

type PostsTemplateProps = {
  titlePage: string
} & PostsProps

const PostsTemplate = ({ projects, titlePage }: PostsTemplateProps) => (
  <>
    <Head>
      <title>{titlePage} | Pedro Coelho</title>
    </Head>
    <BaseTemplate>
      <Container>
        <Section>
          <PostsList projects={projects} titlePage={titlePage} />
        </Section>
      </Container>
    </BaseTemplate>
  </>
)
export default PostsTemplate
