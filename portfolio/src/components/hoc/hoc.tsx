import React, { FC } from 'react';
import styles from './hoc.module.css';
import { motion } from 'framer-motion';

export const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      },
    },
};


interface HocProps {
  Component: React.FC,
  id: string
}

const Hoc: FC<HocProps> = ({Component, id}) => {
  return (
    <motion.section
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='max-w-7xl mx-auto relative z-0'
      >
        <span id={id}>&nbsp;</span>
        <Component/>

    </motion.section>
  )
}

export default Hoc;
