import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import EditTaskForm from './components/EditTaskForm';
import { Task } from './components/types';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editingTask, setEditingTask] = useState<Task | null>(null);

    const addTask = (title: string, description: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            description,
            status: 'Pending',
            date: new Date().toDateString(),
        };
        setTasks([...tasks, newTask]);
    };

    const updateTask = (updatedTask: Task) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
        setEditingTask(null);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const startEditing = (task: Task) => setEditingTask(task);

    return (
        <div className="app-container">
            <h1>Task Management</h1>
            <AddTaskForm addTask={addTask} />
            {editingTask && (
                <EditTaskForm
                    task={editingTask}
                    updateTask={updateTask}
                    cancelEdit={() => setEditingTask(null)}
                />
            )}
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                startEditing={startEditing}
                updateTask={updateTask}
            />
        </div>
    );
};

export default App;

