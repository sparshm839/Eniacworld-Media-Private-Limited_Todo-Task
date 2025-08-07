import API from '../utils/api';
import RatingStars from './RatingStars';

function TaskCard({ task }) {
  const handleComplete = async () => {
    await API.put(`/tasks/${task._id}`, { completed: !task.completed });
    window.location.reload();
  };

  const handleDelete = async () => {
    await API.delete(`/tasks/${task._id}`);
    window.location.reload();
  };

  return (
    <div className="bg-white text-black p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p>{task.description}</p>
        <p className="text-sm">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        <RatingStars taskId={task._id} rating={task.rating} />
      </div>
      <div className="space-x-2">
        <button onClick={handleComplete} className="bg-yellow-500 text-white px-2 py-1 rounded">{task.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleDelete} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
