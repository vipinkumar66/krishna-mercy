import React from 'react'
import { Link } from 'react-router-dom';

const DropDownButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div className="relative inline-block text-left">
          <button
            onClick={toggleDropdown}
            className="px-2 py-0.5 bg-gray-500 text-white rounded focus:outline-none focus:bg-gray-600"
          >
            Explore
          </button>
          {isOpen && (
            <div className="absolute bg-white border rounded-md shadow-lg dark:bg-slate-600">
                <Link to="/contact" className="block px-4 py-2 hover:bg-blue-100
                dark:text-white hover:text-black">Contact Us</Link>
                <Link to="/suggestions" className="block px-4 py-2 hover:bg-gray-100
                dark:text-white hover:text-black">Send Suggestions</Link>
                <Link to="/insights" className="block px-4 py-2 hover:bg-blue-100
                dark:text-white hover:text-black">Insights</Link>
            </div>
          )}
        </div>
      );
}

export default DropDownButton