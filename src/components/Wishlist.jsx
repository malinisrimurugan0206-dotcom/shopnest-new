function Wishlist({ wishlist, addToCart, toggleWishlist }) {
  return (
    <div>
      <h2 id="wishlist">Wishlist ❤️</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              width="150"
            />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>

            <button onClick={() => toggleWishlist(item)}>
              Remove from Wishlist
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;