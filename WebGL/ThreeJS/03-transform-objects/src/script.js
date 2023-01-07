/**
 * 03 Transform Objects
 * This example shows how to transform objects, include basic transformation,
 * such as, translate, scale and rotation; how to use some basic utilites, 
 * such as, lookAt function to move camera toward some coordinate, distanceTo
 * function calculate distance between two specific points.
 */

import './style.css'
import * as THREE from 'three'
import { Mesh, MeshBasicMaterial } from 'three'

/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl')

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
group.position.y = .5 // now you can move objects in a group
scene.add(group)

// Cubes
const cube1 = new Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)

const cube2 = new Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 0x0000ff })
)
group.add(cube2)

cube2.position.set(2.5, 0, 0)

/**
 * Axes helper 
 */
// const axesHelper = new THREE.AxesHelper()
// scene.add(axesHelper)

/**
 * Transformation
 */
const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)
const material = new THREE.MeshNormalMaterial({ })
const cube3 = new THREE.Mesh(geometry, material)
scene.add(cube3)

const sphereGeometry = new THREE.SphereGeometry(0.3, 50, 50);
const sphereMaterial = new THREE.MeshNormalMaterial({flatShading: true});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)

// Translate object by move position one by one axis
// sphere.position.x = -2
// sphere.position.y = -0.3
// sphere.position.z = 3

// Or you can translate object in one line
cube3.position.set(2, 1.5, 0);
sphere.position.set(-0.5, 1.5, 1);
// sphere.position.normalize() // Position doesn't need this, but vector needs
console.log(sphere.position)

// Scale
sphere.scale.x = 1.2
sphere.scale.y = 0.8

// Rotation
// Change the rotation order, default by 'XYZ'
cube3.rotation.reorder('YXZ')
cube3.rotation.y = Math.PI/4 // rotate 90 degree
cube3.rotation.x = Math.PI/4
// cube3.rotation.z = 10

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.y = 1
camera.position.z = 3
camera.position.x = 1   
scene.add(camera)
// camera.lookAt(sphere.position)
console.log(sphere.position.distanceTo(camera.position))

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)