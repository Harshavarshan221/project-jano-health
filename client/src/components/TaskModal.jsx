import { useState } from "react";

export default function TaskModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Create Task</h2>

        <input
          type="text"
          placeholder="Task title"
          className="w-full border border-gray-200 rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="w-full border border-gray-200 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave({ title, description })}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}