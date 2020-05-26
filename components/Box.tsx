﻿﻿import React, { useCallback, useRef, useState } from 'react';
import { ReactThreeFiber, useFrame } from 'react-three-fiber';
import Logger from '../utils/Logger';

// https://www.digitalocean.com/community/tutorials/react-react-with-threejs

interface BoxState {
  color?: ReactThreeFiber.Color,
  scale?: ReactThreeFiber.Vector3,
}

const Box = () => {
  const ref = useRef<any>();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onHover = useCallback((e: any, value: boolean) => {
    e.stopPropagation();
    setIsHovered(value);
  }, [setIsHovered]);

  const onClick = useCallback((e: any, value: boolean) => {
    e.stopPropagation();
    setIsActive(value);
  }, [setIsActive]);

  const state: BoxState = {
    color: isHovered ? 'hotpink' : 'white',
    scale: isActive ? [1.5, 1.5, 1.5] : [1, 1, 1],
  };

  useFrame(() => {
    ref.current && void (ref.current.rotation.x += 0.01, ref.current.rotation.y += 0.01);
  });

  return (
    <mesh
      ref={ref}
      position={[0, 1, 0]}
      scale={state.scale}
      castShadow
      receiveShadow
      onClick={e =>        { Logger.logPointerEvent(e, 'click', true); onClick(e, !isActive); }}
      onPointerUp={e =>    { Logger.logPointerEvent(e, 'up   ', false); }}
      onPointerDown={e =>  { Logger.logPointerEvent(e, 'down ', false); }}
      onPointerOver={e =>  { Logger.logPointerEvent(e, 'over ', false); onHover(e, true); }}
      onPointerOut={e =>   { Logger.logPointerEvent(e, 'out  ', false); onHover(e, false); }}
      onPointerMove={e =>  { Logger.logPointerEvent(e, 'move ', false); }}
      onWheel={e =>        { Logger.logPointerEvent(e, 'wheel', false); }}
      // onPointerEnter={e => { Logger.logPointerEvent(e, 'enter', false); }}
      // onPointerLeave={e => { Logger.logPointerEvent(e, 'leave', true); }}
      onUpdate={self =>    { Logger.logUpdate(self); }}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={state.color} roughness={0.4} metalness={0.1} />
    </mesh>
  );
};

export default Box;
