import React from 'react';
import Section from '../components/section';

export interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <Section id="about">
      <div className="sm: container mx-auto z-10 flex h-full flex-col justify-between text-white ">
        <h2>WHO WE ARE</h2>
        <p>
          a team of enthusiasts who are fully committed to the mission of
          creating unforgettable and extraordinary trips to the most beautiful
          parts of the Carpathians. Our goal is not just to show you the natural
          wonders of the mountains, but to provide you with a deep immersion in
          their magical atmosphere.
        </p>
        <p>
          We believe that nature has the power to inspire, strengthen character
          and provide new perspectives. Therefore, each of our tours is aimed at
          unlocking your potential, enriching your spiritual world and creating
          unforgettable memories.
        </p>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>
          We use methods that are time-tested and proven. Our expert guides with
          in-depth knowledge of the Carpathian landscapes lead you safely
          through the mysteries of these mountains.
        </p>
      </div>
    </Section>
  );
}
