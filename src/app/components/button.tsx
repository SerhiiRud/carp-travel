import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="py-2.5 px-5 bg-transparent text-center text-sm font-normal tracking-widest text-white rounded"
    />
  );
};

export default Button;
