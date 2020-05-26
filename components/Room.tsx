﻿﻿import React, { useCallback, useState } from 'react';
import { ReactThreeFiber } from 'react-three-fiber';
import Logger from '../utils/Logger';

export interface RoomProps {
  dimensions?: any,
  position?: ReactThreeFiber.Vector3,
  color?: ReactThreeFiber.Color,
}

interface RoomState {
  color?: ReactThreeFiber.Color; 
}

const Room = ({ dimensions, position, color }: RoomProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onActivation = useCallback((e: any, value: boolean) => {
    e.stopPropagation();
    setIsActive(value);
  }, [setIsActive]);

  const state: RoomState = {
    color: isActive ? 'hotpink' : color,
  };

  return (
    <mesh
      position={position}
      castShadow
      receiveShadow
      onClick={e =>        { Logger.logPointerEvent(e, 'click', true); }}
      onPointerUp={e =>    { Logger.logPointerEvent(e, 'up   ', false); onActivation(e, false); }}
      onPointerDown={e =>  { Logger.logPointerEvent(e, 'down ', false); onActivation(e, true); }}
      onPointerOver={e =>  { Logger.logPointerEvent(e, 'over ', false); }}
      onPointerOut={e =>   { Logger.logPointerEvent(e, 'out  ', false); onActivation(e, false); }}
      onPointerMove={e =>  { Logger.logPointerEvent(e, 'move ', false); }}
      onWheel={e =>        { Logger.logPointerEvent(e, 'wheel', false); }}
      // onPointerEnter={e => { Logger.logPointerEvent(e, 'enter', false); }}
      // onPointerLeave={e => { Logger.logPointerEvent(e, 'leave', true); }}
      onUpdate={self =>    { Logger.logUpdate(self); }}
    >
      <boxGeometry attach="geometry" args={dimensions} />
      <meshStandardMaterial attach="material" color={state.color} roughness={0.4} metalness={0.1} />
    </mesh>
  );
};

export default Room;
