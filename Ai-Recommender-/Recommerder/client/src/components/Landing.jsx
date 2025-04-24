// Frontend: React.js with Tailwind CSS
// File: App.jsx

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Button from './Button';
import PaperCard from "./PaperCard";
import Navbar from './/Navbar';
import Footer from './Footer';
import Loader from './Loader';
import HowItWorks from './HowItWorks';


function Landing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPapers = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:5000/api/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: searchTerm }),
    });

    const data = await response.json();
    setPapers(data.papers || []);
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={fetchPapers}
      />

      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10">
          {papers.map((paper, idx) => (
            <PaperCard
              key={idx}
              title={paper.title}
              authors={paper.authors}
              abstract={paper.abstract}
              url={paper.url}
            />
          ))}
        </div>
      )}
     <HowItWorks />
   


      <Footer />
    </>
  );
}

export default Landing;
