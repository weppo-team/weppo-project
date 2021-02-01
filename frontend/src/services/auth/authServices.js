import axios from 'axios'
import { useState, useEffect } from 'react'

export const axiosForCookies = axios.create({
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

export const guest = (username) =>
  axiosForCookies.post('/api/guest', {
    username,
  })

export const logout = () => axiosForCookies.post('/api/logout')

export const getUserData = () => axiosForCookies.post('/api/user')

export const checkIfUserLoggedIn = () => axiosForCookies.post('/api/status')

export const useUserData = () => {
  const [loading, setLoading] = useState(true)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    getUserData()
      .then((response) => {
        setUserData(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return {
    loading,
    userData,
  }
}
