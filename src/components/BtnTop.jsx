import React, { useState } from "react";

function BtnTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <button
        className="fixed px-4 py-2 bg-black text-white bottom-[20px] right-[20px] text-center z-[20]"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        &#8593;
      </button>
    </div>
  );
}

export default BtnTop;
