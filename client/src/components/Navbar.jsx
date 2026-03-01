import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate(); // ✅ move inside component

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">
          harsha@gmail.com
        </div>

        <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
          H
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}