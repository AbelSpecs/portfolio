import './App.css'
import Scene from './components/scene/scene';
import Stars from './components/stars/stars';
import Cube from './components/cube/cube';
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero';
import Loader from './components/loader/loader';
import {NextUIProvider} from "@nextui-org/react";
import Hoc from './components/hoc/hoc';
import { Canvas } from '@react-three/fiber'
import { sections } from './components/module';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';
import { BrowserRouter } from 'react-router-dom';
import {FaRegHandPointer} from 'react-icons/fa'; 
import { motion } from 'framer-motion';



function App() {

  return (
    <BrowserRouter>
      <NextUIProvider>
        <div id='canvas-container' className='justify-center flex flex-wrap'>
          <Navbar/>
          <Hero />
          <Suspense fallback={<Loader/>}>
            <Canvas camera={{zoom: 1}} >
              <Scene isBackground={true}/>
              <Stars/>
              <Cube/>
              <Preload all/>
            </Canvas>
          </Suspense>
          <motion.div className='absolute' 
                      initial={{rotate: 270, scale: 1.4}}
                      animate={{x: [0, 50, 0]}} 
                      transition={{duration: 1, repeat: Infinity, repeatType: 'loop'}} 
                      style={{top: '55%', left: '70%', zIndex: 1, transform: 'rotate(270deg)' }}>
            <FaRegHandPointer/>
          </motion.div>
        </div>
        {
          sections.map(({id , component}, index) => {
            return (
              <Hoc Component={component} id={id} key={index}/>
            )
          })
        }
      </NextUIProvider>
    </BrowserRouter>
  )
}

export default App
