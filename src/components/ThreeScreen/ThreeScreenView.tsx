import React, { useEffect, useState } from 'react';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import * as THREE from 'three';
import { Renderer } from 'expo-three';
import OrbitControlsView from 'expo-three-orbit-controls';

export default function ThreeScreenView() {
  const [camera, setCamera] = useState<THREE.Camera | null>(null);

  let timeout: number;

  useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const onContextCreate = async (gl: ExpoWebGLRenderingContext) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl;
    const sceneColor = 0x6ad6f0;

    // Create a WebGLRenderer without a DOM element
    const renderer = new Renderer({ gl });
    renderer.setSize(width, height);
    renderer.setClearColor(sceneColor);

    const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 1000);
    camera.position.set(2, 5, 5);

    setCamera(camera);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(sceneColor, 1, 10000);
    scene.add(new THREE.GridHelper(10, 10));

    const ambientLight = new THREE.AmbientLight(0x101010);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 1000, 1);
    pointLight.position.set(0, 200, 200);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.5);
    spotLight.position.set(0, 500, 100);
    spotLight.lookAt(scene.position);
    scene.add(spotLight);

    const cube = new THREE.Mesh(
      new THREE.BoxBufferGeometry(1.0, 1.0, 1.0),
      new THREE.MeshStandardMaterial()
    );
    scene.add(cube);

    camera.lookAt(cube.position);

    function update() {
      cube.rotation.y += 0.05;
      cube.rotation.x += 0.025;
    }

    // Setup an animation loop
    const render = () => {
      timeout = requestAnimationFrame(render);
      update();
      renderer.render(scene, camera);

      // ref.current.getControls()?.update();
      gl.endFrameEXP();
    };
    render();
  };

  return (
    <OrbitControlsView style={{ flex: 1 }} camera={camera}>
      <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} key="d" />
    </OrbitControlsView>
  );
}
