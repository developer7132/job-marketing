import React from "react";

import './Main.scss'


export const MainLayout = ({ children }) => {
  return (
    <>
      <div className="main">
        <div>{children}</div>
      </div>
    </>
  );
};
