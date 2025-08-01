import { IUser } from '@/lib/interfaces'

export type AppMenuProps = {
  user: IUser | null
  menuItems: { text: string; link: string; key: string }[]
  isMobile?: boolean
  login: () => void
  logout: () => void
  handleClose?: () => void
}
