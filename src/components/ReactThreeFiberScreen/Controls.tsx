import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { OrbitControls } from '../../../lib/drei/OrbitControls';

// https://github.com/drcmda/learnwithjason/blob/master/src/App.js

// TODO: Maybe use PanResponder on Canvas to capture all touch events
// Documentation: https://facebook.github.io/react-native/docs/panresponder
// Example code: https://github.com/facebook/react-native/blob/master/RNTester/js/examples/PanResponder/PanResponderExample.js
// Example demo: https://snack.expo.io/@agrcrobles/panresponderexample
// Example demo: https://codesandbox.io/s/keen-ride-j1fut?file=/src/App.js
// Gesture Responder System: https://facebook.github.io/react-native/docs/gesture-responder-system
// Sergey Gavrilyuk - https://twitter.com/Baconbrix/status/1255167450770882560

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
