import React from 'react';

export interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export default function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className={`${id} px-5 py-14 md:px-8 md:py-16 xl:p-20`}>
      {children}
    </section>
  );
}
