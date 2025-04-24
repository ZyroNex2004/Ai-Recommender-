import { TrendingUp, Users, BookOpen } from "lucide-react";
import React from "react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6 text-green-600" />,
    title: "Citation Analysis",
    description:
      "Our AI analyzes citation patterns across millions of academic papers to understand relationships between research.",
  },
  {
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: "Collaborative Filtering",
    description:
      "We combine citation data with researcher behavior to identify papers that similar researchers find valuable.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-green-600" />,
    title: "Content Understanding",
    description:
      "Our models understand the content of papers to recommend truly relevant research beyond simple keyword matching.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How it works</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center bg-green-100 rounded-full h-12 w-12 mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
