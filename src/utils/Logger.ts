import { Mesh } from 'three';
import { PointerEvent } from 'react-three-fiber';

class Logger {
  static logPointerEvents: boolean = false;
  static logUpdateEvent: boolean = false;

  // https://github.com/react-spring/react-three-fiber#events
  static logPointerEvent = (
    e: PointerEvent,
    eventName: string,
    addTrailingLineBreak: boolean
  ): void => {
    if (Logger.logPointerEvents) {
      console.log(
        `${eventName}: (${e.clientX.toFixed(2)}, ${e.clientY.toFixed(2)})${
          addTrailingLineBreak ? '\r\n' : ''
        }`
      );
    }
  };

  static logUpdate = (self: Mesh): void => {
    if (Logger.logUpdateEvent) {
      console.log('props have been updated');
    }
  };
}

export default Logger;
