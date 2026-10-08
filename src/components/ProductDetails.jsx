function ProductDetails({ selectedProduct, addToCart, setSelectedProduct }) {
  if (!selectedProduct) {
    return null;
  }

  return (
    <div>
      <h2>{selectedProduct.name}</h2>

      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        width="300"
      />

      <p>Price: ₹{selectedProduct.price}</p>

      <p>⭐ {selectedProduct.rating} / 5</p>

      <p>
        {selectedProduct.stock > 0
          ? `In Stock (${selectedProduct.stock})`
          : "Out of Stock"}
      </p>

      <button onClick={() => addToCart(selectedProduct)}>
        Add to Cart
      </button>

      <button onClick={() => setSelectedProduct(null)}>
        Close
      </button>
    </div>
  );
}

export default ProductDetails;