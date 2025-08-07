import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: String,
  description: String,
  dueDate: Date,
  completed: { type: Boolean, default: false },
  rating: { type: Number, min: 1, max: 5 }
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
