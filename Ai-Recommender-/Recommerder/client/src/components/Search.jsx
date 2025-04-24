import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  // const handleSearch = (e) => {
  //   e.preventDefault();

  //   // Check for token
  //   // const token = localStorage.getItem("token");
  //   // if (!token) {
  //   //   alert("You must be logged in to search. Redirecting to login...");
  //   //   // Save the query temporarily (optional)
  //   //   localStorage.setItem("pendingSearchQuery", query);
  //   //   navigate("/login");
  //   //   return;
  //   }

  //   // Dummy results — replace with real API call later
  //   // setResults([
  //   //   { title: "A Study on Cybersecurity using ML", authors: "John Doe, Jane Smith" },
  //   //   { title: "Neural Networks in NLP Applications", authors: "Alice Brown, Bob White" },
  //   // ]);
  // };
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(query);

  
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${localStorage.getItem("token")}`, // If you're using auth
        },
        
        body: JSON.stringify({ query }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setResults([
          {
            title: query,
            authors: data.result, // You can format this as needed
          },
        ]);
      } else {
        alert(data.error || "Something went wrong with the search.");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      alert("Failed to fetch results. Please try again later.");
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white px-4 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-center text-zinc-800 mb-8">Search Academic Papers</h2>

        <form onSubmit={handleSearch} className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter keywords, topics, or authors..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Search
          </button>
        </form>

        {results.length > 0 && (
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-zinc-800 mb-4">Search Results:</h3>
            {results.map((paper, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-medium text-blue-600">{paper.title}</h4>
                <p className="text-sm text-gray-500">Authors: {paper.authors}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
