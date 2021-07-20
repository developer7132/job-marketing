import React from "react";
import { MainHeader } from "../../components/MainHeader";
export const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader></MainHeader>
      <div className="main">
        <div>{children}</div>
      </div>
    </>
  );
};
