import React, { FC } from 'react';
import styles from './hero.module.css';
import Hoc from '../hoc/hoc';

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
      <section className={`absolute top-[120px] z-[1]`}>
        <div>
          <h1 className="mb-4 text-3xl font-extrabold dark:text-white md:text-5xl lg:text-6xl">
            Hi, I'm 
            &nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-sky-400">
              Abel
            </span> 
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          and I'm a developer who loves 3D things!
          </p>
        </div>
      </section>
  )
}

export default Hero


