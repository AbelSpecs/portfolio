import React, { FC, Suspense, useRef, useState } from 'react';
import styles from './cube.module.css';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';

interface CubeProps {}

const Cube: FC<CubeProps> = () => {
  const ref = useRef<any>();
  const [hover,setHover] = useState(true);

  const handlePointer = () => {
    setHover(prev => !prev);

    document.body.style.cursor = hover ? "pointer" : "auto";
  }

  useFrame((state, delta) => {
    ref.current.position.y = Math.sin(state.clock.elapsedTime);
    ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += delta;
  })

  return (
      <mesh ref={ref} onPointerOver={handlePointer} onPointerOut={handlePointer} onClick={() => {window.location.href = "#about"}}>
        <boxGeometry />
        <meshStandardMaterial color={new Color(0xffffff)}/>
      </mesh>
  )
}

export default Cube;
