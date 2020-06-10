import React from 'react';
import { StyleSheet } from 'react-native';
import { Canvas } from 'react-three-fiber';
import Box from './Box';
import Controls from './Controls';
import Floor from './Floor';
import Room from './Room';

interface ReactThreeFiberCanvasProps {
  setCardText?: (text: string, color?: string) => void;
}

export default function ReactThreeFiberCanvas({
  setCardText,
}: ReactThreeFiberCanvasProps) {
  return (
    <Canvas style={styles.canvas} camera={{ position: [0, 5, 10] }} shadowMap>
      <ambientLight intensity={0.5} color={0x444444 as any} />
      <pointLight position={[-10, 10, -10]} intensity={1} />
      <spotLight
        position={[30, 30, 30]}
        intensity={0.3}
        angle={0.2}
        penumbra={1}
        castShadow
      />
      <Floor />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[-2.25, 0, -2.25]}
        color="red"
        setCardText={setCardText}
        cardTextColor="red"
      />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[-2.25, 0, 0]}
        color="purple"
        setCardText={setCardText}
        cardTextColor="purple"
      />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[-2.25, 0, 2.25]}
        color="blue"
        setCardText={setCardText}
        cardTextColor="blue"
      />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[2.25, 0, -2.25]}
        color="orange"
        setCardText={setCardText}
        cardTextColor="orange"
      />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[2.25, 0, 0]}
        color="yellow"
        setCardText={setCardText}
        cardTextColor="yellow"
      />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[2.25, 0, 2.25]}
        color="green"
        setCardText={setCardText}
        cardTextColor="green"
      />
      <Box setCardText={setCardText} />
      <axesHelper args={[1000]} />
      <Controls />
    </Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#485b9a',
  },
});
