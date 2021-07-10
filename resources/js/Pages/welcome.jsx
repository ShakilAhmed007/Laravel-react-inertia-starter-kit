import React from "react";

function welcome() {
  return (
    <div>
      <div className="">
        <div className="card text-center bg-gray-600 flex items-center justify-center h-screen">
          <div className="text-white inline-block ">
            <h1 className="font-bold text-6xl">
              Laravel<span className="text-red-600">+</span>React
              <span className="text-red-600">+</span>Inertia
              <span className="text-red-600">+</span>Tailwind
            </h1>
            <h2 className="font-bold text-4xl">Starter kit</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default welcome;
