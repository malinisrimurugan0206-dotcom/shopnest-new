import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount, darkMode, setDarkMode }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
      <Link to="/wishlist">Wishlist ({wishlistCount})</Link>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;