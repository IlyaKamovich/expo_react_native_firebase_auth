import React from "react";
import { api } from "../firebase";

const withFirebase = Component => props => {
  return <Component {...props} api={api} />;
};

export { withFirebase };
