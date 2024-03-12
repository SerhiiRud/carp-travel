import React from 'react';
import Section from '../components/section';

export interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <Section id="about">
      <div className="mx-auto z-10 flex h-full flex-col justify-between md:grid md:auto-rows-auto md:grid-cols-[auto,220px] md:gap-x-[24px] xl:grid-cols-[50%,50%]">
        <h2 className="mb-6 self-start text-4xl font-thin md:col-start-1 md:row-start-1 md:text-[67px] md:leading-[81px] xl:text-[98px] xl:tracking-tight xl:leading-none">
          WHO <span className="font-medium">WE ARE</span>
        </h2>
        <p className="mb-5 text-sm max-w-[180px] md:col-start-2 md:row-start-1 md:mb-4 md:max-w-none xl:max-w-[292px]">
          a team of enthusiasts{' '}
          <span className="font-extralight">
            who are fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </span>
        </p>
        <p className="mb-10 text-sm max-w-[180px] md:mb-0 md:max-w-none xl:max-w-[292px] row-start-2 md:col-start-2 md:self-end">
          We believe{' '}
          <span className="font-extralight">
            that nature has the power to inspire, strengthen character and
            provide new perspectives. Therefore, each of our tours is aimed at
            unlocking your potential, enriching your spiritual world and
            creating unforgettable memories.
          </span>
        </p>
        <p className="mb-10 md:col-start-1 md:row-start-2 md:mb-0 md:self-end xl:col-start-2 xl:row-start-3 xl:ml-auto ">
          <span className="ml-auto mr-5 block w-fit  md:ml-0">
            FROM VACATIONERS
            <br />
          </span>
          <span className="block ml-auto w-fit md:ml-5 xl:ml-[100px] ">
            TO ACTIVE TRAVELERS
            <br />
          </span>
          <span className="block ml-auto w-fit font-extralight md:mb-0 md:ml-0 xl:tracking-[0.125em]">
            we have a tour for everyone.
          </span>
        </p>
        <p className="font-extralight md: ml-auto md:col-span-2 md:col-start-1 md:row-start-3 md:mb-0 md:max-w-[463px]  md:self-end md:pt-16 xl:col-span-1 xl:max-w-none">
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </Section>
  );
}
