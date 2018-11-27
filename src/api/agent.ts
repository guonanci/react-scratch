import axios from 'axios'

const URL = 'http://localhost:3000/api'
const getToken = () => 'some-token'

const formatToken = (token: string | null) => {
  return token && `Token ${token}`
}

const agentInstance = axios.create({
  baseURL: URL,
  timeout: 4000,
  headers: {
    common: {
      Authorization: formatToken(getToken()),
    },
  },
})

// Public
export const setToken = (token: string | null) => {
  agentInstance.defaults.headers.common.Authorization = formatToken(token)
}

export default agentInstance