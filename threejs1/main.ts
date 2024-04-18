import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: "white" });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const light = new THREE.AmbientLight(0x00fffc, 0.1);
scene.add(light);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
);
camera.position.z = 3;
scene.add(camera);

const canvas = document.querySelector("canvas.webgl");

// ...

// Orbit Controls

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.update();

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

mesh.position.x = 0.7;

function animate() {
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
