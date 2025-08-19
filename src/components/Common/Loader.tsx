import { FC } from 'react'
import { ClipLoader } from 'react-spinners'

type CustomLoader = {
  show: boolean
  message?: string
}

/**
 * loader using react-spinners, render different loader icon every time
 */
export const Loader: FC<CustomLoader> = ({ show, message = 'Loading ...' }) => {
  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white">
      <div>
        <div className="random flex justify-center overflow-hidden">
          <div className="ml-auto mr-auto flex min-h-[10vh] items-center justify-center">
            <ClipLoader color="teal" loading={show} aria-label="Loading Spinner" data-testid="loader" />
          </div>
        </div>

        <p className="text-center">{message}</p>
      </div>
    </div>
  )
}

export default Loader
