import axiosClient from '../instance/axios-cllient'
import { IAuthResponse } from '../interfaces'

export const authLogin = async (email: string, password: string) => {
  const response = await axiosClient.post<IAuthResponse>('/auth/login', {
    identifier: email,
    password: password,
  })
  if (response.data) {
    return response.data
  }
  throw 'Something went wrong with login'
}

export const authUser = async (token: string) => {
  try {
    const response = await axiosClient.get<IAuthResponse>('/auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.data) {
      return response.data
    }
    throw ''
  } catch (error) {
    throw `Something went wrong with login: ${(error as Error).message}`
  }
}

export const getNewRefreshToken = async (token: string) => {
  try {
    const response = await axiosClient.post<IAuthResponse>('/auth/refresh-token', {
      refresh_token: token,
    })

    if (response.data) {
      return response.data
    }
    throw ''
  } catch (error) {
    if (!window.location.href.includes('login')) {
      window.location.href = '/login'
    }
    throw `Something went wrong with login ${(error as Error).message}`
  }
}
