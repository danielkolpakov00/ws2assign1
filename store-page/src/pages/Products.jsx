import { useState } from 'react';
import ProductList from '../components/ProductList';

function Products() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter((id) => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Our Products</h2>
      <ProductList favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default Products;
