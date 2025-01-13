import React from "react";
import Header from "./components/Headers";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to My Website</h1>
        <p className="mt-2 text-gray-700">This is a simple header example using Tailwind CSS and Vite.</p>
      </main>
    </div>
  );
};

export default App;