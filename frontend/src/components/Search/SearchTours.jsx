import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import tours from "../../assets/data/tours";
import { IoSearch } from "react-icons/io5";

const SearchTours = () => {
  const cityRef = useRef(0);
  const navigate = useNavigate();

  const SubmitHandler = () => {
    const searchTerm = cityRef.current.value;

    if (searchTerm === "") {
      toast.error("Please enter a destination");
    } else {
      const filteredTours = tours.filter(tour => 
        tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tour.city.toLowerCase().includes(searchTerm.toLowerCase())
      );

      navigate(`/tours/search?search=${searchTerm}`, { state: filteredTours });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      SubmitHandler();
    }
  };

  return (
    <div>
      <section className="py-4 px-6 md:px-12">
        <div className="container text-center">
          <h2 className="text-[30px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center">
            Find Your Perfect <span className="text-BaseColor">Destination</span>
          </h2>
          <div className="max-w-[600px] mt-[15px] mx-auto bg-white rounded-full shadow-lg flex items-center justify-between border border-gray-200">
            <div className="flex items-center w-full">
              <IoSearch className="text-gray-400 ml-4 text-xl" />
            <input
              type="search"
              ref={cityRef}
              onKeyPress={handleKeyPress}
                className="py-4 pl-3 pr-2 bg-transparent w-full focus:outline-none text-gray-700 placeholder-gray-400"
                placeholder="Where would you like to go?"
            />
            </div>
            <button
              onClick={SubmitHandler}
              className="bg-BaseColor hover:bg-BHoverColor text-white font-medium py-3 px-6 rounded-full m-1 transition-all duration-300"
            >
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchTours;
