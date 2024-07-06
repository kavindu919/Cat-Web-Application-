"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ErrorPage from "../../../components/ErrorPage";

const BreedDetail = () => {
  //grab the id form dynamic url
  const { id } = useParams();
  const { selectedBreed } = useSelector((state: RootState) => state.breed);
  //cheak the status of breed
  if (!selectedBreed) {
    return <ErrorPage />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* get image from using redux */}
        <img
          className="w-full h-64 object-cover"
          src={selectedBreed.image?.url || "/l2.jpg"}
          alt={selectedBreed.name}
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center my-4">
            {/* get name */}
            {selectedBreed.name}
          </h1>
          <div className="text-lg text-gray-700 mb-4">
            <p>
              {/* origin */}
              <strong>Origin:</strong> {selectedBreed.origin}
            </p>
            <p>
              {/* get L.F */}
              <strong>Life Span:</strong> {selectedBreed.life_span} years
            </p>
          </div>
          <p className="text-gray-700 text-base mb-4">
            {/* description */}
            {selectedBreed.description}
          </p>
          <h2 className="text-2xl font-bold mb-4">Temperament</h2>
          <p className="text-gray-700 text-base mb-4">
            {/* Temperament */}
            {selectedBreed.temperament}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;
