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

## 重點整理

* 光線在圖學中是非常重要概念，它影響著陰影、深度與顏色。
* 光線非常吃效能，因此通常一個場景最多只有三個光線。如果想要增加更多光線，有兩種主流方法。
    * 預先錄製光線，這在固定場景、固定劇情的遊戲非常常見，因為光線不會變化，因此預錄起來就好。
    * 環境映射圖，使用環境映射圖讓物體捕捉光線細節與反射。
* `ThreeJS` 有六種光線，其中包含
    * ambientLight：俗稱環境光，顧名思義是存在環境中的光，微小且範圍大。
    * directionalLight：來自遠方的光，通常模擬太陽光。
    * pointLight：來自點點的光，可以模擬星光、螢火蟲、火炬等等。
    * hemisphereLight：在場景正上方的光，通常模擬天空自帶的光芒。
    * rectAreaLight：平面光，通常用來模擬光穿越某種平面照射到其他物體上，如，透明窗戶。
    * spotLight：聚光燈。

## Setup

* Paste the code in `script.js` to your project.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
