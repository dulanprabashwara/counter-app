import React from "react";
import Counter from "./components/counter";
import { useState } from "react";
import Todo from "./components/Todo";
import Meals from "./components/Meals";
import Calculator from "./components/Calculator";
import Togglebackgroundcolor from "./components/Togglebackgroundcolor";
import Hiddensearchbar from "./components/hiddensearchbar";
import Testimonials from "./components/Testimonials";
import { accordionData } from "./utils/content";
import Accordion from "./components/Accordion";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      <Counter />
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <Togglebackgroundcolor /> */}
      {/* <Hiddensearchbar /> */}
      {/* <Testimonials /> */}
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
      {/* <Form /> */}
    </div>
  );
};

export default App;
