import { FC } from 'react'
import { Button, Card, Typography, Row, Col, Space, Avatar, Statistic, Timeline, Badge, Divider } from 'antd'
import {
  RocketOutlined,
  SafetyOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  MobileOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Header from '@/components/Common/Header'
import TechStackGrid from '@/components/Common/TechStackGrid'
import TechStack from '@/components/Common/TechStack'

const { Title, Paragraph, Text } = Typography

const repoUrl = 'git@github.com:Amit091/amit_dhoju_react_app.git'
const repoUrlHttp = 'https://github.com/Amit091/amit_dhoju_react_app'
const repoName = 'amit_dhoju_react_app'

const Homepage: FC = () => {
  const features = [
    {
      icon: <SafetyOutlined className="text-4xl text-green-500" />,
      title: 'Production Ready',
      description: 'Enterprise-grade architecture with best practices, security, and performance optimizations.',
    },
    {
      icon: <MobileOutlined className="text-4xl text-blue-500" />,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience across all devices and screen sizes.',
    },
    {
      icon: <TeamOutlined className="text-4xl text-purple-500" />,
      title: 'Developer Friendly',
      description: 'Clean code structure, comprehensive documentation, and easy-to-understand patterns.',
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-yellow-500" />,
      title: 'Performance Optimized',
      description: 'Code splitting, lazy loading, and optimized bundle sizes for lightning-fast performance.',
    },
  ]

  const teamMembers = [
    {
      name: 'Amit Dhoju',
      role: 'Lead Developer & Architect',
      avatar: '/images/author.png',
      skills: [
        'React',
        'TypeScript',
        'Node.js',
        'System Design',
        'GraphQL',
        'Apollo Client',
        'Tailwind CSS',
        'Ant Design',
        'React Router',
        'React i18n',
        'Vite',
      ],
      description: 'Full-stack developer with expertise in modern web technologies and scalable architecture.',
    },
  ]

  const projectStats = [
    { title: 'Technologies', value: 13, suffix: '', description: 'Modern tech stack' },
    { title: 'Components', value: 25, suffix: '+', description: 'Reusable UI components' },
    { title: 'Pages', value: 8, suffix: '+', description: 'Pre-built page templates' },
    { title: 'Hooks', value: 15, suffix: '+', description: 'Custom React hooks' },
  ]

  const gettingStarted = [
    {
      color: 'blue',
      children: (
        <div>
          <Text strong>Clone Repository</Text>
          <br />
          <Text type="secondary">git clone {repoUrl}</Text>
        </div>
      ),
    },
    {
      color: 'blue',
      children: (
        <div>
          <Text strong>Navigate to Repository</Text>
          <br />
          <Text type="secondary">cd {repoName}</Text>
        </div>
      ),
    },
    {
      color: 'green',
      children: (
        <div>
          <Text strong>Install Dependencies</Text>
          <br />
          <Text type="secondary">yarn install or npm install</Text>
        </div>
      ),
    },
    {
      color: 'orange',
      children: (
        <div>
          <Text strong>Configure Environment</Text>
          <br />
          <Text type="secondary">Copy .env.example to .env and configure variables</Text>
        </div>
      ),
    },
    {
      color: 'purple',
      children: (
        <div>
          <Text strong>Start Development</Text>
          <br />
          <Text type="secondary">yarn dev or npm run dev</Text>
        </div>
      ),
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
          <Row align="middle" gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Space direction="vertical" size="large" className="w-full">
                <Badge.Ribbon text="OPEN SOURCE" color="volcano">
                  <div className="inline-block rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <Text className="text-white/90">🚀 Modern React Boilerplate</Text>
                  </div>
                </Badge.Ribbon>

                <Title level={1} className="!mb-0 text-4xl font-bold !text-white lg:text-6xl">
                  React Enterprise
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Boilerplate
                  </span>
                </Title>

                <Paragraph className="max-w-lg text-lg !text-white/90 lg:text-xl">
                  Production-ready React boilerplate with TypeScript, Ant Design, Tailwind CSS, and modern development
                  tools. Created by <strong>Team Amit Dhoju</strong> for rapid application development.
                </Paragraph>

                <Space size="middle" wrap>
                  <Link to="/signup">
                    <Button
                      type="primary"
                      size="large"
                      icon={<RocketOutlined />}
                      className="h-12 border-none bg-white px-8 text-blue-600 hover:bg-gray-100"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Button
                    size="large"
                    icon={<GithubOutlined />}
                    className="h-12 border-white bg-transparent px-8 text-white hover:bg-white/10"
                    href={repoUrl}
                    target="_blank"
                  >
                    View on GitHub
                  </Button>
                </Space>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'React 18',
                    'TypeScript',
                    'Ant Design',
                    'Tailwind',
                    'GraphQL',
                    'Axios',
                    'ESLint',
                    'PWA',
                    'Prettier',
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </Space>
            </Col>

            <Col xs={24} lg={12}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 shadow-2xl">
                  <div className="mb-4 flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <Text className="ml-4 text-sm text-gray-400">terminal</Text>
                  </div>
                  <div className="font-mono text-sm text-green-400">
                    <div className="mb-2">$ git clone {repoUrl}</div>
                    <div className="mb-2">$ cd {repoName}</div>
                    <div className="mb-2">$ yarn install</div>
                    <div className="mb-2">$ cp .env.example .env</div>
                    <div className="mb-2">$ yarn dev</div>
                    <div className="text-blue-400">✨ Ready on http://localhost:5173</div>
                  </div>
                </div>
                <div className="absolute -left-4 -top-4 h-24 w-24 animate-pulse rounded-full bg-yellow-400 opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 h-32 w-32 animate-pulse rounded-full bg-purple-400 opacity-20"></div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Project Stats Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]} justify="center">
            {projectStats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card className="border-0 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    suffix={stat.suffix}
                    valueStyle={{
                      color: '#1890ff',
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  />
                  <Text type="secondary" className="text-sm">
                    {stat.description}
                  </Text>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Title level={2} className="mb-4 text-3xl font-bold lg:text-5xl">
              Modern Tech Stack
            </Title>
            <Paragraph className="mx-auto max-w-3xl text-lg text-gray-600">
              Built with industry-leading technologies and best practices for scalable, maintainable applications.
            </Paragraph>
          </div>
          <TechStackGrid />
          <TechStack />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Title level={2} className="mb-4 text-3xl font-bold lg:text-4xl">
              Key Features
            </Title>
            <Paragraph className="mx-auto max-w-3xl text-lg text-gray-600">
              Everything you need to build modern web applications with confidence and speed.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  className="h-full border-0 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <Title level={4} className="mb-3">
                    {feature.title}
                  </Title>
                  <Paragraph className="text-gray-600">{feature.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} className="mb-6 text-3xl font-bold lg:text-4xl">
                Getting Started
              </Title>
              <Paragraph className="mb-8 text-lg text-gray-600">
                Get up and running in minutes with our simple setup process. No complex configuration required.
              </Paragraph>
              <Timeline items={gettingStarted} />
            </Col>

            <Col xs={24} lg={12}>
              <div className="relative">
                <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <Card className="relative z-10 border-0 shadow-2xl">
                  <div className="p-8 text-center">
                    <CheckCircleOutlined className="mb-4 text-6xl text-green-500" />
                    <Title level={3}>Ready to Build?</Title>
                    <Paragraph className="mb-6 text-gray-600">
                      Start your next project with our comprehensive boilerplate and save weeks of development time.
                    </Paragraph>
                    <Space direction="vertical" size="middle" className="w-full">
                      <Link to="/signup">
                        <Button type="primary" size="large" icon={<ArrowRightOutlined />} className="h-12 w-full">
                          Start Building Now
                        </Button>
                      </Link>
                      <a href={repoUrlHttp} target="_blank">
                        <Button size="large" icon={<GithubOutlined />} className="h-12 w-full" target="_blank">
                          View Documentation
                        </Button>
                      </a>
                    </Space>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Title level={2} className="mb-4 text-3xl font-bold lg:text-4xl">
              Meet the Team
            </Title>
            <Paragraph className="text-lg text-gray-600">
              The talented developers behind this amazing boilerplate.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} justify="center">
            {teamMembers.map((member, index) => (
              <Col xs={24} lg={16} key={index}>
                <Card
                  className="h-full border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="text-center">
                    <Avatar size={80} src={member.avatar} className="mb-4" />
                    <Title level={4} className="mb-2">
                      {member.name}
                    </Title>
                    <Text type="secondary" className="mb-4 block">
                      {member.role}
                    </Text>
                    <Paragraph className="mb-4 text-gray-600">{member.description}</Paragraph>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill) => (
                        <div key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Title level={2} className="mb-6 text-3xl font-bold !text-white lg:text-4xl">
              Get in Touch
            </Title>
            <Paragraph className="mx-auto max-w-2xl text-lg !text-white/90">
              Have questions about the boilerplate? Need custom development services? We'd love to hear from you!
            </Paragraph>
          </div>

          <Row gutter={[32, 32]} justify="center">
            <Col xs={24} sm={12} lg={6}>
              <a href="mailto:amitdhoju@gmail.com">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <MailOutlined className="text-2xl text-white" />
                  </div>
                  <Title level={4} className="mb-2 !text-white">
                    Email
                  </Title>
                  <Text className="text-white/90">amitdhoju@gmail.com</Text>
                </div>
              </a>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <a href="tel:+9779841110194">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <PhoneOutlined className="text-2xl text-white" />
                  </div>
                  <Title level={4} className="mb-2 !text-white">
                    Phone
                  </Title>
                  <Text className="text-white/90">+977 9841110194</Text>
                </div>
              </a>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <a href="https://github.com/Amit091">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <GithubOutlined className="text-2xl text-white" />
                  </div>
                  <Title level={4} className="mb-2 !text-white">
                    GitHub
                  </Title>
                  <Text className="text-white/90">@Amit091</Text>
                </div>
              </a>
            </Col>
            <Col xs={24} sm={12} lg={6}>
              <a href="https://www.linkedin.com/in/amitdhoju">
                <div className="text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <LinkedinOutlined className="text-2xl text-white" />
                  </div>
                  <Title level={4} className="mb-2 !text-white">
                    LinkedIn
                  </Title>
                  <Text className="text-white/90">Amit Dhoju</Text>
                </div>
              </a>
            </Col>
          </Row>

          <Divider className="my-16 border-white/20" />

          <div className="text-center">
            <Title level={3} className="mb-6 !text-white">
              Ready to Start Your Project?
            </Title>
            <Space size="middle" wrap>
              <Link to="/signup">
                <Button
                  type="primary"
                  size="large"
                  icon={<RocketOutlined />}
                  className="h-12 border-none bg-white px-8 text-blue-600 hover:bg-gray-100"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="large"
                  icon={<MailOutlined />}
                  className="h-12 border-white bg-transparent px-8 text-white hover:bg-white/10"
                >
                  Contact for Custom Work
                </Button>
              </Link>
            </Space>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={8}>
              <div className="mb-4 flex items-center">
                <img src="/images/logo.png" alt="Logo" className="mr-3 h-8 w-8" />
                <Title level={4} className="!mb-0 !text-white">
                  React Boilerplate By Amit Dhoju
                </Title>
              </div>
              <Paragraph className="mb-4 text-gray-400">
                Modern React boilerplate with TypeScript, Ant Design, and Tailwind CSS. Built by Team Amit Dhoju for
                rapid application development.
              </Paragraph>
              <Space>
                <Button
                  type="text"
                  icon={<GithubOutlined />}
                  className="text-gray-400 hover:text-white"
                  href="https://github.com/Amit091"
                  target="_blank"
                />
                <Button
                  type="text"
                  icon={<LinkedinOutlined />}
                  className="text-gray-400 hover:text-white"
                  href="https://www.linkedin.com/in/amitdhoju"
                  target="_blank"
                />
                <Button
                  type="text"
                  icon={<MailOutlined />}
                  className="text-gray-400 hover:text-white"
                  href="mailto:amitdhoju@gmail.com"
                  target="_blank"
                />
                <Button
                  type="text"
                  icon={<PhoneOutlined />}
                  className="text-gray-400 hover:text-white"
                  href="tel:+9779841110194"
                  target="_blank"
                />
              </Space>
            </Col>

            <Col xs={12} lg={4}>
              <Title level={5} className="mb-4 !text-white">
                Quick Links
              </Title>
              <Space direction="vertical">
                <Link to="/" className="cursor-pointer text-gray-400 hover:text-white">
                  Home
                </Link>
                <Link to="/about" className="cursor-pointer text-gray-400 hover:text-white">
                  About
                </Link>
                <Link to="/contact" className="cursor-pointer text-gray-400 hover:text-white">
                  Contact
                </Link>
                <Link to="/login" className="cursor-pointer text-gray-400 hover:text-white">
                  Login
                </Link>
              </Space>
            </Col>

            <Col xs={12} lg={4}>
              <Title level={5} className="mb-4 !text-white">
                Tech Stack
              </Title>
              <Space direction="vertical">
                <Text className="cursor-pointer text-gray-400 hover:text-white">React 18</Text>
                <Text className="cursor-pointer text-gray-400 hover:text-white">TypeScript</Text>
                <Text className="cursor-pointer text-gray-400 hover:text-white">Ant Design</Text>
                <Text className="cursor-pointer text-gray-400 hover:text-white">Tailwind CSS</Text>
              </Space>
            </Col>

            <Col xs={24} lg={8}>
              <Title level={5} className="mb-4 !text-white">
                Stay Updated
              </Title>
              <Paragraph className="mb-4 text-gray-400">
                Subscribe to get notified about new features and updates to the boilerplate.
              </Paragraph>
              <Space.Compact style={{ width: '100%' }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-l-md border-0 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button type="primary" className="rounded-r-md">
                  Subscribe
                </Button>
              </Space.Compact>
            </Col>
          </Row>

          <Divider className="my-8 border-gray-800" />

          <Row justify="space-between" align="middle">
            <Col>
              <Text className="text-gray-400">© 2024 React Boilerplate by Team Amit Dhoju. All rights reserved.</Text>
            </Col>
            <Col>
              <Space>
                <Text className="cursor-pointer text-gray-400 hover:text-white">Privacy Policy</Text>
                <Text className="cursor-pointer text-gray-400 hover:text-white">Terms of Service</Text>
                <Text className="cursor-pointer text-gray-400 hover:text-white">MIT License</Text>
              </Space>
            </Col>
          </Row>
        </div>
      </footer>
    </div>
  )
}

export default Homepage
