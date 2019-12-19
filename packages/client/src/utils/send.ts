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

export const useSend = <T>(query: string) => {
  const [value, valueSet] = useState<T | undefined>()
  const fetch = (variables?: { [key: string]: any }) =>
    send({ query, variables }).then(({ data }) => valueSet(data))
  return useMemo(() => {
    return {
      value,
      fetch,
    }
    // eslint-disable-next-line
  }, [value])
}
