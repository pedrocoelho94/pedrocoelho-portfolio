import { GetStaticProps } from 'next'
import ContactTemplate from 'templates/ContactTemplate'

export default function ContactPage() {
  return <ContactTemplate />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
