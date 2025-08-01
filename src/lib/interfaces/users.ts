import { Role } from '@/lib/enums'

export interface IUser {
  id: number
  email: string
  username: string
  role: Role
  created_at: string
  updated_at: string
}

export interface IAuthResponse {
  user: IUser
  access_token: string
  refresh_token: string
}
