/*
import React from 'react';
import './App.css'; // We'll keep this for global styles
import useCatalogData from './hooks/useCatalogData';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const catalog = useCatalogData();
  const firstProduct = catalog.products[0];

  return (
    <div className="App">
      <header className="App-header">
        <ProductCard product={firstProduct} />
      </header>
    </div>
  );
}

export default App;
*/

import React from 'react';
import CatalogContainer from './components/CatalogContainer';

function App() {
  return (
    <main className="bg-primary-dark font-sans">
      <CatalogContainer />
    </main>
  );
}

export default App;