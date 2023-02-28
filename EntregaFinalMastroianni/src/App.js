import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

//import categories from './data/categories.json';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import Footer from './components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CartProvider } from './components/CartProvider';

function App() {

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=>{
      let lstCategories = json.map((category,index) => {
        return {
          id: index,
          name: category,
          description: category
        }});
      setCategories(lstCategories)
    })
  }, []);

  const navLinks = categories.map((category) => {
    return {
      title: category.name,
      path: `/category/${category.name.replace(" ","%20")}`
    }
  });


  return (

    <BrowserRouter>
      <CartProvider>

    
        <header >
          <NavBar pageTitle="Tienda online" navLinks={navLinks}></NavBar>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Hola, bienvenido a la tienda online."></ItemListContainer>}></Route>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Hola, bienvenido a la tienda online."></ItemListContainer>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}></Route>

          </Routes>
        </main>

        {//<Footer></Footer>
        }
      
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
