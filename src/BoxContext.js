import React from "react";

const defaultValue = {
  data: [],
  setData: () => {},
  value: [],
  setValue: () => {}
};

export default React.createContext(defaultValue);
