import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = await Task.create({ userId: req.userId, title, description, dueDate });
  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: 'Task deleted' });
};

export const rateTask = async (req, res) => {
  const { rating } = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    { rating },
    { new: true }
  );
  res.json(task);
};

// 📊 Aggregation Endpoint
export const getTaskSummary = async (req, res) => {
  const summary = await Task.aggregate([
    { $match: { userId: req.userId } },
    {
      $group: {
        _id: null,
        total: { $sum: 1 },
        completed: { $sum: { $cond: ['$completed', 1, 0] } },
        pending: { $sum: { $cond: ['$completed', 0, 1] } },
        avgRating: { $avg: '$rating' }
      }
    }
  ]);
  res.json(summary[0] || {});
};
