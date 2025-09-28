import React from 'react';
import { Task } from './types';

interface Props {
    task: Task;
    deleteTask: (id: number) => void;
    startEditing: (task: Task) => void;
    updateTask: (task: Task) => void;
}

const TaskItem: React.FC<Props> = ({ task, deleteTask, startEditing, updateTask }) => {
    return (
        <div className={`task-item ${task.status.toLowerCase()}`}>
            <div>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <span>Status: {task.status}</span>
                <span>{task.date}</span>
            </div>
            <div className="actions">
                <button onClick={() => updateTask({ ...task, status: 'Completed' })}>
                    ✅
                </button>
                <button onClick={() => startEditing(task)}>✏️</button>
                <button onClick={() => deleteTask(task.id)}>🗑️</button>
            </div>
        </div>
    );
};

export default TaskItem;
