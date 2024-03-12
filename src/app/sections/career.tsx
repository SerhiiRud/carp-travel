import React from 'react';
import Section from '../components/section';
import CareerForm from '../components/career-form';

export interface CareerProps {}

export default function Career({}: CareerProps) {
  return (
    <Section id="career">
      {/* <div className="mx-auto z-10 flex h-full flex-col justify-between md:grid md:auto-rows-auto md:grid-cols-[auto,170px] md:gap-x-[12px] xl:grid-cols-[50%,50%]"> */}
      <div className="mx-auto z-10 flex h-full flex-col justify-between md:grid md:auto-rows-auto md:grid-cols-3  md:gap-x-[28px] xl:grid-cols-[50%,50%]">
        <h2 className="mb-6 self-start text-4xl font-thin ">
          <span className="font-thin">CHOOSE </span>US
        </h2>
        <p className="mb-5 text-sm max-w-[180px] md:col-start-3  md:mb-4 md:max-w-none xl:max-w-[292px]">
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>

        <p
          className="ml-auto mb-[36px] w-[179px] text-[30px] font-extralight
         xl:text-[36px] xl:leading-[1.08] md:col-start-1 md:row-start-2"
        >
          WHY US?
        </p>

        <ul className="list-none text-sm font-normal flex flex-col gap-[16px] mr-auto w-[181px] text-end md:w-full md:gap-[24px] md:col-start-1 md:row-start-4">
          <li className="xl:flex xl:gap-[24px] xl:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43]  
            md:text-[16px] md:leading-[1.25]
            xl:mb-0 xl:text-[18px] xl:leading-[1.33]"
            >
              Professional development
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            xl:w-[285px] xl:text-start xl:leading-[2]"
            >
              We offer growth opportunities and a creative environment to
              nurture your talents.
            </p>
          </li>
          <li className="xl:flex xl:gap-[24px] xl:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43] font-400 
            md:text-[16px] md:leading-[1.25]
            xl:mb-0 xl:text-[18px] xl:leading-[1.33]"
            >
              Teamwork
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            xl:w-[285px] xl:text-start xl:leading-[2]"
            >
              Join our close-knit family, where support and inspiration abound.
            </p>
          </li>
          <li className="xl:flex xl:gap-[24px] xl:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43] font-400 
            md:mb-[28px] md:text-[16px] md:leading-[1.25]
            xl:mb-0 xl:text-[18px] xl:leading-[1.33]"
            >
              Stimulating work environment
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            xl:w-[285px] xl:text-start xl:leading-[2]"
            >
              Flexibility and remote options for a comfortable experience.
            </p>
          </li>
          <li className="xl:flex xl:gap-[24px] xl:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43] font-400 
            md:text-[16px] md:leading-[1.25]
            xl:mb-0 xl:text-[18px] xl:leading-[1.33]"
            >
              Exciting challenges
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            xl:w-[285px] xl:text-start xl:leading-[2]"
            >
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </p>
          </li>
        </ul>
        <p className="max-md:hidden text-[13px] font-extralight leading-[1.54] xl:text-[18px] xl:leading-[1.33] md:col-start-2 md:row-start-3">
          Don&rsquo;t miss your opportunity! <br /> Fill out the form right now{' '}
          <br />
          and join our team!
        </p>

        <div className="sm:hidden md:block md:col-start-2 md:col-span-2 md:row-start-4">
          <CareerForm />
        </div>
      </div>
    </Section>
  );
}
