import { FC, useState } from 'react'
import { Button, Card, Typography, Row, Col, Space, Input, Form, notification } from 'antd'
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  UserOutlined,
  MessageOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from '@ant-design/icons'
import Header from '@/components/Common/Header'

const { Title, Paragraph, Text } = Typography
const { TextArea } = Input

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactPage: FC = () => {
  const [form] = Form.useForm()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (values: ContactFormData) => {
    setIsLoading(true)
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000))

      notification.success({
        message: 'Message Sent Successfully!',
        description: 'Thank you for contacting us. We will get back to you soon.',
        duration: 5,
      })

      form.resetFields()
    } catch (error) {
      notification.error({
        message: 'Failed to Send Message',
        description: 'Please try again later or contact us directly.',
        duration: 5,
      })
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MailOutlined className="text-2xl text-blue-500" />,
      title: 'Email',
      value: 'amitdhoju@gmail.com',
      href: 'mailto:amitdhoju@gmail.com',
    },
    {
      icon: <PhoneOutlined className="text-2xl text-green-500" />,
      title: 'Phone',
      value: '+977 9841110194',
      href: 'tel:+9779841110194',
    },
    {
      icon: <EnvironmentOutlined className="text-2xl text-purple-500" />,
      title: 'Location',
      value: 'Bhaktapur, Nepal',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <GithubOutlined className="text-xl" />,
      title: 'GitHub',
      href: 'https://github.com/Amit091',
    },
    {
      icon: <LinkedinOutlined className="text-xl" />,
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/amitdhoju',
    },
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
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

      {/* Contact Form and Info Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="top">
            {/* Contact Form */}
            <Col xs={24} lg={14}>
              <Card className="h-full border-0 shadow-xl" bodyStyle={{ padding: '3rem' }}>
                <div className="mb-8">
                  <Title level={2} className="mb-4 text-3xl font-bold">
                    Send us a Message
                  </Title>
                  <Paragraph className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </Paragraph>
                </div>

                <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false} size="large">
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                      >
                        <Input
                          prefix={<UserOutlined className="text-gray-400" />}
                          placeholder="Your full name"
                          className="rounded-lg"
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                          { required: true, message: 'Please enter your email' },
                          { type: 'email', message: 'Please enter a valid email' },
                        ]}
                      >
                        <Input
                          prefix={<MailOutlined className="text-gray-400" />}
                          placeholder="your.email@example.com"
                          className="rounded-lg"
                        />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input
                      prefix={<MessageOutlined className="text-gray-400" />}
                      placeholder="What is this regarding?"
                      className="rounded-lg"
                    />
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[
                      { required: true, message: 'Please enter your message' },
                      { min: 10, message: 'Message should be at least 10 characters' },
                    ]}
                  >
                    <TextArea
                      rows={6}
                      placeholder="Tell us about your project, question, or how we can help you..."
                      className="rounded-lg"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isLoading}
                      icon={<SendOutlined />}
                      size="large"
                      className="h-12 w-full rounded-lg border-none bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Send Message
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>

            {/* Contact Information */}
            <Col xs={24} lg={10}>
              <div className="space-y-8">
                {/* Contact Info Cards */}
                <Card className="border-0 shadow-lg">
                  <Title level={3} className="mb-6 text-center">
                    Contact Information
                  </Title>
                  <Space direction="vertical" size="large" className="w-full">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="block rounded-lg p-4 transition-all duration-300 hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                            {info.icon}
                          </div>
                          <div>
                            <Text strong className="block text-gray-800">
                              {info.title}
                            </Text>
                            <Text className="text-gray-600">{info.value}</Text>
                          </div>
                        </div>
                      </a>
                    ))}
                  </Space>
                </Card>

                {/* Social Links */}
                <Card className="border-0 shadow-lg">
                  <Title level={4} className="mb-4 text-center">
                    Connect With Us
                  </Title>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </Card>

                {/* Office Hours */}
                <Card className="border-0 shadow-lg">
                  <Title level={4} className="mb-4 text-center">
                    Response Time
                  </Title>
                  <div className="space-y-3 text-center">
                    <div>
                      <Text strong className="block">
                        Email Response
                      </Text>
                      <Text className="text-gray-600">Within 24 hours</Text>
                    </div>
                    <div>
                      <Text strong className="block">
                        Phone Response
                      </Text>
                      <Text className="text-gray-600">9 AM - 6 PM (NPT)</Text>
                    </div>
                    <div>
                      <Text strong className="block">
                        Emergency Contact
                      </Text>
                      <Text className="text-gray-600">Available 24/7</Text>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <Title level={2} className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </Title>
            <Paragraph className="text-lg text-gray-600">Quick answers to common questions we receive.</Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card className="h-full border-0 shadow-lg">
                <Title level={4}>What services do you offer?</Title>
                <Paragraph className="text-gray-600">
                  We specialize in modern web development using React, TypeScript, Node.js, and other cutting-edge
                  technologies. We offer full-stack development, consulting, and technical mentoring.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full border-0 shadow-lg">
                <Title level={4}>How long does a project take?</Title>
                <Paragraph className="text-gray-600">
                  Project timelines vary based on complexity and requirements. Small projects typically take 2-4 weeks,
                  while larger applications can take 2-6 months. We'll provide a detailed timeline after discussing your
                  needs.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full border-0 shadow-lg">
                <Title level={4}>Do you work remotely?</Title>
                <Paragraph className="text-gray-600">
                  Yes, we work with clients globally and are experienced in remote collaboration. We use modern
                  communication tools and project management platforms to ensure smooth project delivery.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card className="h-full border-0 shadow-lg">
                <Title level={4}>What's your pricing model?</Title>
                <Paragraph className="text-gray-600">
                  We offer flexible pricing options including fixed-price projects, hourly rates, and retainer
                  agreements. Pricing depends on project scope, timeline, and complexity. Contact us for a custom quote.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
