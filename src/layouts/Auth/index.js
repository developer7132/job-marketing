import React from "react";
import { LoginHeader } from "../../components/LoginHeader";

export const AuthLayout = ({ children }) => {
  return (
    <>
      <LoginHeader></LoginHeader>
      <div>{children}</div>
    </>
  );
};
