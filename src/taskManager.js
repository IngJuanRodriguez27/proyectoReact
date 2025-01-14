import React, { useState } from 'react';

function TaskManager() {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas
  const [taskName, setTaskName] = useState(''); // Estado para el campo de nombre
  const [taskDescription, setTaskDescription] = useState(''); // Estado para el campo de descripción

  // Manejar el cambio en el campo de nombre
  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // Manejar el cambio en el campo de descripción
  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  // Agregar una nueva tarea
  const addTask = () => {
    if (taskName.trim() !== '' && taskDescription.trim() !== '') {
      setTasks([...tasks, { name: taskName, description: taskDescription }]);
      setTaskName('');
      setTaskDescription('');
    }
  };

  // Eliminar una tarea
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-manager">
      <h1>Gestor de Tareas</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={taskName}
          onChange={handleNameChange}
        />
        <textarea
          placeholder="Descripción de la tarea"
          value={taskDescription}
          onChange={handleDescriptionChange}
        ></textarea>
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index}>
            <div className="task-item">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button onClick={() => deleteTask(index)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
