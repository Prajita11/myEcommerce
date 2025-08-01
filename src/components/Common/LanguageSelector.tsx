import { FC, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '@/i18n'

interface Language {
  code: string
  name: string
  flag: string
  nativeName: string
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English',
  },
  {
    code: 'np',
    name: 'Nepali',
    flag: '🇳🇵',
    nativeName: 'नेपाली',
  },
]

interface LanguageSelectorProps {
  variant?: 'default' | 'compact' | 'minimal'
  className?: string
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const LanguageSelector: FC<LanguageSelectorProps> = ({
  variant = 'default',
  className = '',
  position = 'bottom-right',
}) => {
  const { i18n, t } = useTranslation('common')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
    localStorage.setItem('preferredLanguage', languageCode)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Load preferred language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage')
    if (savedLanguage && LANGUAGES.includes(savedLanguage)) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  const getDropdownPosition = () => {
    switch (position) {
      case 'top-left':
        return 'bottom-full left-0 mb-2'
      case 'top-right':
        return 'bottom-full right-0 mb-2'
      case 'bottom-left':
        return 'top-full left-0 mt-2'
      case 'bottom-right':
      default:
        return 'top-full right-0 mt-2'
    }
  }

  if (variant === 'minimal') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 rounded-lg bg-white/10 px-2 py-1 text-sm text-white transition-all hover:bg-white/20"
          aria-label="Select language"
        >
          <span className="text-base">{currentLanguage.flag}</span>
        </button>

        {isOpen && (
          <div
            className={`absolute ${getDropdownPosition()} z-50 min-w-[120px] rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex w-full items-center space-x-2 px-3 py-2 text-sm transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-white/20 ${
                  currentLanguage.code === language.code ? 'bg-white/20 text-white' : 'text-slate-300'
                }`}
              >
                <span className="text-base">{language.flag}</span>
                <span className="font-medium">{language.code.toUpperCase()}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className={`relative ${className}`} ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 rounded-lg bg-white/10 px-3 py-2 text-sm text-white transition-all hover:bg-white/20"
          aria-label="Select language"
        >
          <span className="text-base">{currentLanguage.flag}</span>
          <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
          <svg
            className={`h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div
            className={`absolute ${getDropdownPosition()} z-50 min-w-[160px] rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg`}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex w-full items-center space-x-3 px-4 py-3 text-sm transition-colors first:rounded-t-xl last:rounded-b-xl hover:bg-white/20 ${
                  currentLanguage.code === language.code ? 'bg-white/20 text-white' : 'text-slate-300'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-xs opacity-75">{language.nativeName}</span>
                </div>
                {currentLanguage.code === language.code && (
                  <svg className="ml-auto h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-white transition-all duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
        aria-label={t('selectLanguage', 'Select language')}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="font-medium">{currentLanguage.name}</span>
        <svg
          className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={`absolute ${getDropdownPosition()} z-50 min-w-[200px] rounded-xl border border-white/20 bg-white/10 shadow-xl backdrop-blur-lg`}
        >
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-medium uppercase tracking-wide text-slate-400">
              {t('selectLanguage', 'Select Language')}
            </div>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`flex w-full items-center space-x-3 rounded-lg px-3 py-3 text-sm transition-colors hover:bg-white/20 ${
                  currentLanguage.code === language.code ? 'bg-white/20 text-white' : 'text-slate-300'
                }`}
              >
                <span className="text-xl">{language.flag}</span>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{language.name}</span>
                  <span className="text-xs opacity-75">{language.nativeName}</span>
                </div>
                {currentLanguage.code === language.code && (
                  <svg className="ml-auto h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
