import axios from 'axios'

const axiosForCookies = axios.create({
  withCredentials: true,
})

export const stats = (gameName) =>
  axiosForCookies.post(`/api/stats`, {
    gameName,
  })
