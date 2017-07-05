import { buildSchema } from 'graphql'

var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

export default schema
