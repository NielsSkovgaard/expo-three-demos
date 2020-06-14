import React from 'react';
import { StyleSheet } from 'react-native';
import { Canvas } from 'react-three-fiber';
import Box from './Box';
import Controls from './Controls';

interface ReactThreeFiberCanvasProps {
  setCardText?: (text: string, color?: string) => void;
}

export default function ReactThreeFiberCanvas({
  setCardText,
}: ReactThreeFiberCanvasProps) {
  return (
    <Canvas style={styles.canvas} camera={{ position: [0, 4, 4] }} shadowMap>
      <ambientLight intensity={0.5} color={0x444444 as any} />
      <pointLight position={[-10, 10, -10]} intensity={1} />
      <spotLight
        position={[30, 30, 30]}
        intensity={0.3}
        angle={0.2}
        penumbra={1}
        castShadow
      />
      <Box
        dimensions={[1, 1, 1]}
        position={[-1, 0, -1]}
        color="red"
        setCardText={setCardText}
        cardTextColor="red"
      />
      <Box
        dimensions={[1, 1, 1]}
        position={[-1, 0, 1]}
        color="blue"
        setCardText={setCardText}
        cardTextColor="blue"
      />
      <Box
        dimensions={[1, 1, 1]}
        position={[1, 0, -1]}
        color="orange"
        setCardText={setCardText}
        cardTextColor="orange"
      />
      <Box
        dimensions={[1, 1, 1]}
        position={[1, 0, 1]}
        color="green"
        setCardText={setCardText}
        cardTextColor="green"
      />
      <gridHelper args={[10, 10]} />
      <axesHelper args={[1000]} />
      <Controls />
    </Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
  },
});
