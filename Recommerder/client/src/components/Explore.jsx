import React from "react";
import Navbar from "./Navbar";


const Explore = () => {
  const categories = [
    {
      title: "Cybersecurity",
      description: "Explore the latest research in threat detection, cryptography, and network security.",
    },
    {
      title: "Machine Learning",
      description: "Dive into neural networks, deep learning, and real-world AI applications.",
    },
    {
      title: "Data Science",
      description: "Discover trends in big data, analytics, and scientific computing.",
    },
    {
      title: "Blockchain",
      description: "Understand how decentralized systems are shaping the future of finance and tech.",
    },
    {
      title: "Natural Language Processing",
      description: "Explore papers on language models, translation, and generative AI.",
    },
    {
      title: "Cloud Computing",
      description: "Learn about scalable architectures and cloud-native solutions.",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-zinc-800 mb-10">Explore Research Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">{cat.title}</h3>
            <p className="text-gray-600">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Explore;
