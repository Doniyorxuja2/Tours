import React from "react";
import Card from "./Card";

const Cards = ({ tours, handleDeleted, getData }) => {
  return (
    <div className="max-w-[1200px] mx-auto my-0">
      {tours.length > 0 && (
        <div className="p-4">
          <h1 className=" mb-3 text-center uppercase text-green-400 text-[28px]">
            Our Tours
          </h1>
          <hr className="w-[180px] h-1 m-auto bg-green-400" />
        </div>
      )}
      <div className="">
        {tours.length === 0 && (
          <div className="flex justify-center items-center flex-col">
            <h1 className="mb-3 text-center uppercase text-green-400 text-[28px]">Tugadi:</h1>
            <button
              onClick={() => getData()}
              className="p-3 mt-5 rounded-md bg-stone-700 px-10 text-white shadow-md"
            >
              Refresh
            </button>
          </div>
        )}
        <div className="grid grid-cols-3 gap-6">
          {tours &&
            tours.map((tour) => (
              <Card
                key={tour.id}
                {...tour}
                handleDeleted={handleDeleted}
              ></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
