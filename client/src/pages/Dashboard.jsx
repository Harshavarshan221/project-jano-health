// import Layout from "../components/Layout";
// import TaskCard from "../components/TaskCard";
// import TaskModal from "../components/TaskModal";
// import { useState } from "react";

// export default function Dashboard() {
//   const [tasks, setTasks] = useState([]);
//   const [open, setOpen] = useState(false);

//   const addTask = (task) => {
//     setTasks([...tasks, { ...task, completed: false }]);
//     setOpen(false);
//   };

//   return (
//     <Layout>
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold">My Tasks</h2>

//         <button
//           onClick={() => setOpen(true)}
//           className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
//         >
//           + New Task
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {tasks.map((task, index) => (
//           <TaskCard key={index} task={task} />
//         ))}
//       </div>

//       <TaskModal
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onSave={addTask}
//       />
//     </Layout>
//   );
// }


import Layout from "../components/Layout";
import TaskCard from "../components/TaskCard";
import TaskModal from "../components/TaskModal";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { getToken } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = await getToken();

    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/tasks`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTasks(res.data);
  };

  const addTask = async (task) => {
    const token = await getToken();

    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/tasks`,
      task,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTasks([...tasks, res.data]);
    setOpen(false);
  };

  const deleteTask = async (id) => {
    const token = await getToken();

    await axios.delete(
      `${import.meta.env.VITE_API_URL}/api/tasks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Layout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Tasks</h2>

        <button
          onClick={() => setOpen(true)}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg"
        >
          + New Task
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </div>

      <TaskModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onSave={addTask}
      />
    </Layout>
  );
}