# Three.js Journey

## Description

This example shows how to create a geometry with pure vertex points.

## Learning Points

* You can create geometry with pure vertex points with the following settings
    * Declare a fixed size `Float32Array` (which defined in standard JS library). You can calculate size with `geometry count * how many vertex a set * how many numbers per vertex`.
    * Or you can declare the `Float32Array` with points in it directly.
    * Create `THREE.BufferAttribute(<Float32Array>, how many numbers per vertex)`, transform pure number to buffer (geometry attribute).
    * Create `THREE.BufferGeometry()`.
    * Link to the buffer attribute with `geometry.setAttribute('position', buffer attribute)`.
    * You know the rest.

## Setup

* Paste the code in `script.js` to your project and enjoy the example :).
