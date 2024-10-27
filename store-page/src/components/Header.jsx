import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Store Name */}
        <h1 className="text-2xl md:text-3xl font-bold">
          <Link to="/" className="hover:text-yellow-300 transition-colors">My Store</Link>
        </h1>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 md:space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-300' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products" 
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-300' : ''}`
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) =>
                  `hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-300' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
