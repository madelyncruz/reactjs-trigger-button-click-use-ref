import React, { useRef, useState } from "react";

const Result = () => {
  const [result, setResult] = useState(null);
  const buttonRef = useRef(null);

  const onMainButtonClick = (e) => {
    setResult("Lorem ipsum dolor sit amet.");
  };

  const onCarouselButtonClick = (e) => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  };

  const onClear = (e) => {
    setResult();
  };

  return (
    <div
      style={{ borderBottom: "1px solid #ccc", margin: 30, paddingBottom: 30 }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: 10 }}>
        <strong>Expected result:</strong>
        <button ref={buttonRef} onClick={onMainButtonClick}>
          Main Button
        </button>
        <button onClick={onCarouselButtonClick}>Carousel Button</button>
        {result ? <button onClick={onClear}>Clear</button> : null}
      </div>
      {result ? (
        <p style={{ marginBottom: 0, marginTop: 30, textAlign: "left" }}>
          {result}
        </p>
      ) : null}
    </div>
  );
};

export default Result;
