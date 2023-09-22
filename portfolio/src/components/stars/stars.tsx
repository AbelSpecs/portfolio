import React, { FC, Suspense, useRef } from 'react';
import styles from './stars.module.css';
import { useFrame } from '@react-three/fiber';
import { Stars as Star } from '@react-three/drei';


interface StarsProps {
}

const Stars: FC<StarsProps> = () => {
  const ref = useRef<any>();
  // const ref2 = useRef<any>();
  
  useFrame((_state, delta) => {
    
    ref.current.rotation.y -= delta / 4;
    // ref2.current.position.x = -90 * Math.sin(state.clock.elapsedTime);
    // ref2.current.position.y = 40 * Math.sin(state.clock.elapsedTime);
    // ref2.current.position.z =  50 * Math.cos(state.clock.elapsedTime);
  })

  return (
    <group rotation={[0, 0, 4]} >
      {/* <Sphere ref={ref2} args={[0.1]}>
        <meshMatcapMaterial color='white' />
        <Sparkles count={1000} scale={1} size={1} speed={1} noise={2} />
      </Sphere> */}
      <Star radius={150} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} ref={ref}/>
    </group>
  )
}

export default Stars;
