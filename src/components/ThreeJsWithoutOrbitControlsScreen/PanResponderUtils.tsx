import { PanResponder, PanResponderInstance } from 'react-native';

const PanResponderUtils = {
  build: function (
    onPanResponderGrant: (event: any) => void,
    onPanResponderMove: (event: any) => void,
    onPanResponderEnd: (event: any) => void
  ): PanResponderInstance {
    return PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) =>
        onPanResponderGrant(
          this.transformEvent({
            ...e,
            gestureState,
          }).nativeEvent
        ),
      onPanResponderMove: (e, gestureState) =>
        onPanResponderMove?.(
          this.transformEvent({ ...e, gestureState }).nativeEvent
        ),
      onPanResponderRelease: (e, gestureState) =>
        onPanResponderEnd?.(
          this.transformEvent({ ...e, gestureState }).nativeEvent
        ),
      onPanResponderTerminate: (e, gestureState) =>
        onPanResponderEnd?.(
          this.transformEvent({ ...e, gestureState }).nativeEvent
        ),
    });
  },
  transformEvent: function (event: any): any {
    event.preventDefault = event.preventDefault || (() => {});
    event.stopPropagation = event.stopPropagation || (() => {});
    return event;
  },
};

export default PanResponderUtils;
