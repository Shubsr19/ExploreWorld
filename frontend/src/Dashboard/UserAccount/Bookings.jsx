import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import BookingCard from "../../shared/BookingCard";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Get bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    // Filter bookings for current user
    const userBookings = storedBookings.filter(booking => booking.userId === user._id);
    setBookings(userBookings);
  }, [user._id]);

  return (
    <div className="py-8">
      <div className="flex flex-col gap-5">
        <table className="w-full table-auto text-xs md:text-sm gap-4 border-collapse border">
          <thead className="w-full py-2">
            <tr>
              <th className="tableData">Tour</th>
              <th className="hidden md:block tableData">Persons</th>
              <th className="tableData">Booked for</th>
              <th className="tableData">Price</th>
              <th></th>
            </tr>
          </thead>
          {bookings?.map((booking) => (
            <BookingCard booking={booking} key={booking.id} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
