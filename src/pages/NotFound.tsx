import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="mt-10 flex h-1/2 items-center justify-center">
      <div className="w-1/2 rounded-lg bg-gray-200 p-10 shadow-md">
        <h1 className="!important font-extrabold">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Here are some things you can do:</p>
        <ul className="list-disc space-y-4 pl-10 pt-2">
          <li className="rounded-md">Check the URL for typos.</li>
          <li className="rounded-md">
            Return to the{' '}
            <Link className="cursor-pointer font-extrabold underline" to="/">
              Home page
            </Link>
            .
          </li>
          <li className="rounded-md">Contact support if you believe this is an error.</li>
        </ul>
      </div>
    </div>
  )
}

export default NotFound
