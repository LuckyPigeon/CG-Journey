# Three.js Journey

## Description

This example shows the difference of light types and how to use helpers to support
developing and constructing the light.

## Learning Points

* Light is important factor in 3D scene, it affect shadow, depth and colors.
* Light is performance consuming, so normally there are only three light in a scene,
too mcuh light will cause critical performance issue. If you need more light in a scene,
there are two morden approaches.
    * Prerecord light. This often use a non change scene, such as simple 3D game. So the
    animation producer can pre-record the light source.
    * Environment map. Use environment to simulate the reflectance and the light source.
* ThreeJS contains six types of light.
    * ambientLight: Ambient Light. Global illumination, faint light.
    * directionalLight: Directional Light. Far light source. e.g. Sun light.
    * pointLight: Point Light. e.g. Stars.
    * hemisphereLight: Hemisphere Light. A light source positioned directly 
    above the scene, with color fading from the sky color to the ground color.
    * rectAreaLight: React Area Light. Emits light uniformly across the face a 
    rectangular plane. e.g. Transparent windows.
    * spotLight: Spot Light. Near light source. e.g. Light bulb or spot light.
* Light helpers just like axes helper, there are especially useful when developing a light.

## Setup

* Paste the code in `script.js` to your project.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
