import React from 'react';
import CareerForm from '../components/career-form';

export interface CareerMobileSectionProps {}

export default function CareerMobileSection({}: CareerMobileSectionProps) {
  return (
    <section className="careerMobileSection md:hidden">
      <div className="sm:container mx-auto h-full px-5 py-14 md:py-16 xl:py-[104px] text-sm md:text-base md: leading-5 xl:text-lg xl:leading-6 text-white">
        <p className="ml-auto mb-[24px] w-[179px] text-[14px] font-extralight leading-[1.43]">
          Don&rsquo;t miss your opportunity! <br /> Fill out the form right now{' '}
          <br />
          and join our team!
        </p>
        <CareerForm />
      </div>
    </section>
  );
}
