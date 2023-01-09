/**
 * 10 Materials
 * This example shows how to use differnt ThreeJS Materials and load textures with
 * material mappings, form a finer and detailed image.
 */

import './style.css'
import * as THREE from 'three'
import { GUI } from 'lil-gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Debug
 */
const gui = new GUI();

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();

const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
const doorHeightTexture = textureLoader.load('/textures/door/Height.jpg');
const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');
const matcapTexture = textureLoader.load('/textures/matcaps/6.png');
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg');
// Play with MeshToonMaterial
// gradientTexture.minFilter = THREE.NearestFilter;
// gradientTexture.magFilter = THREE.NearestFilter;
// gradientTexture.generateMipmaps = false;

// Loading the environment textures
const environmentMapTexture = cubeTextureLoader.load([
    '/textures/environmentMaps/0/px.jpg',
    '/textures/environmentMaps/0/nx.jpg',
    '/textures/environmentMaps/0/py.jpg',
    '/textures/environmentMaps/0/ny.jpg',
    '/textures/environmentMaps/0/pz.jpg',
    '/textures/environmentMaps/0/nz.jpg',
])

/**
 * Object
 */
/*
    ThreeJS provides a lot of material options, include

    * MeshBasicMaterial: The most basic and simplest material, only color and react
    to ambient light, no shadow, no depth and other fancy effect. Easy to setup and
    test the materials or ideas.
    * MeshDepthMaterial: A material with depth test, which mean the face near
    light is brighter and is dark if it far from light.
    * MeshLambertMaterial: Use a special model called "Lambertian" to calcualte and
    simulate the reflectance.
    * MeshPhongMaterial: Use a specialm model called "Blinn-Phong" to calculate and 
    simulate the reflectance.
    * MeshToonMaterial: A material implementing toon shading.
    * MeshStandardMaterial: Use Physically Based Rendering (PBR) to render the materials.
    * MeshPhysicalMaterial: An extension of MeshStandardMaterial, providing more advanced 
    physically-based rendering properties.
*/
// const sphereMaterial = new THREE.MeshBasicMaterial({
//     map: doorRoughnessTexture
// });
// const planeMaterial = new THREE.MeshBasicMaterial({
//     map: doorColorTexture
// });
// const torusMaterial = new THREE.MeshBasicMaterial({
//     map: doorAmbientOcclusion
// });
// const torusMaterial = new THREE.MeshMatcapMaterial();

// torusMaterial.flatShading = true;
// torusMaterial.matcap = matcapTexture;

// const torusMaterial = new THREE.MeshDepthMaterial();
// const torusMaterial = new THREE.MeshLambertMaterial();
// const torusMaterial = new THREE.MeshPhongMaterial();

// torusMaterial.shininess = 1000;
// torusMaterial.specular = new THREE.Color(0x1188ff);

// const torusMaterial = new THREE.MeshToonMaterial();
// torusMaterial.gradientMap = gradientTexture

/*
    ThreeJS also provide plenty of material mapping rules for modifying and tuning
    a finer material, the mappings include

    * map: The color map, which means it can apply textures.
    * alphaMap: Controls the alphaness, can be used to crop the image, such as, door.
    Needs to set "transparent = true" while using.
    * aoMap: Ambient Occulsion map, make the object's textures more detailed.
    * displacementMap: Control the "z axis" of image, the white displacement map it is,
    the "heighter" it gets.
    * metalnessMap: How much "metalness" it is, the more metalness it gets, the better 
    reflectance it becomes.
    * roughnessMap: How much "roughness" it is, the more roughness it get, the more
    light it absorb.
    * envMap: The enivronment map, fine tune the reflectance and lighting from the
    environment. Needs to set "scene.background = environmentMap" while using.
*/
const torusMaterial = new THREE.MeshStandardMaterial();
torusMaterial.metalness = .8;
torusMaterial.roughness = 0;
// torusMaterial.map = doorColorTexture;
// torusMaterial.aoMap = doorAmbientOcclusionTexture;
// torusMaterial.aoMapIntensity = 10;
// torusMaterial.displacementMap = doorHeightTexture;
// torusMaterial.displacementScale = 0.01;
// torusMaterial.metalnessMap = doorMetalnessTexture;
// torusMaterial.roughnessMap = doorRoughnessTexture;
// torusMaterial.normalMap = doorNormalTexture;
// torusMaterial.normalScale.set(0.1, 0.1);
// torusMaterial.transparent = true;
// torusMaterial.alphaMap = doorAlphaTexture;
torusMaterial.envMap = environmentMapTexture;
scene.background = environmentMapTexture;

gui.add(torusMaterial, 'metalness').min(0).max(1).step(0.01);
gui.add(torusMaterial, 'roughness').min(0).max(1).step(0.01);
gui.add(torusMaterial, 'aoMapIntensity').min(1).max(10).step(0.1);
gui.add(torusMaterial, 'displacementScale').min(0.01).max(1).step(0.01);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    torusMaterial
);
sphere.position.x = 1.5;
// sphereMaterial.wireframe = true;
// sphereMaterial.opacity = 0.5
// sphereMaterial.transparent = true;
scene.add(sphere);

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    torusMaterial
);
plane.geometry.setAttribute(
    'uv2',
    new THREE.BufferAttribute(plane.geometry.attributes.uv.array, 2)
);

// planeMaterial.side = THREE.DoubleSide
scene.add(plane);

// Torus means donut
const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 64, 128),
    torusMaterial
);
torus.position.x = -2;
scene.add(torus);

/**
 * Light
 */
// Global illuminate light, tiny light usually
const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add(ambientLight);

// Light from a point, simulate near light source
const pointLight = new THREE.PointLight(0xe0e0e0, .9, 10);
pointLight.position.set(2,3,4);
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    sphere.rotation.x = elapsedTime * Math.PI / 2;
    torus.rotation.y = elapsedTime * Math.PI / 2;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()