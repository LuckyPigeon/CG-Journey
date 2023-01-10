/**
 * 11 3D Text
 * This example shows how to use different method to achieve objects animation.
 * The methods include gsap animation library, scene update function and 
 * scen update function with camera movement to simulate animation.
 */

import './style.css'
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
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
 * Textures
 */
const textureLoader = new THREE.TextureLoader()
const matcapTextures1 = textureLoader.load('/textures/matcaps/8.png');
const matcapTextures2 = textureLoader.load('/textures/matcaps/4.png');
const matcapTextures3 = textureLoader.load('/textures/matcaps/5.png');

/**
 * Fonts
 */
const fontLoader = new FontLoader();

fontLoader.load(
    '/fonts/helvetiker_regular.typeface.json',
    ( font ) => {
        console.log('Font Loaded!!!');

        // Text
        /*
            Parameters:
            
            * font: typeface.json generated font.
            * size: Size of xy plane.
            * height: Size of z axis.
            * curveSegments: Interpolate lines (bones) on z axis,
            make the text more detailed and rounded.
            * bevelEnabled: Round text, false by default.
            * bevelThickness: The distance (thickness) between both
            side of bevel.
            * bevelSize: This distance (size) between bevel segments.
            The bigger the more like sphere.
            * bevelOffset: How much distance the bevel starts (relative
            to bevelOffset = 0), The bigger the more likely to deform.
            * bevelSegment: Interpolate lines between bevels, make the
            edge more rounded. BevelSegment is perpendicular to
            curveSegment.
        */
        const textGeometry = new TextGeometry(
            'Hello Jeremy',
            {
                font,
                size: 0.5,
                height: 0.2,
                curveSegments: 6,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.01,
                bevelOffset: 0,
                bevelSegments: 6
            }
        );

        // Compute and make sure bounding box exist
        textGeometry.computeBoundingBox();

        // max for upper-right corner, min for bottom-left corner
        console.log(textGeometry.boundingBox);
        textGeometry.translate(
            - (textGeometry.boundingBox.max.x - 0.02) * 0.5,
            - (textGeometry.boundingBox.max.y - 0.02) * 0.5,
            - (textGeometry.boundingBox.max.z - 0.03) * 0.5
        )
        // textGeometry.center();

        const textMaterial = new THREE.MeshNormalMaterial();
        // textMaterial.wireframe = true;
        const text = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(text);

        // Check donut loading time
        console.time('donuts');

        const torusGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
        const torusMaterials = [
            new THREE.MeshMatcapMaterial({ matcap: matcapTextures1 }),
            new THREE.MeshMatcapMaterial({ matcap: matcapTextures2 }),
            new THREE.MeshMatcapMaterial({ matcap: matcapTextures3 })
        ];

        for(let i = 1; i <= 100; i++) {
            const randomIndex = Math.floor(Math.random() * 100) % 3;
            const torus = new THREE.Mesh(torusGeometry, torusMaterials[randomIndex]);

            // const randomx = (Math.random() - 0.5) * 10
            // const randomy = (Math.random() - 0.5) * 10
            // const randomz = (Math.random() - 0.5) * 10
            // torus.position.x = Math.abs(randomx) > 2.02 ? randomx : 2.03;
            // torus.position.y = Math.abs(randomy) > 0.4 ? randomy : 0.6;
            // torus.position.z = Math.abs(randomz) > 0.13 ? randomz : 0.13;

            // Use text as center, surround it
            torus.position.x = (Math.random() - 0.5) * 10;
            torus.position.y = (Math.random() - 0.5) * 10;
            torus.position.z = (Math.random() - 0.5) * 10;

            torus.rotation.x = Math.random() * Math.PI * 0.5;
            torus.rotation.y = Math.random() * Math.PI * 0.5;

            const scaleConst = Math.random();
            torus.scale.set(scaleConst, scaleConst, scaleConst);
            scene.add(torus);
        }

        console.timeEnd('donuts');
    }
);

/**
 * Axes Helper
 */
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

/**
 * Object
 */
// const cube = new THREE.Mesh(
//     new THREE.BoxGeometry(1, 1, 1),
//     new THREE.MeshBasicMaterial()
// )

// scene.add(cube)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    const elapsedTime = clock.getElapsedTime()

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