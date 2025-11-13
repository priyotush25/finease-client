import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-green-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="btn bg-green-600 text-white hover:bg-green-700 border-none"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
