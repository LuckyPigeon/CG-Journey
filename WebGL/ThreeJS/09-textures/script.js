/**
 * 09 Textures
 * This example shows how to use different method to achieve objects animation.
 * The methods include gsap animation library, scene update function and 
 * scen update function with camera movement to simulate animation.
 */

import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { LinearFilter, NearestFilter } from 'three'

/**
 * Texture
 */
// Method 1, slow
// const image = new Image()
// const texture = new THREE.Texture(image)

// image.addEventListener('load', () => {
//     texture.needsUpdate = true
// })
// image.src = '/textures/door/color.jpg'

// Method 2, fast
// Loading Manager can act as a middleware, preform respective actions while loading textures.
const loadingManager = new THREE.LoadingManager()
loadingManager.onStart = () => {
    console.log("On Start");
}
loadingManager.onLoad = () => {
    console.log("On Load");
}
loadingManager.onProgress = () => {
    console.log("On Progress");
}
loadingManager.onError = () => {
    console.log("On Error");
}

// Texture Loader
const textureLoader = new THREE.TextureLoader(loadingManager)
// const texture = textureLoader.load('/textures/door/color.jpg')
const texture = textureLoader.load('/textures/minecraft.png')
// const texture = textureLoader.load('/textures/checkerboard-8x8.png')
// const texture = textureLoader.load('/textures/checkerboard-1024x1024.png')

// Spilt 1/n, wait for repeat method to be declared.
// texture.repeat.x = 4
// texture.repeat.y = 3
// texture.repeat.set( 4, 4 );

// Different repeating methods, S & T are UV Coordinate (2D Coordinate, U=X axis, V=Y axis)
// texture.wrapS = THREE.MirroredRepeatWrapping
// texture.wrapT = THREE.MirroredRepeatWrapping
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Offset value from the origin of each face
// texture.offset.x = 0.5
// texture.offset.y = 0.5

// Rotation on each face
// texture.rotation = Math.PI / 4

// Set the texture center
// texture.center.x = 0.5
// texture.center.y = 0.5

/*
    GenerateMipmaps is true by default, and the value is LinearFilter, which interpolate between pixels,
    might seems blur in some cases, you can set to false and create Mip maps manually.

    minFilter is use when a texel (texture unit) handle less than a pixel, such as zoom in the image. 
    The renderer needs to create a detailed version then, so the renderer interpolate new texel between 
    original texels and make the detailed version. 

    magFilter is use when a texel (texture unit) handle more than a pixel, such as zoom out the image.
    The renderer don't need to handle such detailed task, so the renderer reduces the texel and improves
    the performance.
*/
// texture.generateMipmaps = false
// texture.minFilter = NearestFilter
// texture.magFilter = NearestFilter

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
const geometry = new THREE.BoxBufferGeometry(1, 1, 1)
console.log(geometry.attributes.uv)
const material = new THREE.MeshBasicMaterial({ map: texture })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

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
camera.position.z = 1
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