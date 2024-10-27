import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

function ProductList({ favorites, toggleFavorite }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.number).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ProductList;
