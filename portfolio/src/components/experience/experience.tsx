import React, { FC } from 'react';
import styles from './experience.module.css';
import { Card as NextCard, CardBody, CardHeader } from '@nextui-org/react';
import { experience } from '../../text/text';
import { technologies } from '../../text/text';
import { Canvas } from '@react-three/fiber';
import Scene from '../scene/scene';
import { CameraControls } from '@react-three/drei';
import Triangle from '../triangle/triangle';

interface CardProps {
  title: string,
  place: string,
  text: { activity: string }[]
}

const Card: FC<CardProps> = ({title, place, text}) => {

  return (
    <NextCard className={`py-4 w-96 h-64 border-solid border-b-2 rounded-b border-white ${styles.card}`}>    
      <CardHeader className="justify-between">
        <div className="flex gap-5 justify-center pl-4">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h5 className="text-xl font-bold leading-none text-gray-300">{title}</h5>
            <h5 className="text-small tracking-tight text-gray-400">{place}</h5>
          </div>
        </div>
      </CardHeader>      
      <CardBody className='py-2 justify-start items-start'>
        {
          text.map(( {activity}, index ) => {
            return (
              
                <li key={index} className='text-gray-200 pl-2'>
                  {activity}
                </li>
              
            )
          })
        }
      </CardBody>
    </NextCard>
  )
}

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => {
  const isBackground = false;

  return (
    <>
      <div>
        <p className='mt-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400'>
          What I have done
        </p>
        <h1 className='mb-4 text-2xl font-extrabold dark:text-white md:text-5xl lg:text-6xl'>
          Work Experience
        </h1>
      </div>
      <div className='flex flex-wrap justify-center gap-3 mt-7 mb-5'>
        {
          experience.map(({title, place, text}, index) => {
            return (
              <Card title={title} place={place} text={text} key={index} />
            )
          })
        }
      </div>
      <div className={`flex flex-wrap justify-center mt-7 mb-5 ${styles.techs}`}>
        {
          technologies.map(({img}, index) => {
            return (
              <div className='ml-5 w-36' key={index}>
                <Canvas camera={{zoom: 3}}>
                  <Scene isBackground={isBackground}/>
                  <CameraControls truckSpeed={0} dollySpeed={0} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
                  <Triangle img={img}/>
                </Canvas>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Experience;
