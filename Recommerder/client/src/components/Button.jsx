import React from 'react';

function Button({ onClick, children, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
