import React from "react";
import Header from "./components/Headers";
import lion from "./assets/LION.jpg"

const App = () => {
  return (
    <div className="bg-pink-400 min-h-screen">
      <Header />
      <main>
        <div className="w-full">
        <img src={lion} className="object-cover w-screen"/>
        </div>

      </main>
    </div>
  );
};

export default App;