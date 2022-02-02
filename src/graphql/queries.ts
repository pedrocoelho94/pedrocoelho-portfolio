import { gql } from 'graphql-request'

export const GET_PROJECTS = gql`
  query GET_PROJECTS($limit: Int!) {
    projects(first: $limit, orderBy: createdAt_DESC) {
      id
      title
      slug
      coverCard {
        url
        alt
      }
      cover {
        url
        alt
      }
      tags {
        id
        title
        slug
      }
    }
  }
`
export const GET_PROJECT = gql`
  query GET_PROJECT($slug: String!) {
    projects(where: { slug: $slug }) {
      id
      title
      slug
      excerpt
      cover {
        url
        alt
      }
      demoProjectUrl
      githubRepo
      content {
        html
      }
      tags {
        id
        slug
        title
      }
    }
  }
`

export const GET_PROJECTS_BY_SLUG = gql`
  query GET_PROJECTS_BY_SLUG($tagSlug: String!) {
    projects(
      orderBy: createdAt_DESC
      where: { tags_some: { slug: $tagSlug } }
    ) {
      id
      title
      slug
      coverCard {
        url
        alt
      }
      cover {
        url
        alt
      }
      tags {
        id
        title
        slug
      }
    }
  }
`
