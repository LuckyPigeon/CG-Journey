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

## 重點整理

* `ThreeJS` 中，陰影無法透過簡易開關設定，而是由 `castShadow` 與 `receiveShadow` 構成。其中，
`castShadow` 告訴引擎該物體會投射陰影；而 `receiveShadow` 告訴引擎該物體可以接收陰影。
* `shadow.mapSize` 調整陰影的解析度，但這會影響效能，務必慎重使用。
* `shadow.camera` 就像使用者視角，但 `shadow.camera` 會影響效能，所以必須對所有 `shadow.camera`
進行微調，去除用不到部分，

## Setup

* Paste the code in `script.js` to your project.
* Copy the `textures` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).

