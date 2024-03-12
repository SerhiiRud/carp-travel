import React from 'react';
import Section from '../components/section';
import CareerForm from '../components/career-form';

export interface CareerProps {}

export default function Career({}: CareerProps) {
  return (
    <Section id="career">
      <div className="relative z-10  md:flex md:h-full md:flex-col md:justify-between py-[56px] text-sm md:py-[64px] md:text-base md:leading-5 xl:py-[104px] xl:text-lg xl:leading-6">
        <h2 className="relative mb-6 text-[40px] uppercase  md:col-start-1 md:row-start-1 md:mb-[75px]  md:self-start md:text-[67px] md:leading-[81px] xl:mb-[28px] xl:text-[98px] xl:leading-[119px]">
          <span className="font-thin">CHOOSE </span>US
        </h2>
        <p
          className="mb-[36px] ml-auto w-[179px] text-sm font-extralight leading-[1.43] 
        md:col-start-6 md:col-span-1 md:row-start-2 md:row-span-2 md:mb-0 md:w-full md:text-[13px] md:leading-[1.54] 
        lg:col-start-7 lg:col-span-1 lg:row-start-2 lg:row-span-2 lg:text-[18px] lg:leading-[1.33]"
        >
          Your chance to join our passionate team in Carpathian tourism. Seeking
          talented professionals to share our common mission.
        </p>

        <p
          className="ml-auto mb-[36px] w-[179px] text-[30px] font-extralight
        md:col-start-1 md:col-span-1 md:row-start-5 md:row-span-1 md:w-full md:m-0 md:text-right 
        lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-1 lg:text-[36px] lg:leading-[1.08]"
        >
          WHY US?
        </p>

        <ul
          className="list-none text-sm font-normal flex flex-col gap-[16px] mr-auto w-[181px] text-end 
        md:col-start-1 md:col-span-1 md:row-start-7 md:row-span-1 md:w-full md:gap-[24px] 
        lg:col-start-1 lg:col-span-3 lg:row-start-6 lg:row-span-3"
        >
          <li className="lg:flex lg:gap-[24px] lg:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43]  
            md:text-[16px] md:leading-[1.25]
            lg:mb-0 lg:text-[18px] lg:leading-[1.33]"
            >
              Professional development
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            lg:w-[285px] lg:text-start lg:leading-[2]"
            >
              We offer growth opportunities and a creative environment to
              nurture your talents.
            </p>
          </li>
          <li className="lg:flex lg:gap-[24px] lg:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43] font-400 
            md:text-[16px] md:leading-[1.25]
            lg:mb-0 lg:text-[18px] lg:leading-[1.33]"
            >
              Teamwork
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            lg:w-[285px] lg:text-start lg:leading-[2]"
            >
              Join our close-knit family, where support and inspiration abound.
            </p>
          </li>
          <li className="lg:flex lg:gap-[24px] lg:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43] font-400 
            md:mb-[28px] md:text-[16px] md:leading-[1.25]
            lg:mb-0 lg:text-[18px] lg:leading-[1.33]"
            >
              Stimulating work environment
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            lg:w-[285px] lg:text-start lg:leading-[2]"
            >
              Flexibility and remote options for a comfortable experience.
            </p>
          </li>
          <li className="lg:flex lg:gap-[24px] lg:justify-end">
            <p
              className="mb-[8px] text-[14px] leading-[1.43] font-400 
            md:text-[16px] md:leading-[1.25]
            lg:mb-0 lg:text-[18px] lg:leading-[1.33]"
            >
              Exciting challenges
            </p>
            <p
              className="text-[12px] font-extralight leading-[1.67] 
            lg:w-[285px] lg:text-start lg:leading-[2]"
            >
              Unleash your potential through unforgettable projects showcasing
              Carpathian beauty.
            </p>
          </li>
        </ul>
        <p
          className="max-md:hidden text-[13px] font-extralight leading-[1.54] 
        md:col-start-3 md:col-span-2 md:row-start-7 md:row-span-1 
        lg:col-start-5 lg:col-span-1 lg:row-start-4 lg:row-span-1 lg:text-[18px] lg:leading-[1.33]"
        >
          Don&rsquo;t miss your opportunity! <br /> Fill out the form right now{' '}
          <br />
          and join our team!
        </p>

        <div
          className="md:col-start-3 md:col-span-4 md:row-start-9 md:row-span-1 
        lg:col-start-5 lg:col-span-3 lg:row-start-7 lg:row-span-1"
        >
          <div className="sm:hidden">
            <CareerForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
