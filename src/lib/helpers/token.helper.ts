import { IUser } from '../interfaces'

interface ITokenData {
  exp: string
  iat: string
  sub: number
}

export const decodeToken = (token: string) => {
  const base64Url = token.split('.')[1] // Get the payload part
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/') // Base64 URL decode
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
  return JSON.parse(jsonPayload) as ITokenData
}

export const isTokenExpired = (token: string | null) => {
  if (!token) return true
  const base64Url = token.split('.')[1] // Get the payload part
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/') // Base64 URL decode
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )
  const payload = JSON.parse(jsonPayload) as ITokenData
  if (!payload) return true
  const { exp } = payload
  if (!exp) return true
  return Date.now() >= +exp * 1000
}

export const getTokenUser = () => localStorage.getItem('user')
export const getAccessToken = () => localStorage.getItem('jwt')
export const getRefreshToken = () => localStorage.getItem('refresh')

export const setTokenUser = (user: IUser) => localStorage.set(`user`, JSON.stringify(user))
export const setAccessToken = (token: string) => localStorage.setItem('jwt', token)
export const setRefreshToken = (token: string) => localStorage.setItem('refresh', token)
