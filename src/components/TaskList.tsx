
import React from 'react';
import TaskItem from './TaskItem';
import { Task } from './types';

interface Props {
    tasks: Task[];
    deleteTask: (id: number) => void;
    startEditing: (task: Task) => void;
    updateTask: (task: Task) => void;
}

const statusGroups: Array<{ status: string, label: string }> = [
    { status: 'Pending', label: 'Pending' },
    { status: 'In Progress', label: 'In Progress' },
    { status: 'Completed', label: 'Completed' }
];

const TaskList: React.FC<Props> = ({ tasks, deleteTask, startEditing, updateTask }) => {
    return (
        <div>
            {statusGroups.map(({ status, label }) => (
                <div key={status}>
                    <h2>{label} ({tasks.filter(t => t.status === status).length})</h2>
                    <div>
                        {tasks.filter(t => t.status === status)
                            .map(task => (
                                <TaskItem
                                    key={task.id}
                                    task={task}
                                    deleteTask={deleteTask}
                                    startEditing={startEditing}
                                    updateTask={updateTask}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
