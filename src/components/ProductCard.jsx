import { Link } from "react-router-dom";

function ProductCard({ product, favorites = [], setFavorites, onAddToCart }) {
  const isFavorite = favorites.some((item) => item.id === product.id);

  const toggleFavorite = () => {
    if (!setFavorites) return;

    if (isFavorite) {
      setFavorites((current) =>
        current.filter((item) => item.id !== product.id),
      );
    } else {
      setFavorites((current) => [...current, product]);
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
      {/* Product Image */}
      <div className="relative h-[300px] overflow-hidden">
        <Link to="/models">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </Link>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-xl hover:scale-110 transition"
          aria-label="إضافة للمفضلة"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5 text-right">
        <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>

        {product.category && (
          <p className="text-sm text-gray-500 mt-2">{product.category}</p>
        )}

        <p className="text-[#ca397d] font-bold mt-3">
          {product.price} جنيه / الثرية (6 قطع)
        </p>

        {/* Add To Cart */}
        <button
          onClick={() => onAddToCart && onAddToCart(product)}
          className="w-full mt-5 bg-[#ca397d] text-white py-3 rounded-lg hover:bg-[#ad2868] transition flex items-center justify-center gap-2"
        >
          <span>🛒</span>
          إضافة للسلة
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
