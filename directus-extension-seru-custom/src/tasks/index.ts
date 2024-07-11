import { Axios } from 'axios'

const apiHandler = async (payload, query, collection) => {
  console.log({ query: JSON.stringify(query, null, 2) })
  const contractNoIdx = query.fields.findIndex('contract_no')
  const fieldModified = query.fields.splice(contractNoIdx);

  query = {
    ...query,
    fields: fieldModified
  }

  if (query.collection === 'tasks') {
    const api = new Axios({
      baseURL: 'https://dummyjson.com'
    })

    const response = await api.get('/products/2')
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
      post: productFormatted,
    }
  }
}

export default {
  apiHandler,
}
