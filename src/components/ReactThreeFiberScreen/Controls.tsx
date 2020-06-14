import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { OrbitControls } from '../../../lib/drei/OrbitControls';

/**
 * This uses OrbitControls from 'drei' (https://github.com/react-spring/drei).
 * The file was copied to the /lib folder, because it's not possible to import
 * the whole package (since the package has other components that only work on
 * web and would result in an error on startup when running as a mobile app).
 */
const Controls = () => {
  const orbitControlsRef = useRef<any>();

  useFrame(() => {
    orbitControlsRef.current && orbitControlsRef.current.update();
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      autoRotate
      enableRotate={true}
      enablePan={true}
      enableZoom={true}
      enableDamping
      dampingFactor={0.5}
      rotateSpeed={1}
      maxDistance={30}
      minDistance={2}
      maxPolarAngle={Math.PI / 2.25}
    />
  );
};

export default Controls;
