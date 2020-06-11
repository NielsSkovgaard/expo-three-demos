﻿import React, { useCallback, useState } from 'react';
import { ReactThreeFiber } from 'react-three-fiber';

export interface RoomProps {
  dimensions?: any;
  position?: ReactThreeFiber.Vector3;
  color?: ReactThreeFiber.Color;
  setCardText?: (text: string, color?: string) => void;
  cardTextColor?: string;
}

interface RoomState {
  color?: ReactThreeFiber.Color;
}

const Room = ({
  dimensions,
  position,
  color,
  setCardText,
  cardTextColor,
}: RoomProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const onActivation = useCallback(
    (e: any, value: boolean) => {
      e.stopPropagation();
      setIsActive(value);
    },
    [setIsActive]
  );

  const state: RoomState = {
    color: isActive ? '#000' : color,
  };

  return (
    <mesh
      position={position}
      castShadow
      receiveShadow
      onClick={e => setCardText?.('click', cardTextColor)}
      onPointerUp={e => {
        setCardText?.('up', cardTextColor);
        onActivation(e, false);
      }}
      onPointerDown={e => {
        setCardText?.('down', cardTextColor);
        onActivation(e, true);
      }}
      onPointerOver={e => {
        setCardText?.('over', cardTextColor);
      }}
      onPointerOut={e => {
        setCardText?.('out', cardTextColor);
        onActivation(e, false);
      }}
      onPointerMove={e => setCardText?.('move', cardTextColor)}
      onWheel={e => setCardText?.('wheel', cardTextColor)}
      // onPointerEnter={e => setCardText?.('enter', elementName)}
      // onPointerLeave={e => setCardText?.('leave', elementName)}
      // onUpdate={self => setCardText?.('props have been updated')}
    >
      <boxGeometry attach="geometry" args={dimensions} />
      <meshStandardMaterial
        attach="material"
        color={state.color}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
};

export default Room;