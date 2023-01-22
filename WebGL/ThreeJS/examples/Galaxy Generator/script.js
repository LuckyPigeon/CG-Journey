/*
    This is Galaxy Generator example, a review example for particles.
    It will create a galaxy with color gradient effect.
*/

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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
 * Galaxy
 */
const parameters = {}
parameters.count = 50000
parameters.size = .02
parameters.radius = 5
parameters.branches = 3
parameters.spin = 1
parameters.randomness = 0.4
parameters.randomPower = 3
parameters.insideColor = '#ff6030'
parameters.outsideColor = '#1b3984'

let geometry, material, points

const generateGalaxy = () => {
    /**
     * Destroy old galaxy
     */
    if (points != null) {
        geometry.dispose()
        material.dispose()
        scene.remove(points)
    }

    /**
     * Color
     */
    const colorInside = new THREE.Color(parameters.insideColor)
    const colorOutside = new THREE.Color(parameters.outsideColor)

    /**
     * Geometry
     */
    geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)

    for (let i = 0; i < parameters.count; i++) {
        const interval = i * 3

        const radius = Math.random() * parameters.radius

        // How much curve transformed for a branch
        const spinAngle = radius * parameters.spin

        // Angle between each branch
        const branchAngle = (i % parameters.branches) / parameters.branches * Math.PI * 2

        const randomX = Math.pow(Math.random(), parameters.randomPower) * parameters.randomness * radius * (Math.random() < 0.5 ? -1 : 1) 
        const randomY = Math.pow(Math.random(), parameters.randomPower) * parameters.randomness * radius * (Math.random() < 0.5 ? -1 : 1) 
        const randomZ = Math.pow(Math.random(), parameters.randomPower) * parameters.randomness * radius * (Math.random() < 0.5 ? -1 : 1) 

        positions[interval] =  Math.cos(branchAngle + spinAngle) * radius + randomX
        positions[interval+1] = randomY
        positions[interval+2] = Math.sin(branchAngle + spinAngle) * radius + randomZ
    
        const mixedColor = colorInside.clone()

        // Make the color intrerpolation for each pixel
        mixedColor.lerp(colorOutside, radius / parameters.radius)
        
        colors[interval] = mixedColor.r
        colors[interval+1] = mixedColor.g
        colors[interval+2] = mixedColor.b
    }

    geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    )

    geometry.setAttribute(
        'color',
        new THREE.BufferAttribute(colors, 3)
    )

    /**
     * Material
     */
    material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    })

    /**
     * Points
     */
    points = new THREE.Points(geometry, material)

    scene.add(points)
}

generateGalaxy()

gui.add(parameters, 'count').min(10000).max(1000000).step(100).onFinishChange(generateGalaxy)
gui.add(parameters, 'size').min(.001).max(.1).step(.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'radius').min(.01).max(20).step(.01).onFinishChange(generateGalaxy)
gui.add(parameters, 'branches').min(2).max(20).step(1).onFinishChange(generateGalaxy)
gui.add(parameters, 'spin').min(-5).max(5).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'randomness').min(0).max(2).step(0.001).onFinishChange(generateGalaxy)
gui.add(parameters, 'randomPower').min(1).max(10).step(0.001).onFinishChange(generateGalaxy)
gui.addColor(parameters, 'insideColor').onFinishChange(generateGalaxy)
gui.addColor(parameters, 'outsideColor').onFinishChange(generateGalaxy)

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
camera.position.x = 3
camera.position.y = 3
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

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()