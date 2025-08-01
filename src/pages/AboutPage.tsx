import { FC } from 'react'
import { Button, Card, Typography, Row, Col, Space, Avatar, Timeline, Badge, Statistic } from 'antd'
import {
  SafetyOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  HeartOutlined,
  BulbOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Header from '@/components/Common/Header'

const { Title, Paragraph, Text } = Typography

const AboutPage: FC = () => {
  const values = [
    {
      icon: <BulbOutlined className="text-4xl text-yellow-500" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative solutions to solve complex problems.',
    },
    {
      icon: <HeartOutlined className="text-4xl text-red-500" />,
      title: 'Passion',
      description: 'We are passionate about crafting high-quality software that makes a difference.',
    },
    {
      icon: <SafetyOutlined className="text-4xl text-green-500" />,
      title: 'Quality',
      description: 'We maintain the highest standards in code quality, testing, and user experience.',
    },
    {
      icon: <TeamOutlined className="text-4xl text-blue-500" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication with our clients.',
    },
  ]

  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'Node.js & Backend', level: 90 },
    { name: 'System Design', level: 85 },
    { name: 'GraphQL & APIs', level: 88 },
    { name: 'DevOps & Cloud', level: 80 },
    { name: 'UI/UX Design', level: 75 },
  ]

  const milestones = [
    {
      color: 'teal',
      children: (
        <div>
          <Text strong>Started Journey</Text>
          <br />
          <Text type="secondary">2019 - Started my journey as a web developer intern</Text>
        </div>
      ),
    },
    {
      color: 'blue',
      children: (
        <div>
          <Text strong>Started Professional Journey</Text>
          <br />
          <Text type="secondary">2020 - Began professional web development career</Text>
        </div>
      ),
    },
    {
      color: 'green',
      children: (
        <div>
          <Text strong>First Major Project</Text>
          <br />
          <Text type="secondary">2021 - Delivered enterprise-level application</Text>
        </div>
      ),
    },
    {
      color: 'orange',
      children: (
        <div>
          <Text strong>Specialized in React</Text>
          <br />
          <Text type="secondary">2022 - Focused on modern React ecosystem</Text>
        </div>
      ),
    },
    {
      color: 'purple',
      children: (
        <div>
          <Text strong>Open Source Contributions</Text>
          <br />
          <Text type="secondary">2023 - Started contributing to open source projects</Text>
        </div>
      ),
    },
    {
      color: 'red',
      children: (
        <div>
          <Text strong>React Boilerplate</Text>
          <br />
          <Text type="secondary">2024 - Created comprehensive React boilerplate</Text>
        </div>
      ),
    },
  ]

  const achievements = [
    { title: 'Projects Completed', value: 20, suffix: '+', color: '#1890ff' },
    { title: 'Happy Clients', value: 10, suffix: '+', color: '#52c41a' },
    { title: 'Years Experience', value: 6, suffix: '+', color: '#faad14' },
    { title: 'Technologies Mastered', value: 20, suffix: '+', color: '#722ed1' },
  ]

  const techExpertise = [
    'React & Next.js',
    'TypeScript',
    'Node.js & Express',
    'GraphQL & Apollo',
    'MongoDB & PostgreSQL',
    'AWS & Docker',
    'Tailwind CSS',
    'Ant Design',
    'React Router',
    'Jest & Testing',
    'Git & GitHub',
    'CI/CD Pipelines',
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
                <Badge.Ribbon text="ABOUT US" color="volcano">
                  <div className="inline-block rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                    <Text className="text-white/90">🚀 Meet Team Amit Dhoju</Text>
                  </div>
                </Badge.Ribbon>

                <Title level={1} className="!mb-0 text-4xl font-bold !text-white lg:text-6xl">
                  Building the Future
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    of Web Development
                  </span>
                </Title>

                <Paragraph className="max-w-lg text-lg !text-white/90 lg:text-xl">
                  We are passionate developers committed to creating exceptional web experiences using modern
                  technologies and best practices. Our mission is to help businesses thrive in the digital world.
                </Paragraph>

                <Space size="middle" wrap>
                  <Link to="/contact">
                    <Button
                      type="primary"
                      size="large"
                      icon={<MailOutlined />}
                      className="h-12 border-none bg-white px-8 text-blue-600 hover:bg-gray-100"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                  <Button
                    size="large"
                    icon={<GithubOutlined />}
                    className="h-12 border-white bg-transparent px-8 text-white hover:bg-white/10"
                    href="https://github.com/Amit091"
                    target="_blank"
                  >
                    View Our Work
                  </Button>
                </Space>
              </Space>
            </Col>

            <Col xs={24} lg={12}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-white/10 p-8 shadow-2xl backdrop-blur-sm">
                  <div className="text-center">
                    <Avatar size={120} src="/images/author.png" className="mb-6" />
                    <Title level={3} className="!mb-2 !text-white">
                      Amit Dhoju
                    </Title>
                    <Text className="mb-4 block text-lg text-white/90">Lead Developer & Architect</Text>
                    <div className="flex justify-center space-x-4">
                      <Button
                        type="text"
                        icon={<GithubOutlined />}
                        className="text-white hover:text-yellow-400"
                        href="https://github.com/Amit091"
                        target="_blank"
                      />
                      <Button
                        type="text"
                        icon={<LinkedinOutlined />}
                        className="text-white hover:text-yellow-400"
                        href="https://www.linkedin.com/in/amitdhoju"
                        target="_blank"
                      />
                      <Button
                        type="text"
                        icon={<MailOutlined />}
                        className="text-white hover:text-yellow-400"
                        href="mailto:contact@amitdhoju.dev"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -left-4 -top-4 h-24 w-24 animate-pulse rounded-full bg-yellow-400 opacity-20"></div>
                <div className="absolute -bottom-4 -right-4 h-32 w-32 animate-pulse rounded-full bg-purple-400 opacity-20"></div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[32, 32]} justify="center">
            {achievements.map((achievement, index) => (
              <Col xs={12} sm={6} key={index}>
                <Card className="border-0 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <Statistic
                    title={achievement.title}
                    value={achievement.value}
                    suffix={achievement.suffix}
                    valueStyle={{
                      color: achievement.color,
                      fontSize: '2rem',
                      fontWeight: 'bold',
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} lg={12}>
              <Title level={2} className="mb-6 text-3xl font-bold lg:text-4xl">
                Our Story
              </Title>
              <div className="space-y-4">
                <Paragraph className="text-lg text-gray-600">
                  What started as a passion for coding has evolved into a commitment to building exceptional web
                  applications that solve real-world problems. We believe that great software is born from the
                  intersection of technical excellence and user-centered design.
                </Paragraph>
                <Paragraph className="text-lg text-gray-600">
                  Our journey began with a simple goal: to create maintainable, scalable, and performant web
                  applications using the latest technologies. Over the years, we've refined our approach, embraced new
                  frameworks, and built a comprehensive toolkit that enables rapid development without compromising
                  quality.
                </Paragraph>
                <Paragraph className="text-lg text-gray-600">
                  Today, we're excited to share our knowledge through open-source contributions, comprehensive
                  boilerplates, and by helping other developers and businesses achieve their digital goals.
                </Paragraph>
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <Title level={3} className="mb-6">
                Our Journey
              </Title>
              <Timeline items={milestones} />
            </Col>
          </Row>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Title level={2} className="mb-4 text-3xl font-bold lg:text-4xl">
              Our Core Values
            </Title>
            <Paragraph className="mx-auto max-w-3xl text-lg text-gray-600">
              These principles guide everything we do, from code architecture to client relationships.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card
                  className="h-full border-0 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  bodyStyle={{ padding: '2rem' }}
                >
                  <div className="mb-4">{value.icon}</div>
                  <Title level={4} className="mb-3">
                    {value.title}
                  </Title>
                  <Paragraph className="text-gray-600">{value.description}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Row gutter={[48, 48]}>
            <Col xs={24} lg={12}>
              <Title level={2} className="mb-6 text-3xl font-bold">
                Skills & Expertise
              </Title>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="mb-2 flex justify-between">
                      <Text strong>{skill.name}</Text>
                      <Text>{skill.level}%</Text>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col xs={24} lg={12}>
              <Title level={2} className="mb-6 text-3xl font-bold">
                Technology Stack
              </Title>
              <div className="flex flex-wrap gap-3">
                {techExpertise.map((tech, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Title level={4} className="mb-4">
                  What Sets Us Apart
                </Title>
                <Space direction="vertical" size="middle">
                  <div className="flex items-center space-x-3">
                    <CheckCircleOutlined className="text-green-500" />
                    <Text>Enterprise-grade code architecture</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleOutlined className="text-green-500" />
                    <Text>Comprehensive testing strategies</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleOutlined className="text-green-500" />
                    <Text>Performance optimization focus</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleOutlined className="text-green-500" />
                    <Text>Modern development workflows</Text>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircleOutlined className="text-green-500" />
                    <Text>Continuous learning mindset</Text>
                  </div>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Title level={2} className="mb-6 text-3xl font-bold !text-white lg:text-4xl">
              Ready to Work Together?
            </Title>
            <Paragraph className="mx-auto mb-8 max-w-2xl text-lg !text-white/90">
              Whether you have a project in mind, need technical consultation, or want to collaborate, we'd love to hear
              from you. Let's build something amazing together.
            </Paragraph>
            <Space size="middle" wrap>
              <Link to="/contact">
                <Button
                  type="primary"
                  size="large"
                  icon={<MailOutlined />}
                  className="h-12 border-none bg-white px-8 text-blue-600 hover:bg-gray-100"
                >
                  Start a Conversation
                </Button>
              </Link>
              <Button
                size="large"
                icon={<PhoneOutlined />}
                className="h-12 border-white bg-transparent px-8 text-white hover:bg-white/10"
                href="tel:+9779841110194"
              >
                Call Us Directly
              </Button>
            </Space>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
