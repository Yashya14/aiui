import React from 'react';
import Footer from './Footer';

const Features = () => {
  return (
    <>
      <section className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">Our Amazing Features</h2>
        <div className="flex flex-wrap justify-around">
          
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">Social Media Integration</h3>
            <p className="mt-2 flex-grow text-sm">
              Create and share videos optimized for social media.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">Real-time Editing</h3>
            <p className="mt-2 flex-grow text-sm">
              Edit and customize videos in real-time.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">AI-Powered Suggestions</h3>
            <p className="mt-2 flex-grow text-sm">
              Get smart suggestions for enhanced engagement.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
            <p className="mt-2 flex-grow text-sm">
              Track video performance and audience engagement.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">Custom Branding</h3>
            <p className="mt-2 flex-grow text-sm">
              Add your brand elements for consistent branding.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">Multi-format Export</h3>
            <p className="mt-2 flex-grow text-sm">
              Export videos in multiple formats.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4 m-4 transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col h-28">
            <h3 className="text-lg font-semibold">Collaboration Tools</h3>
            <p className="mt-2 flex-grow text-sm">
              Built-in features for team collaboration.
            </p>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Features;
