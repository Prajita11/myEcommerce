import { FC, useState } from 'react'
import { Button, Menu, Drawer } from 'antd'
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
  LoginOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import LanguageSelector from './LanguageSelector'

interface NavigationItem {
  key: string
  label: string
  icon: React.ReactNode
  path: string
}

interface HeaderProps {
  className?: string
}

const Header: FC<HeaderProps> = ({ className = '' }) => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)
  const location = useLocation()

  const navigationItems: NavigationItem[] = [
    { key: 'home', label: 'Home', icon: <HomeOutlined />, path: '/' },
    { key: 'about', label: 'About', icon: <InfoCircleOutlined />, path: '/about' },
    { key: 'contact', label: 'Contact', icon: <ContactsOutlined />, path: '/contact' },
    { key: 'login', label: 'Login', icon: <LoginOutlined />, path: '/login' },
    { key: 'signup', label: 'Sign Up', icon: <UserOutlined />, path: '/signup' },
  ]

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <header className={`sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-8 w-8"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
            <span className="text-xl font-bold text-gray-900">React Boilerplate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`inline-flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right side - Language Selector and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSelector variant="compact" position="bottom-right" />

            {/* Mobile Menu Button */}
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="lg:hidden"
              onClick={() => setMobileMenuVisible(true)}
            />
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <Drawer
          title={
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-6 w-6"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="text-lg font-bold">Navigation</span>
            </div>
          }
          placement="right"
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          width={300}
        >
          <Menu
            mode="vertical"
            selectedKeys={[navigationItems.find((item) => isActivePath(item.path))?.key || '']}
            items={navigationItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: (
                <Link to={item.path} onClick={() => setMobileMenuVisible(false)} className="text-gray-700">
                  {item.label}
                </Link>
              ),
            }))}
          />
        </Drawer>
      </div>
    </header>
  )
}

export default Header
