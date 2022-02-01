import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHCMS_ENDPOINT || ''

export const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_ACCESS_TOKEN}`
  }
})
