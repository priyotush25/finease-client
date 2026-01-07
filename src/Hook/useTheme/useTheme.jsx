import React, { useContext } from "react";
import ThemeContext from "../../Context/ThemeContext/ThemeContext";

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};

export default useTheme;
