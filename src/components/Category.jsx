import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Category() {
  // const {categoryOnlyData} = getData()
  const navigate = useNavigate();
  const {data }= getData()
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [ ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => navigate(`/category/${item}`)}
                className="uppercase bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all"
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
