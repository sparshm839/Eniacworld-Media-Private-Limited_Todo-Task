import API from '../utils/api';

function RatingStars({ rating = 0, taskId }) {
  const handleRate = async (r) => {
    await API.patch(`/tasks/${taskId}/rate`, { rating: r });
    window.location.reload();
  };

  return (
    <div className="flex space-x-1 mt-2">
      {[1, 2, 3, 4, 5].map(r => (
        <span key={r} onClick={() => handleRate(r)} className={`cursor-pointer text-lg ${r <= rating ? 'text-yellow-400' : 'text-gray-400'}`}>★</span>
      ))}
    </div>
  );
}

export default RatingStars;
