import React, { useContext } from "react";

import BoxContext from "./BoxContext";

const Carousel = ({ clickHandler }) => {
  const { value } = useContext(BoxContext);

  return (
    <div
      style={{
        borderTop: "1px solid #ccc",
        display: "flex",
        margin: 30,
        paddingTop: 30,
        gap: 10
      }}
    >
      {value.length
        ? value.map(function (v, i) {
            let idx = i + 1;
            return (
              <button key={idx} onClick={(el) => clickHandler(el, i)}>
                Carousel button {idx}
              </button>
            );
          })
        : null}
    </div>
  );
};

export default Carousel;
