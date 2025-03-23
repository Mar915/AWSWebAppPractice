import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4">
      <Link to="/" className="text-blue-600 font-semibold hover:underline">
        Dashboard
      </Link>
      <Link to="/inventory" className="text-blue-600 font-semibold hover:underline">
        Inventory
      </Link>
    </nav>
  );
}

export default Navbar;
