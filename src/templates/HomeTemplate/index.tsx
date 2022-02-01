import { Container } from 'components/Container'
import Hero from 'components/Hero'

import RecentProjects from 'components/RecentProjects'
import { Section } from 'components/Section'
import { HomeProps } from 'pages'
import BaseTemplate from 'templates/BaseTemplate'

const HomeTemplate = ({ projects }: HomeProps) => (
  <BaseTemplate>
    <Hero />

    <Container>
      <Section>
        <RecentProjects projects={projects} />
      </Section>
    </Container>
  </BaseTemplate>
)

export default HomeTemplate
