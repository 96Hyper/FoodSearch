import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Mealinfo = () => {
  const [info, setInfo] = useState();
  const { mealid } = useParams();

  const getInfo = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
    );

    const jsonData = await get.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  };

  if (info !== "") {
    getInfo();
  }

  return (
    <>
      {!info ? (
        <div className="h-screen flex justify-center items-center bg-gray-100">
          <h1 className="text-3xl font-semibold text-gray-700">No Result Found</h1>
        </div>
      ) : (
        <div className="min-h-screen w-full flex  justify-evenly items-center bg-gradient-to-r from-yellow-300 to-orange-400 ">
          <img
            className="w-[400px] rounded-lg shadow-lg border-4 border-white"
            src={info.strMealThumb}
            alt={info.strMeal}
          />
          <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg space-y-6 max-w-2xl">
            <h1 className="text-4xl font-bold bg-red-500 text-white rounded-full text-center py-3 shadow-md">
              Recipe Details
            </h1>
            <h2 className="font-bold text-3xl text-gray-800">{info.strMeal}</h2>
            <h3 className="font-semibold text-2xl text-gray-600">Instruction</h3>
            <p className="text-gray-700 leading-relaxed">{info.strInstructions}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Mealinfo;
