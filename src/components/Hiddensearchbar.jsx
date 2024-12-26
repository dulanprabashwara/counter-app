import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../hiddensearchbar.css";

const Hiddensearchbar = () => {
  const [showinput, setShowinput] = useState(false);
  const [bgcolor, setBgcolor] = useState("white");
  const handleclick = () => {
    if (showinput) {
      setShowinput(fasle);
      setBgcolor("#fff");
    } else {
      setBgcolor("#1a1a1a");
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor: bgcolor }}
      onClick={handleclick}
    >
      {showinput ? (
        <input type="text" placeholder="search..." />
      ) : (
        <FaSearch
          onClick={() => {
            setShowinput(true);
          }}
        />
      )}
    </section>
  );
};
export default Hiddensearchbar;
