# Demos for Expo and Three.js

The purpose of these demos is to set up a React Native app with a 3D scene. 🧊🚀

It should be cross-platform (mobile apps and [web](https://github.com/necolas/react-native-web)) and support mouse and touch input.

Technology stack: [Expo](https://expo.io/), [Three.js](https://threejs.org/), [OrbitControls](https://threejs.org/docs/#examples/en/controls/OrbitControls), and [React-Three-Fiber](https://github.com/react-spring/react-three-fiber) (optional).

**PRs are much appreciated to help make the demos work 100% on all platforms.** 💪😊

## Inspiration

These links serve as inspiration for the demos:
- [Twitter - App by Shopify that uses React-Three-Fiber and OrbitControls](https://twitter.com/jmwind/status/1255101384338391040)
- [Code example - using React Native with "standard" Three.js and OrbitControls](https://github.com/expo/expo/issues/7502#issuecomment-606389791) (click the arrow to see the code)
- [Code example - using React Native with "standard" Three.js (mouse and touch gestures without OrbitControls)](https://github.com/cryslub/history-expo)

## OrbitControls - Mouse and Touch Gestures

OrbitControls defines the mouse and touch gestures that will result in the following actions:

- **Orbit:** left mouse / touch: one-finger move
- **Zoom:** middle mouse, or mouse-wheel / touch: two-finger spread or squish
- **Pan:** right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

Therefore, these are the expected outcomes in the demos in the app. For each demo is listed the test results.

## Demos in the App (with Test Results)

The app has two demos, each using different technologies to set up the 3D scene. Screenshots below.

### Three.js demo

- This uses [expo-three-orbit-controls](https://github.com/EvanBacon/expo-three-orbit-controls), which was recently upgraded to version 2. As mentioned on that page, the package has some limitations, including some known bugs, plus it uses [PanResponder](https://reactnative.dev/docs/panresponder) instead of [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/).
- The demo is almost identical to the [expo-three-orbit-controls example](https://github.com/EvanBacon/expo-three-orbit-controls/tree/master/example), which uses "standard" Three.js functionality.
- Test results:
    - **Web + Mouse:** Orbit: ✔️. Zoom: ✔️. Pan: ❌.
    - **Web + Touch:** Orbit (works, but bad performance): ⚠️. Zoom: ❌. Pan: ❌.
    - **Mobile + Mouse:** Orbit: ✔️. Zoom: ❌. Pan: ❌.
    - **Mobile + Touch:** Orbit: ✔️. Zoom: ❌. Pan: ❌.

### Three.js demo (without OrbitControls)

- This demo supports mouse and touch input without OrbitControls.
- It's based on [GitHub: history-expo](https://github.com/cryslub/history-expo), which seems to be based on [GitHub: expo-three-template](https://github.com/EvanBacon/expo-three-template/blob/master/window/Touches.js).
- Work in progress.

### React-Three-Fiber demo

- This demo uses [React-Three-Fiber](https://github.com/react-spring/react-three-fiber) "on top" of Three.js.
- It uses the OrbitControls helper from the [drei](https://github.com/react-spring/drei) package (only that file is copied into this repository, because adding the whole package as dependency will make the app crash on non-web platforms).
- Test results:
    - **Web + Mouse:** Orbit: ✔️. Zoom: ✔️. Pan: ✔️.
    - **Web + Touch:** Orbit: ✔️. Zoom: ✔️. Pan: ✔️.
    - **Mobile + Mouse:** Orbit: ❌. Zoom: ❌. Pan: ❌.
    - **Mobile + Touch:** Orbit: ❌. Zoom: ❌. Pan: ❌.
    - **Other:** Clicks on the boxes are detected (unrelated to OrbitControls). However, on mobile the click coordinates are off by around 20 pixels in the y-direction (this started appearing after the scene was added to a React Navigation screen).

### Screenshots

![Screenshots on mobile](/screenshots-mobile.png?raw=true "Screenshots on mobile")
![Screenshots on web](/screenshots-web.png?raw=true "Screenshots on web")