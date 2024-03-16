import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './pages/Home';
import './index.css';

function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}/>
    )
  );


  return (
    <>
      <RouterProvider router={route} />
    </>     
  )
}

export default App;
