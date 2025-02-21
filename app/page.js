import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Dashboard />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}


const HIGH = 'high'
const MEDIUM = 'medium'
const LOW = 'low'



function Dashboard() {

  const tasks = {
    upcoming: [
      { id: 1, title: 'Plan project roadmap', description: 'description', dueDate: '2023-11-15', priority : HIGH },
      { id: 2, title: 'Design new UI components', description: 'description', dueDate: '2023-11-20', priority : MEDIUM },
    ],
    overdue: [
      { id: 3, title: 'Fix login page bug', dueDate: '2023-10-30', description: 'description', priority : HIGH },
      { id: 4, title: 'Update documentation', dueDate: '2023-11-05', description: 'description', priority : HIGH },
    ],
    completed: [
      { id: 5, title: 'Set up CI/CD pipeline', dueDate: '2023-11-01', description: 'description', priority : HIGH },
      { id: 6, title: 'Deploy v1.0.0', dueDate: '2023-11-10', description: 'description', priority : HIGH },
    ],
  };

  return(

    <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-2xl font-bold mb-8">Task Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Upcoming Tasks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Upcoming Tasks</h2>
        <ul>
          {tasks.upcoming.map((task) => (
            <li key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Overdue Tasks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Overdue Tasks</h2>
        <ul>
          {tasks.overdue.map((task) => (
            <li key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
        <ul>
          {tasks.completed.map((task) => (
            <li key={task.id} className="mb-2 p-2 bg-gray-50 rounded">
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  )
}