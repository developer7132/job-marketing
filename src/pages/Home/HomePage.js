import React, { useReducer } from "react";
// import { LeftSidebar } from "../../components/LeftSidebar";
// import { Activity } from "../../components/Activity";
import { useHistory } from "react-router-dom";

import "./HomePage.scss";

export const HomePage = () => {
  const history = useHistory()
  function handleClick() {
    
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          dd
        </div>
        <div className="col-md-8">
          dd
        </div>
      </div>
    </div>
  );
};
