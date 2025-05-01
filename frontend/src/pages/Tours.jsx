import React, { useEffect, useState } from "react";
import FeaturedTourList from "../components/featruredTour/FeaturedTourList";
import useFetch from "../hooks/useFetch";
import BASE_URL from "../utils/config";
import TourCard from "../shared/TourCard";
import SearchTours from "../components/Search/SearchTours";

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const { apiData: tours, error } = useFetch('/tour');

  useEffect(() => {
    if (tours) {
      const pages = Math.ceil(tours.length / 12);
    setPageCount(pages);
    window.scrollTo(0, 0);
    }
  }, [tours]);

  // Get the current page's tours
  const currentTours = tours?.slice(page * 12, (page + 1) * 12);

  return (
    <div>
      <SearchTours />
      <section className="min-h-screen py-8 px-6 md:px-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentTours?.map((tour) => (
            <div key={tour.id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        <div className="flex pagination items-center justify-center mt-8 gap-3">
          {pageCount > 0 &&
            [...Array(pageCount).keys()].map((number) => (
              <span
                key={number}
                onClick={() => setPage(number)}
                className={page === number ? "active_page" : "spn"}
              >
                {number + 1}
              </span>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Tours;
