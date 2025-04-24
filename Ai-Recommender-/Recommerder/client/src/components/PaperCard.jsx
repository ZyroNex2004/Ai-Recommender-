// src/components/PaperCard.jsx
import React from "react";



const PaperCard = ({ title, abstract, authors }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-4 transition hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 mb-2">{abstract}</p>
      <p className="text-xs text-gray-500">Authors: {authors}</p>
    </div>
  );
};

export default PaperCard;
