import React from "react";

type variantChoice = {
 [key:string]:string;
}

export interface ButtonProps {
  children: React.ReactNode | React.ReactNode[];
  variant: string; 
}

function Styles(variant:string){
  const data:variantChoice = {
    "border-gradient":"border-gradient before:p-[2px] border-0"
  }

  return data[variant];
}

function Button({ children, variant }: ButtonProps & JSX.IntrinsicElements["button"]) {
  return (
    <button className={`rounded-full before:rounded-full px-2 border-2 border-white/80 inline-flex text-center transition-all hover:-translate-y-1 ${Styles(variant)}`}>
      <span className="flex items-center justify-center space-x-2 px-5 py-2">{children}</span>
    </button>
  )
};

export { Button };
