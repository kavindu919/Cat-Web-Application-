"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { fetchBreeds, selectBreed } from "@/slices/breedSlice";
import { useRouter } from "next/navigation";
import ErrorPage from "@/components/ErrorPage";
import Loading from "@/components/Loading";

import SearchBar from "@/components/SearchBar";
import Image from "next/image";

const Cats = () => {
  //use for dispatch function form store
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  //return part of state which is want to access
  const { breeds, loading, error } = useSelector(
    (state: RootState) => state.breed
  );
  //make use state for hold the search inputs
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    //dispatch is a function from the Redux dispatch actions to the Redux store
    dispatch(fetchBreeds());
  }, [dispatch]);

  interface Breed {
    id: String;
    name: String;
    description: String;
    temperament: String;
    image?: {
      url: string;
    };
  }
  //handles clicks on breed items dispatching an action to select the breed and navigating to a detail page
  const handleBreedClick = (breed: Breed) => {
    dispatch(selectBreed(breed));
    router.push(`/breed/${breed.id}`);
  };
  //event object is of type React.ChangeEvent HTMLInputElement and function use  for set searchquery using inputs
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  //filter the fetch breeds according to the search parameters
  const filteredBreeds = breeds.filter((breed) =>
    breed.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-4xl font-bold text-center my-8">Cat Breeds</h1>
      <div className="mb-8">
        <SearchBar
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* display breding according to the filter` */}
        {filteredBreeds.map((breed) => (
          <div
            key={breed.id}
            className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleBreedClick(breed)}
          >
            <img
              className="w-full h-48 object-cover"
              src={breed.image?.url || "/img/default-cat.jpg"}
              alt={breed.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{breed.name}</div>
              <p className="text-gray-700 text-base line-clamp-3">
                {breed.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {/* map all the temps */}
              {breed.temperament.split(", ").map((temp: any, index: any) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  #{temp}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cats;
