import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ['Bags', 'Belts', 'Cosmetics', 'Hats'];

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={handleToggle}
      >
        <span>Shop</span>
        <ChevronDown size={16} />
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg p-4 grid grid-cols-2 gap-8 w-[400px] z-50"
          onMouseLeave={handleMouseLeave}
          onClick={handleDropdownClick}
        >
          <div>
            <h4 className="text-[#252B42] font-bold mb-2">Kadın</h4>
            <ul className="space-y-1">
              {categories.map((item) => (
                <li key={`kadin-${item}`}>
                  <Link
                    to="/"
                    className="text-[#737373] hover:text-[#252B42] cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#252B42] font-bold mb-2">Erkek</h4>
            <ul className="space-y-1">
              {categories.map((item) => (
                <li key={`erkek-${item}`}>
                  <Link
                    to="/"
                    className="text-[#737373] hover:text-[#252B42] cursor-pointer text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopDropdown;
