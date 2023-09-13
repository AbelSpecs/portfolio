import React, { FC, MouseEventHandler } from 'react';
import styles from './about.module.css';
import { ocupation } from '../../text/text.js';
import Card from '../card/card.js';


interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <>
      <section className='p-3 mx-4'>
        <p className='mt-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
         Introduction
        </p>
        <h1 className='mb-4 text-2xl font-extrabold dark:text-white md:text-5xl lg:text-6xl'>
          Overview
        </h1>

        <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
          I'm a developer with experience in JavaScript, C# and TypeScript, with
          frameworks like React, Angular and Nodejs, I consider myself a quick learner 
          and lover of bringing new ideas to life!
        </p>

        <div className='flex flex-wrap justify-center gap-16 mt-10'>
          {
            ocupation.map(({title, icon, id}, index) => {
              return (
              
                <Card title={title} icon={icon} key={index} id={id}/>
              
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default About;
