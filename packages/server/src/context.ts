import { MongoClient } from 'mongodb'
import { config } from './config'

let cachedClient: MongoClient
export async function createMongoClient() {
  if (!cachedClient) {
    cachedClient = await MongoClient.connect(config.mongodb.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
  return cachedClient
}

export async function createContext() {
  const mongoClient = await createMongoClient()
  const database = mongoClient.db(config.mongodb.db)
  return { database }
}
