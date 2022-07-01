import React from "react";

export interface ButtonProps {
  label: string;
}

const MyButton = (props: ButtonProps) => {
  return <button id="test" className="flex bg-red-400">{props.label}</button>;
};

export default MyButton;