import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-white font-semibold text-lg mb-3">ScholarRecommend</h2>
          <p className="text-sm">
            Helping researchers discover relevant academic papers through AI-powered citation analysis.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">API</a></li>
            <li><a href="#" className="hover:underline">Integrations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Documentation</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center text-gray-400">
        © 2025 ScholarRecommend. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
