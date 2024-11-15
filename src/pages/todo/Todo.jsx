import React, { useState, useEffect } from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdDeleteOutline } from "react-icons/md";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState('');
  const [id, setId] = useState(0);
  const [date, setDate] = useState('');



  // Storing tasks in local storage

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);



  // Function to get current date


  useEffect(() => {
    const date = new Date();
    const options = { day: 'numeric', month: 'numeric', year: 'numeric', weekday: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    setDate(formattedDate);
  }, []);

  // Function to add a new task

  const handleAddTask = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newTask = {
      id: id,
      task: inputValue,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setId(prev => prev + 1);
    setInputValue('');
  };


  //  function to handle key press

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }


  // Function to toggle task completion


  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to delete a task


  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to reset all tasks


  const resetTasks = () => {
    setTasks([]);
    setId(0);
    localStorage.removeItem('tasks');
  };

  return (
    <div className='w-[95%] mx-auto  font-poppins mt-5 '>

      <div className=''>

        {/* task name and current date */}

        <div className='text-2xl font-semibold text-sidebar-bg dark:text-dark-text-secondary'>Write your daily todo's</div>
        <p className='text-primary mt-3 text-lg font-semibold dark:text-dark-text-primary'>{date}</p>


        {/* input field */}



        <div className='mt-5 flex justify-between items-center gap-2'>
          <input
            type="text"
            value={inputValue}
            placeholder='write your task'
            className='w-full shadow-md outline-none px-2 py-2 text-lg text-primary rounded-md font-poppins focus:outline-sidebar-bg focus:outline-1 focus:outline-offset-2 bg-transparent dark:border dark:border-[rgba(255,255,255,0.5 )] dark:text-dark-text-secondary'
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <CiCirclePlus
            className='text-4xl text-sidebar-bg cursor-pointer'
            onClick={handleAddTask}
          />
        </div>


        {/* progress bar */}


        <div className='mt-5'>
          <p className='text-right dark:text-white'>{tasks.filter(task => task.completed).length}/{tasks.length}</p>
          <div className='w-full h-[10px] bg-[rgba(0,0,0,0.2)] rounded-lg'>
            <div
              className='h-full rounded-lg bg-green-600 transition-all duration-500'
              style={{ width: `${(tasks.filter(task => task.completed).length / tasks.length) * 100}%` }}
            ></div>
          </div>
        </div>



        {/* tasks list */}


        <div className='mt-5'>
          {tasks.map(task => (
            <div key={task.id} className='flex items-center mt-3'>
              <li className={`list-none w-[90%] text-primary dark:text-white rounded-md px-3 ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.task}</li>
              {task.completed ? (
                <MdOutlineCheckBox
                  className='text-xl text-green-600 cursor-pointer hover:scale-125'
                  onClick={() => toggleTaskCompletion(task.id)}
                />
              ) : (
                <MdOutlineCheckBoxOutlineBlank
                  className='text-xl text-sidebar-bg cursor-pointer hover:scale-125'
                  onClick={() => toggleTaskCompletion(task.id)}
                />
              )}
              <MdDeleteOutline
                className='text-xl text-sidebar-bg cursor-pointer hover:scale-125'
                onClick={() => deleteTask(task.id)}
              />
            </div>
          ))}
        </div>



        {/* task reset button */}


        {tasks.length ? <button
          className='mt-5 block bg-sidebar-bg hover:bg-orange-600 px-6 py-1 text-xl text-white rounded-md text-nowrap dark:bg-transparent dark:border dark:border-[rgba(255,255,255,0.5)]'
          onClick={resetTasks}
        >
          Reset
        </button> : ''}

      </div>
    </div>
  );
};

export default Todo;
