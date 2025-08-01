import { FC } from 'react'
import { Typography } from 'antd'

import LanguageSelector from '@/components/Common/LanguageSelector'

const { Title, Paragraph } = Typography

const TechStack: FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Language Selector - Top Right */}
      <div className="absolute right-6 top-6 z-50">
        <LanguageSelector variant="compact" position="bottom-right" />
      </div>

      {/* Hero Section */}
      <section className="relative mt-10 overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title level={1} className="!mb-6 text-4xl font-bold !text-white lg:text-6xl">
              Get In Touch
            </Title>
            <Paragraph className="mx-auto max-w-3xl text-lg !text-white/90 lg:text-xl">
              Have a project in mind? Want to collaborate? Or just want to say hello? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </Paragraph>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TechStack
