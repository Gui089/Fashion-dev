import {RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home } from './pages/Home';
import { InfoProduct } from './pages/InfoProduct';
import { CartProduct } from './pages/CartProduct';
import './index.css';

const Products = async () => {
  const products = await fetch('https://raw.githubusercontent.com/stack-code-dev/devfashion/master/json/dados.json');
  return await products.json();
}
 

function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Home />} loader={Products}/>
        <Route path='infoproduct/:id' element={<InfoProduct />} />
        <Route path='cart' element={<CartProduct />}/>
      </>
    )
  );


  return (
    <>
      <RouterProvider router={route} />
    </>     
  )
}

export default App;
