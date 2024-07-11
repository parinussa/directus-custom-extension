import { Axios } from 'axios'

const apiHandler = async (payload, query, collection) => {
  if (query.collection === 'users') {
    const api = new Axios({
      baseURL: 'https://dummyjson.com'
    })

    const response = await api.get('/products/1')
    const productFormatted = JSON.parse(response.data)

    if (Array.isArray(payload)) {
      const payloadModified = payload.map((p) => ({
        ...p,
        post: productFormatted
      }))

      return payloadModified
    }

    return {
      ...(payload as any),
      post: productFormatted
    }
  }
}

export default {
  apiHandler,
}
