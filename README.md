# Demos for Expo and Three.js

The purpose of these demos is to set up a React Native app with a 3D scene. 🧊🚀

It should be cross-platform (mobile apps and [web](https://github.com/necolas/react-native-web)) and support touch and mouse input.

Technology stack: [Expo](https://expo.io/), [Three.js](https://threejs.org/), [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls), and [React-Three-Fiber](https://github.com/react-spring/react-three-fiber) (optional).

**PRs are much appreciated to help make the demos work 100% on all platforms.** 💪😊

## Inspiration

These links serve as inspiration for the demos:
- [Twitter - App by Shopify that uses React-Three-Fiber and OrbitControls](https://twitter.com/jmwind/status/1255101384338391040)
- [Code example - using React Native with "basic" Three.js and OrbitControls](https://github.com/expo/expo/issues/7502#issuecomment-606389791) (click the arrow to see the code)

## Demos in the App

The app has two demos, each using different technologies to set up the 3D scene.

**Three.js demo**
- This uses [expo-three-orbit-controls](https://github.com/EvanBacon/expo-three-orbit-controls), which was recently upgraded to version 2. As mentioned on that page, the package has some limitations, including some known bugs, plus it uses [PanResponder](https://reactnative.dev/docs/panresponder) instead of [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/).
- The demo is almost identical to the [expo-three-orbit-controls example](https://github.com/EvanBacon/expo-three-orbit-controls/tree/master/example), which uses "standard" Three.js functionality.
- Status:
    - Web:
        - Single touch/mouse input to orbit around the scene works. ✔️
        - Two-finger gestures e.g. pinch to zoom doesn't work yet. ❌
    - Mobile apps:
        - Single touch/mouse input to orbit around the scene works. ✔️
        - Two-finger gestures e.g. pinch to zoom doesn't work yet. ❌

**React-Three-Fiber demo**
- This demo uses [React-Three-Fiber](https://github.com/react-spring/react-three-fiber) "on top" of Three.js.
- It uses the OrbitControls helper from the [drei](https://github.com/react-spring/drei) package (only that file is copied into this repository, because adding the whole package as dependency will make the app crash on non-web platforms).
- Status:
    - Web: Both touch and mouse input is working 100%. ✔️
    - Mobile apps: Neither touch nor mouse input is working yet. ❌