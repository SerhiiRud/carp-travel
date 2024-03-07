import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="py-1 px-1 bg-transparent text-center text-sm font-normal tracking-widest text-white rounded"
    />
  );
};

export default Button;
