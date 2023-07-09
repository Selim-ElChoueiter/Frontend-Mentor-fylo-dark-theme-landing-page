import TestimonialCard from "./card";

import Profile1 from "../../../assets/images/profile-1.jpg";
import Profile2 from "../../../assets/images/profile-2.jpg";
import Profile3 from "../../../assets/images/profile-3.jpg";

import QuotationMarks from "../../../assets/images/bg-quotes.png";

const Testimonials = () => {
  const data = [
    {
      image: Profile1,
      name: "Satish Patel",
      job: "Founder & CEO, Huddle",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      image: Profile2,
      name: "Bruce McKenzie",
      job: "Founder & CEO, Huddle",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      image: Profile3,
      name: "Iva Boyd",
      job: "Founder & CEO, Huddle",
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];

  return (
    <div className="testimonial-container">
      <img src={QuotationMarks} alt="quotation-marks" />
      <div className="card-holder">
        {data &&
          data.map((val, index) => <TestimonialCard key={index} {...val} />)}
      </div>
    </div>
  );
};

export default Testimonials;
