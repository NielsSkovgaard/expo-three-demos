import React, { useCallback, useRef, useState } from 'react';
import { ReactThreeFiber, useFrame } from 'react-three-fiber';

// https://www.digitalocean.com/community/tutorials/react-react-with-threejs

interface BoxProps {
  setCardText?: (text: string) => void;
}

interface BoxState {
  color?: ReactThreeFiber.Color;
  scale?: ReactThreeFiber.Vector3;
}

const Box = ({ setCardText }: BoxProps) => {
  const meshRef = useRef<any>();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  const onHover = useCallback(
    (e: any, value: boolean) => {
      e.stopPropagation();
      setIsHovered(value);
    },
    [setIsHovered]
  );

  const onClick = useCallback(
    (e: any, value: boolean) => {
      e.stopPropagation();
      setIsActive(value);
    },
    [setIsActive]
  );

  const state: BoxState = {
    color: isHovered ? 'hotpink' : 'white',
    scale: isActive ? [1.5, 1.5, 1.5] : [1, 1, 1],
  };

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 1, 0]}
      scale={state.scale}
      castShadow
      receiveShadow
      onClick={e => {
        setCardText?.('box click');
        onClick(e, !isActive);
      }}
      onPointerUp={e => setCardText?.('box up')}
      onPointerDown={e => setCardText?.('box down')}
      onPointerOver={e => {
        setCardText?.('box over');
        onHover(e, true);
      }}
      onPointerOut={e => {
        setCardText?.('box out');
        onHover(e, false);
      }}
      onPointerMove={e => setCardText?.('box move')}
      onWheel={e => setCardText?.('box wheel')}
      // onPointerEnter={e => setCardText?.('box enter')}
      // onPointerLeave={e => setCardText?.('box leave')}
      // onUpdate={self => setCardText?.(`box props have been updated`)}
    >
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={state.color}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
};

export default Box;
