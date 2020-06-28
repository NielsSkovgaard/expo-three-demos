import { Point2D } from './Point2D';

export default class CameraHandler {
  private camera: any;
  private mesh: any;
  private container: any;

  private distance: number = 300;
  private distanceTarget: number = 300;
  private PI_HALF: number = Math.PI * 0.5;

  private mouse: Point2D = { x: 0, y: 0 };
  private mouseOnDown: Point2D = { x: 0, y: 0 };
  private touch: Point2D = { x: 0, y: 0 };
  private targetOnDown: Point2D = { x: 0, y: 0 };
  private rotation: Point2D = { x: 0, y: 0 };

  private mousedown: boolean = false;
  private target: Point2D = { x: (Math.PI * 3) / 2, y: Math.PI / 6.0 };

  constructor(container: any, camera: any, mesh: any) {
    this.camera = camera;
    this.mesh = mesh;
    this.container = container;

    this.camera.position.z = this.distance;

    // this.container.addEventListener('mousedown', this.onMouseDown, false);
    // this.container.addEventListener('mousewheel', this.onMouseWheel, false);
    // this.container.addEventListener('mousemove', this.onTouchMove, false);
  }

  handlePanResponderGrant = (event: any) => {
    this.mousedown = true;

    this.touch.x = (event.pageX / window.innerWidth) * 2 - 1;
    this.touch.y = -(event.pageY / window.innerHeight) * 2 + 1;

    console.log(`${this.mouse.x},${this.mouse.y}`);

    this.mouseOnDown.x = -event.pageX;
    this.mouseOnDown.y = event.pageY;

    this.targetOnDown.x = this.target.x;
    this.targetOnDown.y = this.target.y;
  };

  handlePanResponderMove = (event: any) => {
    // if (this.mousedown) {
    this.mouse.x = -event.pageX;
    this.mouse.y = event.pageY;

    const zoomDamp = (this.distance * this.distance) / 100000;

    this.target.x =
      this.targetOnDown.x +
      (this.mouse.x - this.mouseOnDown.x) * 0.003 * zoomDamp;
    this.target.y =
      this.targetOnDown.y +
      (this.mouse.y - this.mouseOnDown.y) * 0.003 * zoomDamp;

    this.target.y = this.target.y > this.PI_HALF ? this.PI_HALF : this.target.y;
    this.target.y =
      this.target.y < -this.PI_HALF ? -this.PI_HALF : this.target.y;
    // }
  };

  handlePanResponderEnd = (event: any) => {
    // this.container.removeEventListener('mousemove', this.onMouseMove, false);
    // this.container.removeEventListener('mouseup', this.onMouseUp, false);
    // this.container.removeEventListener('mouseout', this.onMouseOut, false);

    this.mousedown = false;

    // this.container.style.cursor = 'auto';
  };

  onMouseDown = (event: any) => {
    event.preventDefault();

    // this.container.addEventListener('mousemove', this.onMouseMove, false);
    // this.container.addEventListener('mouseup', this.onMouseUp, false);
    // this.container.addEventListener('mouseout', this.onMouseOut, false);

    this.mousedown = true;
    this.mouseOnDown.x = -event.clientX;
    this.mouseOnDown.y = event.clientY;

    this.targetOnDown.x = this.target.x;
    this.targetOnDown.y = this.target.y;

    // this.container.style.cursor = 'move';
  };

  onMouseMove = (event: any) => {
    // if (this.mousedown) {
    this.mouse.x = -event.clientX;
    this.mouse.y = event.clientY;

    const zoomDamp = this.distance / 1000;

    this.target.x =
      this.targetOnDown.x +
      (this.mouse.x - this.mouseOnDown.x) * 0.005 * zoomDamp;
    this.target.y =
      this.targetOnDown.y +
      (this.mouse.y - this.mouseOnDown.y) * 0.005 * zoomDamp;

    this.target.y = this.target.y > this.PI_HALF ? this.PI_HALF : this.target.y;
    this.target.y =
      this.target.y < -this.PI_HALF ? -this.PI_HALF : this.target.y;
    // }
  };

  onMouseUp = (event: any) => {
    // this.container.removeEventListener('mousemove', this.onMouseMove, false);
    // this.container.removeEventListener('mouseup', this.onMouseUp, false);
    // this.container.removeEventListener('mouseout', this.onMouseOut, false);

    this.mousedown = false;

    // this.container.style.cursor = 'auto';
  };

  onMouseOut = (event: any) => {
    // this.container.removeEventListener('mousemove', this.onMouseMove, false);
    // this.container.removeEventListener('mouseup', this.onMouseUp, false);
    // this.container.removeEventListener('mouseout', this.onMouseOut, false);

    this.mousedown = false;
  };

  onZoomEvent = (event: any) => {
    this.zoom(Math.log(event.scale) * 2);
    return false;
  };

  onMouseWheel = (event: any) => {
    event.preventDefault();
    // if (overRenderer) {
    this.zoom(event.wheelDeltaY * 0.1);
    // }
    return false;
  };

  onSingleTap = (event: any) => {
    const x = event.pageX;
    const y = event.pageY;

    this.mouse.x = (x / window.innerWidth) * 2 - 1;
    this.mouse.y = -(y / window.innerHeight) * 2 + 1;
  };

  onDoubleTap = () => {
    if (this.distanceTarget > 150) {
      // console.log(this.distanceTarget);
      this.distanceTarget = 120;
    } else if (this.distanceTarget <= 150) this.distanceTarget = 300;
  };

  zoom = (delta: number) => {
    const zoomMin = 110;
    const zoomMax = 300;

    this.distanceTarget -= delta;
    this.distanceTarget =
      this.distanceTarget > zoomMax ? zoomMax : this.distanceTarget;
    this.distanceTarget =
      this.distanceTarget < zoomMin ? zoomMin : this.distanceTarget;
  };

  render() {
    this.rotation.x += (this.target.x - this.rotation.x) * 0.1;
    this.rotation.y += (this.target.y - this.rotation.y) * 0.1;
    this.distance += (this.distanceTarget - this.distance) * 0.3;

    this.camera.position.x =
      this.distance * Math.sin(this.rotation.x) * Math.cos(this.rotation.y);
    this.camera.position.y = this.distance * Math.sin(this.rotation.y);
    this.camera.position.z =
      this.distance * Math.cos(this.rotation.x) * Math.cos(this.rotation.y);

    this.camera.lookAt(this.mesh.position);
  }
}
