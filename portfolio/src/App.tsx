import { Canvas } from '@react-three/fiber'
import './App.css'
import Scene from './components/scene/scene';
import Stars from './components/stars/stars';
import Cube from './components/cube/cube';
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero';
import {NextUIProvider} from "@nextui-org/react";
import Hoc from './components/hoc/hoc';
import { sections } from './components/module';
import { Suspense } from 'react';
import { Preload } from '@react-three/drei';

function App() {

  return (
    <>
      <NextUIProvider>
        <div id='canvas-container' className='justify-center flex flex-wrap'>
          <Navbar/>
          <Hero />
          <Canvas camera={{zoom: 1}}>
            <Suspense fallback={null}>
              <Scene isBackground={true}/>
              <Stars/>
              <Cube/>
              <Preload all/>
            </Suspense>
          </Canvas>
        </div>
        {
          sections.map(({id , component}, index) => {
            return (
              <Hoc Component={component} id={id} key={index}/>
            )
          })
        }
      </NextUIProvider>
    </>
  )
}

export default App
