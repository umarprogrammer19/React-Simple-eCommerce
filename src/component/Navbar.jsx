import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-900 py-4 px-6 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-white text-3xl font-bold">
          MyShop
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links and Icons */}
        <div className={`lg:flex lg:items-center lg:space-x-2 ${isOpen ? 'block' : 'hidden'} lg:block absolute lg:static top-full left-0 w-full lg:w-auto bg-blue-900 lg:bg-transparent transition-all duration-300 ease-in-out`}>
          <Link to="/" className="block lg:inline text-white hover:text-yellow-300 transition py-2 px-3" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="block lg:inline text-white hover:text-yellow-300 transition py-2 px-3" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" className="block lg:inline text-white hover:text-yellow-300 transition py-2 px-3" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/products" className="block lg:inline text-white hover:text-yellow-300 transition py-2 px-3" onClick={closeMenu}>
            Products
          </Link>
          <Link className="block lg:inline text-white hover:text-yellow-300 transition py-2 px-3" onClick={closeMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 14a6.978 6.978 0 01-4.724-1.686l-3.73 3.729a1 1 0 001.414 1.415l3.73-3.728A6.978 6.978 0 0111 18z" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
