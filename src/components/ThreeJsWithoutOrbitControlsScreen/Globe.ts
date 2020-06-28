import * as THREE from 'three';

export default class Globe {
  private readonly scene: any;
  private readonly radius: number;
  private readonly totalSize: number = 0.5;
  public mesh?: THREE.Mesh;

  constructor(scene: any) {
    this.scene = scene;
    this.radius = 200 * this.totalSize;
  }

  init() {
    const geometry = new THREE.SphereBufferGeometry(50, 10, 10);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(geometry, material);

    sphere.rotation.y = Math.PI;
    this.scene.add(sphere);

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.scale.set(1.1, 1.1, 1.1);
  }
}
