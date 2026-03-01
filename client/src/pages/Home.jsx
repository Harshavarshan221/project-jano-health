import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 bg-white border-b border-gray-200">
        
        <h1 className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </h1>

        <h1 className="text-3xl font-bold text-green-600">
            Jano Health
        </h1>

        <Link
          to="/login"
          className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-3xl">
          Manage Tasks. Collaborate in Real-Time. 
          <span className="text-indigo-600"> Work Smarter.</span>
        </h2>

        <p className="mt-6 text-gray-500 max-w-xl text-lg">
          A real-time collaborative task manager built for teams.
          Assign tasks, track progress, and stay productive — all in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>

          <a
            href="#features"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="bg-white py-20 px-8 border-t border-gray-200"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure Google Authentication
            </h3>
            <p className="text-gray-500">
              Sign in securely using your Google account with
              protected authentication flow.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Real-Time Collaboration
            </h3>
            <p className="text-gray-500">
              Assign tasks instantly and see updates reflected
              immediately on your dashboard.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Clean & Modern UI
            </h3>
            <p className="text-gray-500">
              A premium experience built with modern design,
              responsive layouts, and intuitive interaction.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-gray-200 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TaskFlow. Built with React & Node.js.
      </footer>
    </div>
  );
}