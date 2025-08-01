import { Role } from '@/lib/enums'
import { IUser } from '@/lib/interfaces'

export const getUserData = () => {
  const userData = localStorage.getItem('user')
  if (!userData) return {} as IUser
  return JSON.parse(userData || '{}') as IUser
}

export const isSuperAdmin = (user: IUser) => user.role === Role.SUPER_ADMIN

export const isAdmin = (user: IUser) => user.role === Role.ADMIN

export const isUser = (user: IUser) => user.role === Role.USER
