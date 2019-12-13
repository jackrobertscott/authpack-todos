import { send, RequestHandler } from 'micro'

export const capture = (handler: RequestHandler): RequestHandler => {
  return async (req, res) => {
    try {
      return await handler(req, res)
    } catch (error) {
      const data = {
        code: error.code || 500,
        message: error.message,
        error,
      }
      send(res, data.code, data)
    }
  }
}
