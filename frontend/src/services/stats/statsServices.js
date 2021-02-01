import axios from 'axios'

const axiosForCookies = axios.create({
  withCredentials: true,
})

export const stats = (name) => axiosForCookies.post(`/api/stats/${name}`)
