import "./testimonials.css";
import { useState } from "react";
const Testimonials = () => {
  const [currentindex, setCurrentindex] = useState(0);
  const testimonials = [
    {
      quote: "I am very happy with the service of the company",
      author: "John Doe",
    },
    {
      quote: " i highly recommend the company",
      author: "john smith",
    },
    {
      quote: "The company is the best in the market",
      author: "bob jonhnson",
    },
  ];
  const handlenextclick = () => {
    setCurrentindex((currentindex + 1) % testimonials.length);
  };
  const handleprevclick = () => {
    setCurrentindex(
      (currentindex + testimonials.length - 1) % testimonials.length
    );
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentindex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentindex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handleprevclick}> prev</button>
        <button onClick={handlenextclick}> next</button>
      </div>
    </div>
  );
};
export default Testimonials;
