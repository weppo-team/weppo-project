import axios from 'axios'

const API_URL = 'http://localhost:9876/api/'

export const register = (username, email, password) =>
  axios.post(`${API_URL}register`, {
    username,
    email,
    password,
  })

export const login = (username, password) =>
  axios.post(`${API_URL}login`, {
    username,
    password,
  })

export const getUserData = () => axios.post(`${API_URL}userdata`)
