import React from "react";
import { NavLink } from "react-router-dom";

const Mealcard = ({ detail }) => {
  console.log(detail);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
        {!detail ? (
          <h1 className="text-2xl font-bold text-gray-700">No Result Found</h1>
        ) : (
          detail.map((currItem) => {
            return (
              <div
                key={currItem.idMeal}
                className="w-[300px] bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Meal Image */}
                <img
                  className="object-cover w-full h-[200px] rounded-t-3xl"
                  src={currItem.strMealThumb}
                  alt={currItem.strMeal}
                />

                {/* Meal Info */}
                <div className="p-4 flex flex-col justify-center items-center">
                  <p className="font-bold text-xl text-gray-800 mb-3">
                    {currItem.strMeal}
                  </p>
                  <NavLink to={`/${currItem.idMeal}`}>
                    <button
                      type="button"
                      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-900 dark:hover:bg-gray-500 transition-all duration-300"
                    >
                      View Recipe
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Mealcard;
