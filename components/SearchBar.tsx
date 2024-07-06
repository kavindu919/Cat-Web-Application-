import React from "react";

interface SearchBarProps {
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
//React.ChangeEvent React.FC  for type checking with TypeScript
const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  handleSearchChange,
}) => {
  return (
    <div className="flex justify-center items-center mb-8">
      <input
        type="text"
        placeholder="Search breeds..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full max-w-md p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
