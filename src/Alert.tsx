import React from "react";

interface Props {
  children: string;
}

const Alert = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Alert;
