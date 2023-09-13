import React, { FC } from 'react';
import styles from './scene.module.css';
import { useThree } from '@react-three/fiber';
import  { Color } from 'three';

interface SceneProps {
  isBackground: boolean
}

const Scene: FC<SceneProps> = ({isBackground}) => {
  const { gl, scene } = useThree();

  if(isBackground){
    gl.setSize( window.innerWidth, window.innerHeight );
    scene.background = new Color(0x212830);
  }
  else{
    gl.setSize( 140, 140 );
    scene.background = new Color('black');
  }
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
    </>
  )
}

export default Scene;
