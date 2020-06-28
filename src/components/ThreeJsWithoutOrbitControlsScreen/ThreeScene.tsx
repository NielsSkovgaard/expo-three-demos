import React, { Component } from 'react';
import { PanResponderInstance, View } from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  State,
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import { Mesh } from 'three';
// @ts-ignore
import ExpoGraphics from 'expo-graphics';
import ExpoTHREE, { THREE } from 'expo-three';
import CameraHandler from './CameraHandler';
import Globe from './Globe';
import PanResponderUtils from './PanResponderUtils';

export default class ThreeScene extends Component<any, any> {
  private readonly doubleTap: any;
  private readonly panResponder: PanResponderInstance;

  private cameraHandler?: CameraHandler;
  private camera?: THREE.PerspectiveCamera;
  private container: any;
  private frameId: number = 0;
  private globe?: Globe;
  private mesh?: Mesh;
  private renderer?: ExpoTHREE.Renderer;
  private scene?: THREE.Scene;

  constructor(props: any) {
    super(props);
    this.doubleTap = React.createRef();

    this.panResponder = PanResponderUtils.build(
      (event: any) => {
        this.cameraHandler?.handlePanResponderGrant(event);
      },
      (event: any) => {
        this.cameraHandler?.handlePanResponderMove(event);
      },
      (event: any) => {
        this.cameraHandler?.handlePanResponderEnd(event);
      }
    );
  }

  onWindowResize = (event: any) => {
    this.camera!.aspect = window.innerWidth / window.innerHeight;
    this.camera!.updateProjectionMatrix();
    this.renderer!.setSize(window.innerWidth, window.innerHeight);
  };

  onSingleTap = (event: TapGestureHandlerStateChangeEvent): void => {
    if (event.nativeEvent.state === State.ACTIVE) {
      // this.cameraHandler?.onSingleTap(event.nativeEvent);
    }
  };

  onDoubleTap = (event: TapGestureHandlerStateChangeEvent): void => {
    if (event.nativeEvent.state === State.ACTIVE)
      this.cameraHandler?.onDoubleTap();
  };

  onZoomEvent = (event: PinchGestureHandlerGestureEvent): void => {
    const e = PanResponderUtils.transformEvent({ ...event });
    // console.log(e);
    this.cameraHandler?.onZoomEvent(e.nativeEvent);
  };

  // componentWillUnmount() {
  //   this.stop();
  // }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    // TODO: For some reason the globe is not spinning
    if (this.globe?.mesh) {
      this.globe.mesh.rotation.x += 0.01;
      this.globe.mesh.rotation.y += 0.01;
    }
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.cameraHandler!.render();
    this.renderer!.render(this.scene!, this.camera!);
  };

  onContextCreate = async ({ gl, width, height, scale }: any) => {
    this.renderer = new ExpoTHREE.Renderer({ gl });
    this.renderer.setPixelRatio(scale);
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000, 1.0);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 2000);

    this.globe = new Globe(this.scene);
    this.globe.init();
    this.mesh = this.globe.mesh;

    this.cameraHandler = new CameraHandler(
      this.container,
      this.camera,
      this.mesh
    );
  };

  onResize = ({ width, height, scale }: any) => {
    this.camera!.aspect = width / height;
    this.camera!.updateProjectionMatrix();
    this.renderer!.setPixelRatio(scale);
    this.renderer!.setSize(width, height);
  };

  onRender = (delta: number) => {
    this.cameraHandler!.render();
    this.renderer!.render(this.scene!, this.camera!);
  };

  render() {
    return (
      <TapGestureHandler
        onHandlerStateChange={this.onSingleTap}
        waitFor={this.doubleTap}
      >
        <TapGestureHandler
          ref={this.doubleTap}
          onHandlerStateChange={this.onDoubleTap}
          numberOfTaps={2}
        >
          <PinchGestureHandler onGestureEvent={this.onZoomEvent}>
            <View {...this.panResponder.panHandlers} style={{ flex: 1 }}>
              <ExpoGraphics.View
                style={{ flex: 1 }}
                onContextCreate={this.onContextCreate}
                onRender={this.onRender}
                onResize={this.onResize}
                arEnabled={false}
                ref={(container: any) => (this.container = container)}
              />
            </View>
          </PinchGestureHandler>
        </TapGestureHandler>
      </TapGestureHandler>
    );
  }
}
