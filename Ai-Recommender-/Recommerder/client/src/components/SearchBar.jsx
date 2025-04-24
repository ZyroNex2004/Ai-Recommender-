import React from "react";


const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold py-4  text-zinc-700" >Discover relevant academic papers with AI</h1>
      <p className="text-lg  font-normal pb-4 px-2 text-center text-gray-700 ">Our citation-based recommendation engine helps you find the most relevant papers in your research field</p>
      <input
        type="text"
        placeholder="Enter topic, title, or keywords..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Search Papers
      </button>
    </div>
  );
};

export default SearchBar;
