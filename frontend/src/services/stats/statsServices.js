import axios from 'axios'

const axiosForCookies = axios.create({
  withCredentials: true,
})

export const stats = (gameName) =>
  axiosForCookies({
    method: 'get',
    url: '/api/stats',
    params: {
      gameName,
    },
  })

export const updateStats = (gameName, status) =>
  axiosForCookies.post('/api/stats', {
    gameName,
    status,
  })
