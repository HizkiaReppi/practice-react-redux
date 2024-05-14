import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../redux/slices/todoSlice';
import Button from '../components/Button';
import Input from '../components/Input';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className='px-[7.5%] flex flex-col items-center justify-center h-[85vh]'>
      <h2 className='text-2xl font-semibold mb-3'>To-Do List</h2>
      <div className='mb-5 w-full max-w-xl'>
        <Input
          type='text'
          placeholder='Enter new task'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <Button
          type='button'
          variant='primary'
          className='mt-2'
          onClick={handleAddTodo}
        >
          Add Task
        </Button>
      </div>
      <ul className='w-full max-w-xl'>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? 'line-through' : ''
            }`}
          >
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
            <div>
              <Button
                type='button'
                variant={todo.completed ? 'yellow' : 'green'}
                className='mr-2'
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.completed ? 'Incomplete' : 'Complete'}
              </Button>
              <Button
                type='button'
                variant='red'
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
