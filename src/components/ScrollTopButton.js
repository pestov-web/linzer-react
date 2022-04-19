import React from "react";
import { scrollTo } from "../utils/scrollTo";
import { FaAngleUp } from "react-icons/fa";

const ScrollTopButton = ({ toId, toRef, duration, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      className={
        visible
          ? "scroll-top__button scroll-top__button_visible"
          : "scroll-top__button"
      }
      onClick={handleClick}
    >
      <FaAngleUp className="scroll-top__button-ico" />
    </button>
  );
};

export default ScrollTopButton;
