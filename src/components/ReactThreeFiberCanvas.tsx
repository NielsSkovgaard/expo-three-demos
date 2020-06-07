import React from 'react';
import { StyleSheet } from 'react-native';
import { Canvas } from 'react-three-fiber';
import Box from './Box';
import Controls from './Controls';
import Floor from './Floor';
import Room from './Room';

export default function ReactThreeFiberCanvas() {
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
        color="purple"
      />
      <Room dimensions={[2, 0.1, 2]} position={[-2.25, 0, 0]} color="maroon" />
      <Room dimensions={[2, 0.1, 2]} position={[-2.25, 0, 2.25]} color="blue" />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[2.25, 0, -2.25]}
        color="maroon"
      />
      <Room dimensions={[2, 0.1, 2]} position={[2.25, 0, 0]} color="purple" />
      <Room
        dimensions={[2, 0.1, 2]}
        position={[2.25, 0, 2.25]}
        color="lightgreen"
      />
      <Box />
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
