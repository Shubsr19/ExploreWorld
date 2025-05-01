import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar1 from "../../assets/images/ava-1.jpg";
import avatar2 from "../../assets/images/ava-2.jpg";
import avatar3 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const testimonialsData = [
    {
      pic: avatar1,
      name: "Sarah Johnson",
      location: "New York, USA",
      text: "My experience with ExploreWorld was absolutely incredible! The attention to detail and personalized service made my trip unforgettable. I can't wait to book my next adventure with them.",
      rating: 5,
    },
    {
      pic: avatar2,
      name: "Michael Chen",
      location: "Toronto, Canada",
      text: "ExploreWorld exceeded all my expectations. Their knowledgeable guides and well-planned itineraries made my journey through Asia truly special. Highly recommended!",
      rating: 5,
    },
    {
      pic: avatar3,
      name: "Emma Rodriguez",
      location: "London, UK",
      text: "I've traveled with many companies, but ExploreWorld stands out for their exceptional service and unique experiences. They made my solo trip feel safe and exciting!",
      rating: 4,
    },
    {
      pic: avatar1,
      name: "David Kim",
      location: "Seoul, South Korea",
      text: "The cultural immersion programs offered by ExploreWorld are unmatched. I learned so much about local traditions and made lifelong memories. Thank you!",
      rating: 5,
    },
    {
      pic: avatar3,
      name: "Sophia Patel",
      location: "Mumbai, India",
      text: "ExploreWorld's attention to detail and customer care is remarkable. They handled every aspect of our family vacation perfectly. We'll definitely be back!",
      rating: 5,
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {testimonialsData.map((data, index) => (
        <div className=" py-4 px-6">
          <p>{data.text}</p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-[75px] h-[55px] rounded-md overflow-hidden">
              <img
                src={data.pic}
                className="w-full h-full object-cover rounded-2"
                alt=""
              />
            </div>
            <div>
              <div>
                <h5 className="mb-0 mt-3">{data.name}</h5>
                <p className="text-GrayColor">{data.location}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
