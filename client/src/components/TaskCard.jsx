export default function TaskCard({ task, onEdit, onDelete, onAssign }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {task.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {task.description}
          </p>
        </div>

        <span
          className={`px-3 py-1 text-xs rounded-full ${
            task.completed
              ? "bg-emerald-100 text-emerald-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      {task.assignedTo && (
        <div className="mt-3 text-xs text-indigo-600">
          Assigned to: {task.assignedTo}
        </div>
      )}

      <div className="flex gap-3 mt-4">
        <button
          onClick={onEdit}
          className="text-sm text-indigo-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={onAssign}
          className="text-sm text-gray-600 hover:underline"
        >
          Assign
        </button>
        <button
          onClick={onDelete}
          className="text-sm text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

