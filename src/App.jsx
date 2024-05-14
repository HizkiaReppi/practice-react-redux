import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loading from './components/Loading';
import Navbar from './components/Navbar';

const Homepage = lazy(() => import('./pages/Homepage'));
const Counter = lazy(() => import('./pages/Counter'));
const User = lazy(() => import('./pages/User'));
const TodoList = lazy(() => import('./pages/TodoList'));

export default function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path='/'
            element={<Homepage />}
          />
          <Route
            path='/counter'
            element={<Counter />}
          />
          <Route
            path='/user'
            element={<User />}
          />
          <Route
            path='/todo-list'
            element={<TodoList />}
          />
        </Routes>
      </Suspense>
    </>
  );
}
