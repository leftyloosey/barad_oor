import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    theQuery: String
    strangList: [Strang]
  }

  type Strang {
    content: String
  }

  type Mutation {
    create(content: String): Strang
  }
`
export default typeDefs
