import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

import categories from './data/categories.json';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {

  const navLinks = categories.map((category) => {
    return {
      title: category.name,
      path: `/category/${category.id}`
    }
  });


  return (
    <div >
      <header >
        <NavBar pageTitle="Tienda de cursos" navLinks={navLinks}></NavBar>
      </header>

      <main>
        <ItemListContainer greeting="Hola, bienvenido a la tienda de cursos"></ItemListContainer>
      </main>

      <Footer></Footer>
      

    </div>
  );
}

export default App;
