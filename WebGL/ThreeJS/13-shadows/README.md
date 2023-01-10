# Three.js Journey

## Description

This example shows how to create shadows, cast shadows to other planes and objects; 
receive shadows from other planes and objects, adjust the resolution of shadows and
fine tune the performance of shadows.

## Learning Points

* Shadows can't turn on and off simply by setting true or false, in ThreeJS, you need
to use `castShadow` and `receiveShadow` to tell the engine if a plane or an object allows
to project own shadow to others or allows others project shadows to it.
* `shadow.mapSize` adjust the shadow resolution, but this will affect the preformance.
* `shadow.camera` just like our perspective camera, but the properties of it affect the 
performance, so it must be adjust in every light source.

## Setup

* Paste the code in `script.js` to your project.
* Copy the `textures` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).

