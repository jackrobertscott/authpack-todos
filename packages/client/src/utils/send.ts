import axios from 'axios'
import { useState, useMemo } from 'react'

export interface ISend {
  query: string
  variables?: { [key: string]: any }
  operationName?: string
}

export const send = async ({ query, variables, operationName }: ISend) => {
  const { data } = await axios({
    url: 'http://localhost:4000',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      query,
      variables,
      operationName,
    },
  })
  return data
}

export const useSend = () => {
  const [value, valueSet] = useState<any>()
  const fetch = (options: ISend) =>
    send(options).then(({ data }) => valueSet(data))
  return useMemo(() => ({ value, fetch }), [value])
}
