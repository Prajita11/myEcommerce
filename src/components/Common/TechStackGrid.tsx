import { FC } from 'react'
import { Card, Typography, Row, Col, Badge } from 'antd'
import {
  CodeOutlined,
  ThunderboltOutlined,
  ApiOutlined,
  GlobalOutlined,
  DatabaseOutlined,
  BugOutlined,
  RocketOutlined,
  SafetyOutlined,
  MobileOutlined,
  ToolOutlined,
  CheckCircleOutlined,
  TranslationOutlined,
  LoadingOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

interface SimpleTechItem {
  icon: React.ReactNode
  title: string
  description: string
  category: string
  url: string
}

export const TechStackGrid: FC = () => {
  const techStack: SimpleTechItem[] = [
    // Core Frontend
    {
      icon: <CodeOutlined className="text-4xl text-blue-500" />,
      title: 'React 18',
      description: 'Modern React with hooks, concurrent features, and automatic batching for building interactive UIs.',
      category: 'Frontend',
      url: 'https://react.dev/',
    },
    {
      icon: <BugOutlined className="text-4xl text-red-500" />,
      title: 'TypeScript',
      description: 'Strongly typed programming language that builds on JavaScript with static type checking.',
      category: 'Language',
      url: 'https://www.typescriptlang.org/',
    },

    // UI & Styling
    {
      icon: <ThunderboltOutlined className="text-4xl text-purple-500" />,
      title: 'Ant Design',
      description: 'Enterprise-class UI design language with comprehensive component library.',
      category: 'UI Framework',
      url: 'https://ant.design/',
    },
    {
      icon: <ApiOutlined className="text-4xl text-cyan-500" />,
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development with custom designs.',
      category: 'Styling',
      url: 'https://tailwindcss.com/',
    },

    // Routing & Navigation
    {
      icon: <GlobalOutlined className="text-4xl text-green-500" />,
      title: 'React Router',
      description: 'Declarative routing for React applications with nested routes and guards.',
      category: 'Navigation',
      url: 'https://reactrouter.com/',
    },

    // Data Management
    {
      icon: <DatabaseOutlined className="text-4xl text-orange-500" />,
      title: 'Apollo GraphQL',
      description: 'Comprehensive GraphQL client with caching, optimistic UI, and real-time subscriptions.',
      category: 'Data Management',
      url: 'https://www.apollographql.com/',
    },
    {
      icon: <ApiOutlined className="text-4xl text-blue-600" />,
      title: 'Axios',
      description: 'Promise-based HTTP client for making API requests with interceptors.',
      category: 'HTTP Client',
      url: 'https://axios-http.com/',
    },

    // Internationalization
    {
      icon: <TranslationOutlined className="text-4xl text-indigo-500" />,
      title: 'React i18n',
      description: 'Internationalization framework supporting multiple languages and namespaces.',
      category: 'Localization',
      url: 'https://react.i18next.com/',
    },

    // Build Tools
    {
      icon: <RocketOutlined className="text-4xl text-yellow-500" />,
      title: 'Vite',
      description: 'Next generation frontend tooling with lightning-fast HMR and optimized builds.',
      category: 'Build Tool',
      url: 'https://vite.dev/',
    },

    // Code Quality
    {
      icon: <CheckCircleOutlined className="text-4xl text-green-600" />,
      title: 'ESLint',
      description: 'Powerful linting tool for identifying and fixing code quality issues.',
      category: 'Code Quality',
      url: 'https://eslint.org/',
    },
    {
      icon: <CodeOutlined className="text-4xl text-pink-500" />,
      title: 'Prettier',
      description: 'Opinionated code formatter ensuring consistent code style across the project.',
      category: 'Formatting',
      url: 'https://prettier.io/',
    },

    // PWA & Mobile
    {
      icon: <MobileOutlined className="text-4xl text-purple-600" />,
      title: 'PWA Support',
      description: 'Progressive Web App features with service workers and offline support.',
      category: 'PWA',
      url: 'https://vite-pwa-org.netlify.app/',
    },

    // Configuration
    {
      icon: <SafetyOutlined className="text-4xl text-emerald-500" />,
      title: 'Dotenv',
      description: 'Environment variable management for secure configuration and deployment.',
      category: 'Configuration',
      url: 'https://www.npmjs.com/package/dotenv/',
    },

    // UI Components
    {
      icon: <LoadingOutlined className="text-4xl text-pink-500" />,
      title: 'React Spinners',
      description: 'Collection of loading spinner components with customizable animations.',
      category: 'UI Components',
      url: 'https://www.npmjs.com/package/react-spinners',
    },

    // Code Generation
    {
      icon: <ToolOutlined className="text-4xl text-purple-700" />,
      title: 'GraphQL Codegen',
      description: 'Generates TypeScript types and React hooks from GraphQL schemas.',
      category: 'Code Generation',
      url: 'https://the-guild.dev/graphql/codegen',
    },

    // Git Hooks
    {
      icon: <ToolOutlined className="text-4xl text-gray-700" />,
      title: 'Husky',
      description: 'Git hooks made easy for running lints and tests on git actions.',
      category: 'Git Hooks',
      url: 'https://typicode.github.io/husky/',
    },
  ]

  return (
    <div className="space-y-8">
      <Row gutter={[32, 32]}>
        {techStack.map((tech, index) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={index}>
            <Card
              className="h-full border-0 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              bodyStyle={{ padding: '2rem' }}
            >
              <div className="mb-4">{tech.icon}</div>
              <div className="mb-2">
                <Badge color="blue" text={tech.category} />
              </div>
              <Title level={4} className="mb-3">
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-inherit hover:text-blue-600"
                >
                  {tech.title}
                </a>
              </Title>
              <Paragraph className="text-sm text-gray-600">{tech.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default TechStackGrid
