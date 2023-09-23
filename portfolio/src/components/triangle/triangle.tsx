import React, { FC, Suspense, useRef } from 'react';
import styles from './triangle.module.css';
import { Cone, Decal } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';



interface TriangleProps {
  img: string
}

const Triangle: FC<TriangleProps> = ({img}) => {
  const ref = useRef<any>();
  const texture = useLoader(TextureLoader, img)

  return (
    <>
      <mesh>
        <Cone ref={ref} args={[1, 2, 3]} rotation={[0,3.1,0]}>
          <meshPhongMaterial color="gold" />
          <Decal map={texture} 
            position={[0,-0.5,-0.5]}
            rotation={[311,0,223.05]}
            scale={1}
            />
        </Cone>
      </mesh>
    </>
  )
}

export default Triangle;
