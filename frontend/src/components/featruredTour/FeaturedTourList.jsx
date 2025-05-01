import React from "react";
import useFetch from "../../hooks/useFetch";
import BASE_URL from "../../utils/config";
import TourCard from "../../shared/TourCard";

const FeaturedTourList = () => {
  const { apiData: featuredToursData, error } = useFetch(
    `${BASE_URL}/tour/featured`
  );

  // Get only the first 4 featured tours
  const limitedTours = featuredToursData?.slice(0, 4);

  return (
    <>
      {error && <h4>{error}</h4>}
      {!error && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {limitedTours?.map((tour) => (
            <div className="" key={tour._id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FeaturedTourList;
