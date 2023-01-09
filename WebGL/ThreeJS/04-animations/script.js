/**
 * 04 Animations
 * This example shows how to use different method to achieve objects animation.
 * The methods include gsap animation library, scene update function and 
 * scen update function with camera movement to simulate animation.
 */

import './style.css'
import * as THREE from 'three'
import gsap from 'gsap' // JavaScript animation library

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
let prevTime = Date.now()

// Clock
const clock = new THREE.Clock()

// let incrementX = 0.01

/**
 * Animations
 */
// GSAP Animation
// Move mesh right and left with 1 second duration
// gsap.to(mesh.position, {duration: 1, delay: 1, x: 2})
// gsap.to(mesh.position, {duration:1, delay: 2, x: 0})

// Function animation
const tick = () => {
    // Time
    const currTime = Date.now()

    // Delta time
    // Sychronize animation on different computer
    const deltaTime = currTime - prevTime
    prevTime = currTime

    // Clock
    // How much time passed since program start
    const elapseTime = clock.getElapsedTime() 

    // Update objects
    // Move mesh right and left continuously
    // if (mesh.position.x > -2 && mesh.position.x < 2) {
    //     mesh.position.x += incrementX
    // } else {
    //     incrementX = -incrementX
    //     mesh.position.x += incrementX
    // }

    /*
        Rotation function (cos/sin) cost 90 degree to rotate from 0~1,
        and elapseTime happens to increment by 1 per second.
        If you use this characteristic and multiply by Math.PI * 2,
        the mesh can rotate 1 round per second (Math.PI = 180 degree = 3.1415926 radian).
    */
    // mesh.rotation.y += 0.0015 * deltaTime 
    // mesh.rotation.y = elapseTime // 1 round 4 seconds (rotation angle cos/sin from 0 to 1 is 90 degree)
    // mesh.rotation.y = elapseTime * Math.PI * 2 // 1 round pre second, multiply by Math.PI * 2 transform rotation speed for 1 face (90 degree/s) to 1 second 360 degree

    // Move like a circle
    mesh.position.y = Math.sin(elapseTime)
    mesh.position.x = Math.cos(elapseTime)

    // Move like a circle (object stands and camera move)
    // camera.position.y = Math.sin(elapseTime)
    // camera.position.x = Math.cos(elapseTime)
    // camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)
}

tick()
