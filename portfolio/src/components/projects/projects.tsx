import React, { FC } from 'react';
import styles from './projects.module.css';
import { projects } from '../../text/text';
import { Card as NextCard, Image, CardBody } from "@nextui-org/react";
import Card from '../card/card';


interface ProjectsProps {}

const Projects: FC<ProjectsProps> = () => {
  return (
    <>
      <section className='p-3 mx-4'>
        <p className='mt-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
         My work
        </p>
        <h1 className='mb-4 text-2xl font-extrabold dark:text-white md:text-5xl lg:text-6xl'>
          Projects
        </h1>

        <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
          This section showcases the projects I work on in my free time. Each project
          is different and can go from a simple app to a more complex application. 
        </p>

        <div className='flex flex-wrap justify-center gap-16 mt-10'>
          {
            projects.map(({name, description, icon, id, technologies}, index) => {
              return (
                <Card title={name} description={description} icon={icon} id={id} technologies={technologies} key={index} />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Projects;
