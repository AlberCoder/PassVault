
const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <a href="/" className="hover:text-gray-400">
            <img src="/logo.png" className="md:w-48 w-32" alt="Logo" />
          </a>
        </div>


        {/* Navigation Links */}
        <div className="flex space-x-4" >
          <a
            href="/"
            className="text-gray-300 text-sm md:text-lg  hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
            Home
          </a>
          <a
            href="/about"
            className="text-gray-300 text-sm md:text-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
            About
          </a>
          <a
            href="/contact"
            className="text-gray-300 text-sm md:text-lg hover:text-white transition duration-300 ease-in-out transform hover:scale-110">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
