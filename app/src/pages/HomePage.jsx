import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Snowflakes from "magic-snowflakes";

export default function HomePage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const snowflakes = new Snowflakes({
    speed: 1,
    count: 5,
    wind: true,
    rotation: 3,
    zIndex: 10,
  });
  const flakes = new Snowflakes({
    speed: 1,
    color: "#2450b5",
    count: 5,
    wind: true,
    rotation: 3,
    zIndex: 80,
  });

  snowflakes.start();
  return (
    <div className="w-full bg-gray-800 flex flex-col justify-center items-center text-center snap-y snap-mandatory overflow-hidden">
      <div className="flex items-center justify-center flex-col h-screen">
        <h1 className="text-8xl font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 text-transparent">
          Web 3.0 Dictionary
        </h1>
        <h2 className="text-white my-12 text-4xl font-light">
          The next generation of dictionary world
        </h2>
        <div className="w-8/12 flex justify-around w-full">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-info w-full max-w-sm"
            onChange={handleChange}
            value={searchInput}
          />
          <button className="btn btn-outline btn-info">Search</button>
        </div>
      </div>
    </div>
  );
}
{
}
