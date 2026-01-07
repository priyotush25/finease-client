import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
