import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/e-commerce.png')",
        }}
      />
      <div className="absolute inset-0 z-10 bg-black opacity-50" />

      <div className="relative z-20">
        <div className="flex min-h-screen items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
export default LoginPage
