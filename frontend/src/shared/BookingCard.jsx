import React from "react";
import { toast } from "react-toastify";

const BookingCard = ({ booking }) => {
  const { tourName, totalPrice, maxGroupSize, date, id } = booking;

  const confirmDelete = async () => {
    const result = window.confirm(
      "Are you sure you want to delete this booking?"
    );
    if (result) {
      deleteBooking();
    }
  };

  const deleteBooking = () => {
    try {
      // Get current bookings from localStorage
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      
      // Filter out the booking to be deleted
      const updatedBookings = bookings.filter(booking => booking.id !== id);
      
      // Save updated bookings back to localStorage
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      
      // Show success message and reload the page
      toast.success("Booking cancelled successfully");
      window.location.reload();
    } catch (err) {
      toast.error("Error cancelling booking");
    }
  };

  return (
    <>
      <tbody className="rounded overflow-hidden  py-8 px-3 bg-gray-100 shadow-lg">
        <tr className="w-full text-center overflow-hidden">
          <td className="tableData text-start">{tourName}</td>
          <td className="hidden md:table-cell tableData">{maxGroupSize}</td>
          <td>{date}</td>
          <td>{totalPrice}</td>
          <td>
            <button
              onClick={confirmDelete}
              className="block md:hidden noCbtn bg-black my-2 mx-2 hover:bg-gray-900 "
            >
              X
            </button>
            <button
              onClick={confirmDelete}
              className="hidden md:block noCbtn bg-black my-2 mx-2 hover:bg-gray-900 "
            >
              Cancel Booking
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default BookingCard;
