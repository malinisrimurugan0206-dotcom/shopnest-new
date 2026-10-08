function Products({
  filteredProducts,
  addToCart,
  setSelectedProduct,
  toggleWishlist,
  wishlist
}) {
  return (
    <div id="products">
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
          />

          <h3>{product.name}</h3>

          <p>⭐ {product.rating} / 5</p>

          <p>
            {product.stock > 0
              ? `In Stock (${product.stock})`
              : "Out of Stock"}
          </p>

          <p>₹{product.price}</p>

          <button onClick={() => setSelectedProduct(product)}>
            View Product
          </button>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <button onClick={() => toggleWishlist(product)}>
            {wishlist.some((item) => item.id === product.id)
              ? "❤️ Wishlisted"
              : "♡ Add to Wishlist"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;