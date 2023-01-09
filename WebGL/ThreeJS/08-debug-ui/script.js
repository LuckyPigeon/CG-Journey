/**
 * 08 Debug UI
 * This example shows how to setup a debug ui, test your scene and objects,
 * and make your program interactive along the way
 */

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as lil from 'lil-gui'

/**
 * Debug
 */
const gui = new lil.GUI({ title: 'Debug GUI Controls', width: 400 })
const parameter = {
    spin: () => {
        gsap.to(mesh.rotation, {duration: 2, y: mesh.rotation.y + (1 * Math.PI * 2)})
    }
}

gui.add(parameter, 'spin')

// Collapse debug ui by default
gui.close()

// Handle keydown event and make the interactive collapse debug ui
window.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        if (gui._hidden) {
            gui.show()
        } else {
            gui.hide()
        }
    } else if (event.key === 'c') {
        if (gui._closed) {
            gui.open()
        } else {
            gui.close()
        }
    }
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Debug
// Add a debug ui
gui.add(mesh.position, 'x').name('mesh position x').min(-3).max(3).step(0.01)
gui.add(mesh.position, 'y').name('mesh position y').min(-3).max(3).step(0.01)
gui.add(mesh.position, 'z').name('mesh position z').min(-3).max(3).step(0.01)

// Auto determine the choose panel
gui.add(mesh, 'visible')
gui.add(material, 'wireframe')
gui.addColor(material, 'color')

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
camera.position.z = 3
scene.add(camera)

/**
 * Controls
 */
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

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()