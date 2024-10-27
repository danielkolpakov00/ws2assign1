
import PropTypes from 'prop-types';

function ProductCard({ product, isFavorite, toggleFavorite }) {
  return (
    <div className="border p-4 rounded shadow-lg hover:shadow-xl transition-shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button
        onClick={() => toggleFavorite(product.id)}
        className={`mt-2 px-4 py-2 rounded transition-colors ${
          isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-800'
        }`}
      >
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default ProductCard;
