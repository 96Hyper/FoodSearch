import React, { useState } from "react";
import Mealcard from "./Mealcard";

const Mainpage = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const myFun = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );
    const jsonData = await get.json();
    setData(jsonData.meals);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-orange-400 to-red-500 text-gray-800">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-6 py-10">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-md tracking-wider">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg text-white/90 max-w-xl text-center">
            Search for any dish by name and explore the best recipes from around
            the world. Satisfy your cravings today!
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center items-center py-4">
          <div className="searchBar h-16 w-[350px] bg-white flex justify-between items-center rounded-full shadow-xl overflow-hidden">
            <input
              onChange={handleInput}
              type="text"
              placeholder="Search your favorite dish..."
              className="w-full h-full pl-5 text-gray-700 placeholder-gray-400 text-sm rounded-l-full outline-none"
            />
            <button
              onClick={() => myFun()}
              className="h-full px-8 bg-yellow-500 text-black font-bold rounded-r-full hover:bg-yellow-400 transition-all duration-300 shadow-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Meal Cards Section */}
        <div className="flex flex-col items-center mt-10 px-4">
          {data ? (
            <Mealcard detail={data} />
          ) : (
            <h2 className="text-2xl font-semibold text-white">
              Start by searching for a dish!
            </h2>
          )}
        </div>

        {/* Footer */}
        <footer className="flex justify-center items-center mt-10 text-sm text-white/70">
          Built with ❤️ for food lovers.
        </footer>
      </div>
    </>
  );
};

export default Mainpage;
