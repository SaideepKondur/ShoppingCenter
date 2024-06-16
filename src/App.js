import './App.css';
import { Routes, Route } from 'react-router-dom';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import CreateNote from './components/notes/CreateNote';
import ListNotes from './components/notes/ListNotes';
import NavBar from './components/e-commerce/navbar/NavBar';
import CartPage from './components/e-commerce/cartpage/CartPage';
import ProductList from './components/e-commerce/productlist/ProductList';




function App() {
  return (
    <div className="App">
            <NavBar />
      <Routes>
      <Route path = '/CartPage' element={<CartPage />} />
      <Route path = '/index' element={<ProductList />} />
      </Routes>
      {/* <Child1 />
      <Child2 /> */}
      {/* <CreateNote />
      <ListNotes /> */}
    </div>
  );
}

export default App;
