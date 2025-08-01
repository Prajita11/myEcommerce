

**Helper File Template:**
```typescript
// helpers/domain.helper.ts
import { IDomain } from '@/lib/interfaces'
import { DomainEnum } from '@/lib/enums'

/**
 * Business logic functions specific to Domain
 */

export const isDomainActive = (domain: IDomain): boolean => {
  return domain.status === DomainEnum.ACTIVE
}

export const getDomainDisplayName = (domain: IDomain): string => {
  return `${domain.name} (${domain.code})`
}
```

**Utility File Template:**
```typescript
// utils/format.util.ts

/**
 * Generic formatting utilities
 */

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US')
}

export const capitalizeFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
```

**Service File Template:**
```typescript
// services/domainService.ts
import { axiosInstance } from '@/lib/instance/axios-client'
import { IDomain } from '@/lib/interfaces'

/**
 * API calls for Domain management
 */

export const fetchDomains = async (): Promise<IDomain[]> => {
  const response = await axiosInstance.get('/domains')
  return response.data
}

export const createDomain = async (domain: Partial<IDomain>): Promise<IDomain> => {
  const response = await axiosInstance.post('/domains', domain)
  return response.data
}
```

### 🗂️ React Router Structure

When using `createBrowserRouter` with layout routes:

```typescript
// router/index.tsx - Root Layout Pattern
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,        // Common layout for all routes
    children: [
      ...publicRoutes,
      ...authRoutes, 
      ...privateRoutes,
      { path: '*', element: <PageNotFound /> }
    ]
  }
])

// components/Layout/RootLayout.tsx
export const RootLayout = () => {
  return (
    <div className="app-container">
      <AppLayout />
      <Container>
        <Outlet /> {/* Renders current route component */}
      </Container>
    </div>
  )
}
```

### 🔐 TypeScript Best Practices

**Interface Naming:**
```typescript
// ✅ interfaces/users.ts
export interface IUser {
  id: number
  name: string
  email: string
  role: Role
}

// ✅ Type alias naming
export type TUserRole = 'admin' | 'user' | 'moderator'
```

**Enum Conventions:**
```typescript
// ✅ enums/role.enum.ts
export enum Role {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  USER = 'user'
}
```

---