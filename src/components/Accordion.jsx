import { useState } from "react";
import "../accordion.css";
const Accordion = ({ title, content }) => {
  const [isactive, setIsactive] = useState(false);

  return (
    <section className="accordion-card" key={Math.random()}>
      <div className="header" onClick={() => setIsactive(!isactive)}>
        <div>{title}</div>
        <p className="icon">{isactive ? "-" : "+"}</p>
      </div>
      <div className="content">
        {isactive && <p className="card-info">{content}</p>}
      </div>
    </section>
  );
};
export default Accordion;
