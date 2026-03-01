export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
      <div className="p-6 text-2xl font-bold text-indigo-600">
        TaskFlow
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <button className="w-full text-left px-4 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium">
          Dashboard
        </button>

        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
          My Tasks
        </button>

        <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
          Assigned To Me
        </button>
      </nav>
    </div>
  );
}