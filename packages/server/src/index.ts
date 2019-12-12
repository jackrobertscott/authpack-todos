import dotenv from 'dotenv'
import micro, { RequestHandler } from 'micro'
import { cors } from './cors'
import { config } from './config'

dotenv.config()

export const handler: RequestHandler = async req => {
  if (req.method === 'OPTIONS') {
    return {}
  }
  return { data: 'Hello' }
}

export default micro(cors()(handler)).listen(config.port, () => {
  console.log(`🚀  Server active at port ${config.port}`)
})
