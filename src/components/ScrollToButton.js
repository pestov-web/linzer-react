import React from "react";
import { scrollTo } from "../utils/scrollTo";

const ScrollToButton = ({ toId, toRef, duration, children, onClick }) => {
  const handleClick = () => {
    scrollTo({ id: toId, ref: toRef, duration });
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="scroll-to__button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default ScrollToButton;
