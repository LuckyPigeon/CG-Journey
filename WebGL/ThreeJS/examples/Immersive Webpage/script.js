/*
    This is Immersive Webpage example, we will create a immersive product page
    using geometries, materials and particles.
*/

import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import gsap from 'gsap'

/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
    materialColor: '#ffeded'
}

gui.addColor(parameters, 'materialColor').onChange(() => {
    material.color.set(parameters.materialColor)
    particlesMaterial.color.set(parameters.materialColor)
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter
/**
 * Meshes
 */
// Material
const objectsDistance = 4
const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
)

const cone = new THREE.Mesh(
    new THREE.ConeGeometry(1, 2, 32),
    material
)

const torusKnot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
)

torus.position.y = objectsDistance * 0
cone.position.y = objectsDistance * -1
torusKnot.position.y = objectsDistance * -2

torus.position.x = 2
cone.position.x = -2
torusKnot.position.x = 2

const sectionMeshes = [ torus, cone, torusKnot ]

scene.add(torus, cone, torusKnot)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

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
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () => {
    scrollY = window.scrollY

    const newSection = Math.round(scrollY / sizes.height)

    if (newSection != currentSection) {
        currentSection = newSection
        console.log('new section: #', newSection)
    }

    gsap.to(
        sectionMeshes[currentSection].rotation,
        {
            duration: 1.0,
            ease: 'power2.inOut',
            x: '+=6',
            y: '+=3',
            z: '+=2'
        }
    )
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.width - 0.5
})

/**
 * Particles
 */
// Vertices
const particlesCount = 200
const position = new Float32Array(particlesCount * 3)

for (let i = 0; i < particlesCount; i++) {
    position[i*3 + 0] = (Math.random() - 0.5) * 10
    position[i*3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance *sectionMeshes.length
    position[i*3 + 2] = (Math.random() - 0.5) * 10
}

// Geometry
const particleGeometry = new THREE.BufferGeometry()
particleGeometry.setAttribute('position', new THREE.BufferAttribute(position, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.03
})

// Points
const particles = new THREE.Points(particleGeometry, particlesMaterial)
scene.add(particles)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate meshes
    for (const mesh of sectionMeshes) {
        mesh.rotation.x += deltaTime * 0.1
        mesh.rotation.y += deltaTime * 0.12
    }

    // Animate camera
    camera.position.y = -scrollY / sizes.height * objectsDistance

    const parallaxX = -cursor.x
    const parallaxY = cursor.y
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * deltaTime * 5
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * deltaTime * 5

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()