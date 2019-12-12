import * as dotenvSafe from 'dotenv-safe'
import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenvSafe.config({ allowEmptyValues: true })
  dotenv.config()
}

interface IConfig {
  environment: string
  production: boolean
  port: number
  mongodb: {
    uri: string
    db: string
  }
  authpack: {
    secret: string
  }
}

export const config: IConfig = {
  environment: process.env.NODE_ENV || 'development',
  production: process.env.NODE_ENV === 'production',
  port: 4000,
  mongodb: {
    uri: process.env.MONGODB_URI as string,
    db: 'todos',
  },
  authpack: {
    secret: process.env.AUTHPACK_SECRET as string,
  },
}
