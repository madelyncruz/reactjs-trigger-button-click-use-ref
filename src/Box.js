import React, { useEffect, useRef, useState } from "react";
import Carousel from "./Carousel";
import BoxContext from "./BoxContext";

const Box = () => {
  const [data, setData] = useState({ id: null, value: null });
  const [value, setValue] = useState([]);
  const mainButtonRef = useRef([]);

  useEffect(() => {
    setValue([
      {
        id: "test-1",
        value: {
          text:
            "Vel facilisis volutpat est velit egestas dui id ornare. Et tortor consequat id porta. Vulputate mi sit amet mauris commodo. Pellentesque elit eget gravida cum sociis natoque."
        }
      },
      {
        id: "test-2",
        value: {
          text:
            "Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra."
        }
      },
      {
        id: "test-3",
        value: {
          text:
            "Sapien et ligula ullamcorper malesuada proin libero. Donec enim diam vulputate ut pharetra. Risus viverra adipiscing at in. Turpis in eu mi bibendum neque egestas."
        }
      }
    ]);
  }, [data.id]);

  const onClickHandler = (e) => {
    console.log(e.target.innerText);
    value.map(function (v) {
      if (v.id === e.currentTarget.id) {
        setData(v);
      }
      return false;
    });
  };

  const onCarouselClick = (e, index) => {
    console.log(e.target.innerText);
    if (mainButtonRef.current[index]) {
      mainButtonRef.current[index].click();
    }
  };

  const Buttons = () => {
    return (
      <div style={{ display: "flex", margin: 30, gap: 10 }}>
        {value.length
          ? value.map(function (v, i) {
              let idx = i + 1;
              return (
                <button
                  key={idx}
                  ref={(el) => (mainButtonRef.current[i] = el)}
                  id={`test-${idx}`}
                  onClick={onClickHandler}
                >
                  Main Button {idx}
                </button>
              );
            })
          : null}
      </div>
    );
  };

  const Description = () => {
    if (data.value) {
      return (
        <div style={{ margin: 30, textAlign: "left" }}>
          <p>{data.value.text}</p>
        </div>
      );
    }
  };

  return (
    <BoxContext.Provider
      value={{
        data,
        setData,
        value,
        setValue
      }}
    >
      <Buttons />
      <Description />
      <Carousel clickHandler={onCarouselClick} />
    </BoxContext.Provider>
  );
};

export default Box;
