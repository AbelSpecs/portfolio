import React, { FC } from 'react';
import styles from './hero.module.css';
import Hoc from '../hoc/hoc';
import { motion } from 'framer-motion';

export const fadeInLeft = {
  hidden: { x: -100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.3,
      duration: 3,
      ease: "easeIn"
    },
  },
};

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  return (
      <section className={`absolute ${styles.heroSection}`}>
        <motion.div variants={fadeInLeft} initial={fadeInLeft.hidden} whileInView={fadeInLeft.show} viewport={{once: true}}>
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
        </motion.div>
      </section>
  )
}

export default Hero


