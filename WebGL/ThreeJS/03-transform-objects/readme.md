# Three.js Journey

## Description

This example shows how to transform objects, include basic transformation,
such as, translate, scale and rotation; how to use some basic utilites, 
such as, lookAt function to move camera toward some coordinate, distanceTo
function calculate distance between two specific points.

## Learning Points

* Use `Axes Helper` supports visualizing the axis of the scene.
* You can transform objects by modify axis one by one (position.x/rotation.x/scale.x), or you can
also use position.set(x, y, z) to modify coordinates in one time. (There's also position.setX function exists)
* The rotation.reorder sub function can change the update sequence. The update sequence is X->Y->Z by default.
* lookAt function can update objects/camera facing direction; distanceTo can calcucalte distance between any two specific points.

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
```