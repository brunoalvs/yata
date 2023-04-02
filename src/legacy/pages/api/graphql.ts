import { createYoga, createSchema } from 'graphql-yoga'

const users = [
  { name: 'John Doe' },
  { name: 'Jane Doe' },
  { name: 'Edgar Allan Poe' },
  { name: 'Ludwig van Beethoven' },
  { name: 'Wolfgang Amadeus Mozart' },
  { name: 'Johann Sebastian Bach' }
]


const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
    hello: String
  }
  type User {
    name: String
  }

  type Mutation {
    addUser(name: String!): User!
  }
`

const resolvers = {
  Query: {
    users() {
      return users
    },
    hello: () => 'Hello world!',
  },
  Mutation: {
    addUser: ($name: string) => {
      const user = $name
      users.push({ name: user })
      return user
    }
  }
}

const schema = createSchema({
  typeDefs,
  resolvers,
})

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default createYoga({
  schema,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
})
