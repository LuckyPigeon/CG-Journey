# Three.js Journey

## Description

This is Raycaster example, the most simple ray tracing method, ThreeJS has provided some implementation of it.

## Raycasting

Raycasting is the simplest ray tracing method. It emits a ray from each pixel and stop when the ray intersect with an object or return background color if no intersect.

There's no light, reflection, refraction and shadow in raycasting, so it's a fast rendering method and it has many use cases, such as, laptop games in 2000 earlier (Pokeman red gem, blue gem and green gem), mouse event which intersect an object, bullet tracking in a shoot game.

## 光線投射（Raycasting）

光線投射是光線追蹤最簡單且最早的實現，它的核心概念是讓每個像素射出一條光線（Ray），行進直到與物體交會。

光線投射無法模擬光、反射、折射以及陰影，因此它只能產生 3D 在 2D 上的投影。光線投射有許多應用，如早期 GBA 小遊戲（紅寶石、綠寶石、藍寶石）等、如今的滑鼠處理事件以及射擊遊戲的彈道追蹤。

## Setup

* Paste the code in `script.js` to your project.
* Copy the `textures` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the exercises :).