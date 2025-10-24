import React from 'react';

function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
