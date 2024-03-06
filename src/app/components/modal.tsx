import React from 'react';

export interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="backdrop z-20 absolute left-0 top-0 w-full h-lvh overscroll-none">
      <div className="modal absolute m-auto left-0 right-0 top-0 w-full max-w-[480px] h-[642px] py-9 px-5">
        {children}
      </div>
    </div>
  );
}
