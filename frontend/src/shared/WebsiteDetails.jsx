import React from "react";

const WebsiteDetails = () => {
  return (
    <div className="website-details p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        About ExploreWorld
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-BaseColor mb-2">Our Mission</h3>
          <p className="text-gray-200">
            To provide unforgettable travel experiences and make adventure accessible to everyone.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-BaseColor mb-2">Why Choose Us</h3>
          <ul className="list-disc list-inside text-gray-200 space-y-2">
            <li>Expertly curated tours</li>
            <li>Best price guarantee</li>
            <li>24/7 customer support</li>
            <li>Flexible booking options</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium text-BaseColor mb-2">Contact Info</h3>
          <p className="text-gray-200">
            Need help? Reach out to us anytime at support@exploreworld.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDetails; 