import React, { FC, MouseEventHandler } from 'react';
import styles from './about.module.css';
import { ocupation } from '../../text/text.js';
import Card from '../card/card.js';
import { motion } from 'framer-motion';
import { fadeInLeft } from '../hero/hero.js';

export const fadeInRight = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      delay: 0.3,
      duration: 3,
      ease: "easeOut"
    },
  },
};


interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div 
    >
      <section className='p-3 mx-4'>
        <p className='mt-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
         Introduction
        </p>
        <h1 className='mb-4 text-2xl font-extrabold dark:text-white md:text-5xl lg:text-6xl'>
          Overview
        </h1>

        <motion.p variants={fadeInLeft} initial={fadeInLeft.hidden} whileInView={fadeInLeft.show} viewport={{once: true}} className={`text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 ${styles.justify}`}>
          I'm a developer with experience in JavaScript, C# and TypeScript, with
          frameworks like React, Angular and Nodejs, I consider myself a responsable,
          quick learner, I practice a little everyday to eventually become very powerfull
        </motion.p>

        <motion.div variants={fadeInRight} initial={fadeInRight.hidden} whileInView={fadeInRight.show} viewport={{once: true}} className='flex flex-wrap justify-center gap-16 mt-10'>
          {
            ocupation.map(({title, icon, id}, index) => {
              return (
              
                <Card title={title} icon={icon} key={index} id={id}/>
              
              )
            })
          }
        </motion.div>
      </section>
    </div>
  )
}

export default About;
