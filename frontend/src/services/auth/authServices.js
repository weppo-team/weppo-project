import axios from 'axios'

const API_URL = 'http://localhost:9876/api'

const axiosForCookies = axios.create({
  withCredentials: true,
})

export const register = (username, email, password) =>
  axiosForCookies.post(`${API_URL}/register`, {
    username,
    email,
    password,
  })

export const login = (username, password) =>
  axiosForCookies.post(`${API_URL}/login`, {
    username,
    password,
  })

export const logout = () => axiosForCookies.post(`${API_URL}/logout`)

export const getUserData = () => axiosForCookies.post(`${API_URL}/user`)

export const checkIfUserLoggedIn = () =>
  axiosForCookies.post(`${API_URL}/status`)
