import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Snowflakes from "magic-snowflakes";
import axios from "axios";

export default function HomePage() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: `${searchInput}` },
    headers: {
      "X-RapidAPI-Key": "9866bf4749msh99e8864ca900875p11bba2jsncd5e6bae0d85",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };

  // const handleJump = (searchInput) => {
  //   // navigate(`/${searchInput}`);
  //   console.log(searchInput);
  // };

  const handleSearch = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
  const snowflakes = new Snowflakes({
    speed: 1,
    count: 4,
    wind: true,
    rotation: 3,
    zIndex: 10,
  });
  const flakes = new Snowflakes({
    speed: 1,
    color: "#2450b5",
    count: 4,
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
        <div className="w-8/12 flex justify-center w-full input-group">
          <input
            type="text"
            placeholder="Search here"
            className="input input-bordered input-info w-full max-w-sm"
            onChange={handleChange}
            value={searchInput}
            onKeyDown={handleKeyDown}
          />
          <button className="btn btn-outline btn-info" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
