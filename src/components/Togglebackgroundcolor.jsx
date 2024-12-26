import { useState } from "react";
import "../togglebackground.css";
const Togglebackgroundcolor = () => {
  const [backgroundcolor, setBackgroundcolor] = useState("white");
  const [textcolor, setTextcolor] = useState("#1b1b1b");
  const [buttonstyle, setButtonstyle] = useState("white");
  const handleclick = () => {
    setBackgroundcolor(backgroundcolor == "#1b1b1b" ? "white" : "#1b1b1b");
    setTextcolor(textcolor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtonstyle(backgroundcolor == "white" ? "#1b1b1b" : "white");
  };

  return (
    <div style={{ backgroundColor: backgroundcolor, color: textcolor }}>
      <button
        onClick={handleclick}
        style={{
          backgroundColor: buttonstyle,
          color: textcolor,
          border: `2px solid${textcolor}`,
        }}
      >
        {backgroundcolor == "#1b1b1b" ? "Black Theme" : "white theme"}
      </button>
      <section className="content">
        <h1>
          welcome to A <br />
          Real world...{" "}
        </h1>
      </section>
    </div>
  );
};
export default Togglebackgroundcolor;
