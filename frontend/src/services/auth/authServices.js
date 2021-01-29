import axios from 'axios'

const axiosForCookies = axios.create({
  withCredentials: true,
})

export const register = (username, email, password) =>
  axiosForCookies.post('/api/register', {
    username,
    email,
    password,
  })

export const login = (username, password) =>
  axiosForCookies.post('/api/login', {
    username,
    password,
  })

export const logout = () => axiosForCookies.post('/api/logout')

export const getUserData = () => axiosForCookies.post('/api/user')

export const checkIfUserLoggedIn = () => axiosForCookies.post('/api/status')
