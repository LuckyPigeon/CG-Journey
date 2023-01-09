/**
 * 05 Cameras
 * This example shows how to use cursor and OrbitControl to move camera,
 * and shows the difference of Orthographic Projection and Perspective
 * Projection.
 */


import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Vector3 } from 'three'

/**
 * Cursor
 */
const cursor = {
    x: 0,
    y: 0
}

addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y =- (event.clientY / sizes.height - 0.5)
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

/**
 * Camera
 */
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)

// Orthographic Projection
const aspectRatio = sizes.width / sizes.height

/*
    Parameters:
    1. left
    2. right
    3. top
    4. bottom
    5. near plane
    6. far plane
*/
const camera = new THREE.OrthographicCamera(
    -1 * aspectRatio,
    1 * aspectRatio,
    1, -1, 0.1, 100
)
camera.position.x = 2
camera.position.y = 2
camera.position.z = 3
// camera.lookAt(mesh.position)
scene.add(camera)

/**
 * Controls
 */
// OrbitControls let camera move around the target
const controls = new OrbitControls(camera, canvas)

// Play around enableDamping and autoRotate to see different
controls.enableDamping = true
// controls.autoRotate = true

// Now we set the target to point (1, 0, 0)
controls.target.x = 1
// controls.update()

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // mesh.rotation.y = elapsedTime;

    // Update camera
    // Move camera on horizontal aspect
    // camera.position.x = cursor.x * 3
    // camera.position.y = cursor.y * 3

    // Move camera on vertical aspect
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    camera.position.y = cursor.y * 8
    // camera.lookAt(mesh.position)

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()