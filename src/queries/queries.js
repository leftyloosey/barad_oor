import { gql } from '@apollo/client'

export const THE_QUERY = gql`
  query {
    theQuery
  }
`
export const STRANG_LIST = gql`
  query {
    strangList {
      content
    }
  }
`
export const CREATE = gql`
  mutation Mutation($content: String) {
    create(content: $content) {
      content
    }
  }
`
