import React from 'react';
import Filters from './Components/Filters/Filtres';
import Home from './Components/ProductList/Home/Home';
import ProductCard from './Components/ProductList/ProductCard/ProductCard';
import Cart from './Components/ShoppingCart/Cart/Cart';
import Items from './Components/ShoppingCart/Items/Items';

function App() {
  return (
    <div>
      <Filters/>
      <Home/>
      <ProductCard/>
      <Cart/>
      <Items/>
    </div>
  );
}

export default App;
