﻿﻿import React from 'react';
import { DoubleSide } from 'three';

const Floor = () => {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[6.5, 6.5, 1, 1]} />
      <meshStandardMaterial attach="material" color="lightblue" side={DoubleSide} />
    </mesh>
  );
};

export default Floor;
