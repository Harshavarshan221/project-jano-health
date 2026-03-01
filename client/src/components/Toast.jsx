export default function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}
