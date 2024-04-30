import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../../assets/Images/person1.jpg";
import person2 from "../../assets/Images/person2.jpg";
import person3 from "../../assets/Images/person3.jpg";
import person4 from "../../assets/Images/person4.jpg";
import person5 from "../../assets/Images/person5.jpg";
import "./feedback.css";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial">
      <div className="testimonial-details">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="person-details" key={d.image}>
              <div className="testimonial-img">
                <img src={d.image} />
              </div>

              <div className="testimonial-detail">
                <h3>{d.personname}</h3>
                <h5>{d.place}</h5>
                <p>{d.detail}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
const data = [
  {
    image: person1,
    personname: `Dhanus Kumar`,
    place: `Mysore`,
    detail: `The service was very nice and the emergency service was speed and nice and ICU care was nice the was taken care nicely by staffs and doctors`,
  },
  {
    image: person2,
    personname: `Pooja Poo`,
    place: `Banglore`,
    detail: `The service was very nice and the emergency service was speed and nice and ICU care was nice the was taken care nicely by staffs and doctors`,
  },
  {
    image: person3,
    personname: `Sidhu Darshan`,
    place: `Bhubaneswar`,
    detail: `The service was very nice and the emergency service was speed and nice and ICU care was nice the was taken care nicely by staffs and doctors`,
  },
  {
    image: person4,
    personname: `Twinkle Sahu`,
    place: `Mysore`,
    detail: `The service was very nice and the emergency service was speed and nice and ICU care was nice the was taken care nicely by staffs and doctors`,
  },
  {
    image: person5,
    personname: `Lalita Kumari`,
    place: `Berhampur`,
    detail: `The service was very nice and the emergency service was speed and nice and ICU care was nice the was taken care nicely by staffs and doctors`,
  },
];
