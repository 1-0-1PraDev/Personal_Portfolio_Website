import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import styled from "styled-components";


const Stars = () => {
    const ref = useRef();
  return (
    <group >
        <Points ref={ref}></Points>
    </group>
  )
}

export default Stars;