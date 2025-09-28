import React, { useState } from 'react';

interface Props {
    addTask: (title: string, description: string) => void;
}
const AddTaskForm: React.FC<Props> = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        addTask(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
            <input
                type="text"
                placeholder="Enter the title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter the description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button type="submit">ADD</button>
            <button type="button" onClick={() => { setTitle(''); setDescription(''); }}>Cancel</button>
        </form>
    );
};
export default AddTaskForm;
