import { FC, ReactNode } from 'react'

import { spinnerKeys, RandomSpinner } from '@/components/Common/Spinner'

type CustomLoader = {
  isOpen: boolean
  message?: string
  loader?: typeof spinnerKeys
  children?: ReactNode
}

/**
 * Random loader using react-spinners, render different loader icon every time
 */
export const RandomLoader: FC<CustomLoader> = ({ isOpen, message = 'Loading ...', children }) => {
  return (
    isOpen && (
      <div className="hite">
        <div className="random flex justify-center overflow-hidden !text-white">
          <div>
            {children ? (
              children
            ) : (
              <RandomSpinner
                className="!text-white"
                speedMultiplier={0.75}
                color="white"
                loading={isOpen}
                // cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
          </div>
        </div>

        <div className="text-center !text-white">{message}</div>
      </div>
    )
  )
}

export default RandomLoader
