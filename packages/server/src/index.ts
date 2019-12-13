import dotenv from 'dotenv'
import micro, { json, RequestHandler } from 'micro'
import { buildSchema, graphql } from 'graphql'
import { cors } from './cors'
import { config } from './config'
import { createContext } from './context'
import { capture } from './capture'

dotenv.config()

export const handler: RequestHandler = async req => {
  /**
   * Ensure the correct request method is used.
   */
  if (req.method === 'OPTIONS') {
    return {}
  }
  if (req.method !== 'POST') {
    throw new Error('Please ensure your request method is POST')
  }
  /**
   * Extract the contents of the request body.
   */
  const body: {
    query?: string
    variables?: { [key: string]: any }
    operationName?: string
  } = await json(req)
  /**
   * Validate the body data.
   */
  if (typeof body.query !== 'string' || body.query.trim().length === 0) {
    throw new Error('Please provide a query in the body of your request')
  }
  if (body.query.length > 3000) {
    throw new Error('GraphQL query must be less than 3000 characters')
  }
  /**
   * Register the schema process the graphql request.
   */
  const schema = buildSchema(`
    type Todo {
      content: String!
    }
    type Query {
      GetTodo: Todo!
    }
    type Mutation {
      CreateTodo: Todo!
    }
  `)
  const root = {
    GetTodo: () => ({
      content: 'todo',
    }),
    CreateTodo: () => ({
      content: 'todo',
    }),
  }
  return graphql({
    schema,
    rootValue: root,
    source: body.query,
    variableValues: body.variables,
    operationName: body.operationName,
    contextValue: await createContext(),
  })
}

export default micro(cors()(capture(handler))).listen(config.port, () => {
  console.log(`🚀  Server active at port ${config.port}`)
})
