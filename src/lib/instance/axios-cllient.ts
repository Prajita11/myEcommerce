import axios from 'axios'
import { getAccessToken, getRefreshToken, setAccessToken, setTokenUser } from '../helpers/token.helper'
import { IAuthResponse } from '../interfaces'
import { useNavigate } from 'react-router-dom'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL, // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add access token to the headers
axiosClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.request.use(
  async (response) => response,
  async (error) => {
    const originalRequest = error.config
    const refreshToken = getRefreshToken()
    const navigate = useNavigate()

    // Check if the error is due to an expired access token
    if (error.response.status === 401 && !originalRequest._retry && refreshToken) {
      originalRequest._retry = true

      try {
        // Request a new access token using the refresh token
        const { data } = await axios.post<IAuthResponse>(`${import.meta.env.VITE_APP_API_URL}/auth/refresh-token`, {
          refreshToken,
        })
        if (data) {
          const { access_token, user } = data
          setAccessToken(access_token)
          setTokenUser(user)
          // Store the new access token
          localStorage.setItem('access_token', data.access_token)

          // Retry the original request with the new token
          axiosClient.defaults.headers['Authorization'] = `Bearer ${data.access_token}`
          return axiosClient(originalRequest)
        } else {
          return Promise.reject('expired token')
        }
      } catch (refreshError) {
        console.error('Refresh token is invalid or expired:', refreshError)

        // If refresh fails, redirect to the login page
        localStorage.removeItem('jwt')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')

        navigate('/login') // Redirect to login page
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
// const token = getAccessToken();
// if (isTokenExpired(token)) {
//   // If expired, use the refresh token to get a new access token
//   const refreshToken = getRefreshToken();

//   try {
// const response = await axios.post<IAuthResponse>(`${import.meta.env.VITE_APP_API_URL}/auth/refresh`, {
//   refreshToken,
// });

//     if (response && response.data) {
//       const { access_token, user } = response.data;
//       setAccessToken(access_token);
//       setTokenUser(user);
//     }
//     config.headers['Authorization'] = `Bearer ${token}`;
//   } catch (error) {
//     console.error('Error refreshing access token:', error);
//   }
// } else {
//   config.headers['Authorization'] = `Bearer ${token}`;
// }
// });

export default axiosClient
