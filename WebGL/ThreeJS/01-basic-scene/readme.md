# Three.js Journey

## Description

This example shows how to use HTML Canvas, WebGL and ThreeJS to create a basic scene.

## Learning Points

* We usually use `document.querySelector('canvas.webgl')` to selection WebGL section in our HTML
code, and rendered our scene in the HTML Canvas.
* `THREE.Scene` initialze the scene, you can use `scene.add` to add more objects to the scene.
* ThreeJS basic objection creation process is `THREE.Mesh(ThreeJS Geometry, ThreeJS Material)`.
* There are two camera projections, "Orthogonal Projection" and "Perspective Projection".
    * "Orthogonal Projection" **lets every object in the scene always stays the same size**, which means objects **don't** zoom in/out after it move near/far from the camera.
    * "Perspective Projection" **is the projection method that we see every day**, which means objects zoom in/out after it move near/far from the camera.
* `THREE.WebGLRenderer` allows GPU calculates the whole scene.

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build