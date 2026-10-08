function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2 id="cart">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} — ₹{item.price}
            </p>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}

      <p>
        <strong>
          Total: ₹{cart.reduce((total, item) => total + item.price, 0)}
        </strong>
      </p>
    </div>
  );
}

export default Cart;