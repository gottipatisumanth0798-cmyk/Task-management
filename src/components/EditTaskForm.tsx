import React, { useState } from 'react';
import { Task, TaskStatus } from './types';

interface Props {
    task: Task;
    updateTask: (task: Task) => void;
    cancelEdit: () => void;
}

const EditTaskForm: React.FC<Props> = ({ task, updateTask, cancelEdit }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [status, setStatus] = useState<TaskStatus>(task.status);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateTask({ ...task, title, description, status });
    };

    return (
        <form onSubmit={handleSubmit} className="edit-task-form">
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <select value={status} onChange={e => setStatus(e.target.value as TaskStatus)}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button type="submit">Update</button>
            <button type="button" onClick={cancelEdit}>Cancel</button>
        </form>
    );
};

export default EditTaskForm;
