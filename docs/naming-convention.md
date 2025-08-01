### Directory Names
- **Use plural forms** for directories containing multiple items:
  ```
    ✅ components/    ❌ component/
    ✅ helpers/       ❌ helper/
    ✅ utils/         ❌ util/
    ✅ services/      ❌ service/
  ```

#### File Naming Rules

**Components:**
```
✅ Button.tsx           # PascalCase for components
✅ ProductList.tsx      # PascalCase for components
❌ button.tsx           # Avoid lowercase
❌ product-list.tsx     # Avoid kebab-case
```

**Helpers & Business Logic:**
```
✅ role.helper.ts       # Domain-specific business logic
✅ product.helper.ts    # Business logic for products
✅ category.helper.ts   # Business logic for categories
❌ role.helpers.ts      # Avoid plural in filename
```

**Utils & Generic Functions:**
```
✅ format.util.ts       # Generic utility functions
✅ validation.util.ts   # Generic validation helpers
✅ date.util.ts         # Generic date utilities
```

**Services & API:**
```
✅ authService.ts       # API calls and external services
✅ productService.ts    # API calls for products
✅ userService.ts       # API calls for users
```

**Types & Interfaces:**
```
✅ IUser                # Interfaces with 'I' prefix
✅ TMouseEvent          # Type aliases with 'T' prefix
✅ Role                 # Enums in PascalCase
```

### 📋 Folder Purpose Guidelines

#### `helpers/` vs `utils/`
- **helpers/**: Business logic specific to your app
  ```typescript
  // ✅ helpers/role.helper.ts
  export const isSuperAdmin = (user: IUser) => user.role === Role.SUPER_ADMIN
  export const getUserPermissions = (user: IUser) => { /* app-specific logic */ }
  ```

- **utils/**: Generic functions that could work in any app
  ```typescript
  // ✅ utils/format.util.ts
  export const formatCurrency = (amount: number) => new Intl.NumberFormat('en-US')
  export const debounce = (func: Function, delay: number) => { /* generic logic */ }
  ```

#### `services/` vs `helpers/`
- **services/**: External API calls and third-party integrations
- **helpers/**: Internal business logic and data manipulation

#### Component Organization
```
components/
├── Button/
│   ├── Button.tsx          # Main component
│   ├── Button.test.tsx     # Tests
│   ├── Button.module.css   # Styles (if needed)
│   └── index.ts           # Export file
```

### 🎨 Import/Export Patterns

**Barrel Exports (index.ts files):**
```typescript
// ✅ lib/helpers/index.ts
export * from './role.helper'
export * from './product.helper'
export * from './category.helper'

// ✅ Usage
import { isSuperAdmin, getProductPrice } from '@/lib/helpers'
```

**Component Exports:**
```typescript
// ✅ components/Button/index.ts
export { default } from './Button'

// ✅ Usage
import Button from '@/components/Button'
```

### 🔧 Development Rules

1. **Single Responsibility**: Each file should have one clear purpose
2. **Consistent Naming**: Follow the established patterns throughout the project
3. **Business Logic**: Keep domain-specific logic in `helpers/`
4. **Generic Code**: Put reusable utilities in `utils/`
5. **Type Safety**: Use TypeScript interfaces and types consistently
6. **Clean Imports**: Use barrel exports for cleaner import statements

