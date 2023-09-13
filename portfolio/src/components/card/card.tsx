import React, { FC } from 'react';
import styles from './card.module.css';
import { Card as NextCard, Image, CardBody } from "@nextui-org/react";

interface CardProps {
  title?: string,
  icon: string,
  id: string,
  description?: string, 
  technologies?: string[]
}

const Card: FC<CardProps> = ({title, icon, id, description, technologies}) => {

  const handleMouseMove = (event: any) => {
    const card: HTMLElement = document.querySelector(`#${id}`)!;
    const cardBound = card.getBoundingClientRect();

    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = cardBound.left + cardWidth / 2;
    const centerY = cardBound.top + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateY = -25* mouseX / (cardWidth/2);
    const rotateX = 25* mouseY / (cardHeight/2);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }
  
  const handleMouseLeave = () => {
    const card: HTMLElement = document.querySelector(`#${id}`)!;

    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }
  
  
  return (
    <NextCard id={id} className={`py-4 ${styles.card} ${description  ? "w-96" : "w-56 h-64"}`}
      isHoverable
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      >          
      <CardBody className={`py-2 justify-center ${description ? "items-left" : "items-center"}`}>
        <Image
          alt={title}
          className="object-contain rounded-xl opacity-100"
          src={icon}
          width={description ? 360 : 75} 
        />
        <p className={`mt-10 text-lg font-bold text-gray-300 ${description ? "text-left" : "text-center uppercase"}`}>{title}</p>
        {
          description && 
          <p className='mt-4 text-sm text-gray-300 text-left'>{description}</p>   
        }
        <div className='flex flex-wrap text-gray-300 mt-5 gap-2'>
          {
            technologies &&
            technologies.map((value, index) => {
              return (
                <p key={index}>#{value}</p>
              )
            })
          }
        </div>
      </CardBody>
    </NextCard>


    // <NextCard id={id} className="py-4 border-solid border-2 border-white rounded-xl w-96"
    // isHoverable
    // onMouseMove={handleMouseMove}
    // onMouseLeave={handleMouseLeave}
    // >          
    // <CardBody className='py-2 justify-center items-left'>
    // <Image
    //   alt={name}
    //   className="object-contain rounded-xl opacity-100"
    //   src={icon}
    //   width={360} 
    // />
    // <p className="mt-4 text-lg font-bold text-gray-300 text-left">{name}</p>
    // <p className='mt-4 text-sm text-gray-300 text-left'>{description}</p>
    // <div className='flex flex-wrap text-gray-300 mt-5 gap-2'>
    // {
    //   technologies.map((value, index) => {
    //     return (
    //       <p key={index}>#{value}</p>
    //     )
    //   })
    // }
    // </div>
    // </CardBody>
    // </NextCard>
  )
}

export default Card;
