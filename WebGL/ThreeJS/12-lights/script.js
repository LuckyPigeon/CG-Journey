/**
 * 12 Lights
 * This example shows the difference of light types and how to use helpers to
 * support developing and constructing the light.
 */

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
import * as dat from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
 */
/*
    ThreeJS contains six types of light, include
    
    * ambientLight: Ambient Light. Global illumination, faint light.
    * directionalLight: Directional Light. Far light source. e.g. Sun light.
    * pointLight: Point Light. e.g. Stars.
    * hemisphereLight: Hemisphere Light. A light source positioned directly 
    above the scene, with color fading from the sky color to the ground color.
    * rectAreaLight: React Area Light. Emits light uniformly across the face a 
    rectangular plane. e.g. Transparent windows.
    * spotLight: Spot Light. Near light source. e.g. Light bulb or spot light.
*/
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.01);

const directionalLight = new THREE.DirectionalLight(0x00fffc, 0.1);
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3);
scene.add(hemisphereLight);

const pointLight = new THREE.PointLight(0xff9000, 0.5, 10, 2)
scene.add(pointLight)
pointLight.position.set(1, - 0.5, 1)
// scene.add(pointLight)

const rectAreaLight = new THREE.RectAreaLight(0x004e33, 0.3, 4, 4);
rectAreaLight.position.set(1.5, 0, 1);
rectAreaLight.lookAt(new THREE.Vector3())
// scene.add(rectAreaLight);

const spotLight = new THREE.SpotLight(0x78ff00, 0.3, 8, Math.PI * 0.1, 0.25, 1);
spotLight.position.set(0, 2, 3);
// scene.add(spotLight);
// scene.add(spotLight.target);
// spotLight.target.position.set(-1, 0, 1);

/**
 * Helpers
 */
// Light helpers just like axesHelper, visualize the light source and direction.
const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, .2);
scene.add(hemisphereLightHelper);

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, .2);
scene.add(directionalLightHelper);

// const pointLightHelper = new THREE.PointLightHelper(pointLight, .2);
// scene.add(pointLightHelper);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

window.requestAnimationFrame(() => {
    spotLightHelper.update();
});

// const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight);
// scene.add(rectAreaLightHelper);

/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.75, 0.75),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.x = 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

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
camera.position.z = 3
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

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()