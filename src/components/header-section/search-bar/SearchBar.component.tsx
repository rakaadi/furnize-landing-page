import React from "react";

const SearchBar = () => {
    return (
        <div className="h-10 w-75 lg:w-2/5 mx-auto my-0 lg:my-4 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
            <input type="search" name="search" id="search" placeholder="Search Your Dream Furniture Here.."
                className="text-sm lg:text-base appearance-none w-full outline-none focus:outline-none active:outline-none" />
            <button type="submit" className="ml-1 outline-none focus:outline-none active:outline-none">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    )
}

export default SearchBar;
