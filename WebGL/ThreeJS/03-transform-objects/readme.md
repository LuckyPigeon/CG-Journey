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

## 重點整理

* `Axes Helper` 能有效幫助場景開發並視覺化座標軸。
* `ThreeJS` 中物件變形有幾種方式，可以直接更改 x/y/z 座標，也可以使用 `set` 函式一次性更改所有座標，其中
    * `position.x/y/z` 以及 `position.set` 用於物體移動。
    * `rotation.x/y/z` 以及 `rotation.set` 用於物體旋轉。
    * `scale.x/y/z` 以及 `scale.set` 用於物體縮放。
* `rotation.reorder` 用來改變座標更新順序，預設為 X->Y->Z。
* `lookAt` 可以更新物體或使用者視角方向；`distanceTo` 用來計算任意兩點間距離。

## Setup

* Paste the code in `script.js` to your project.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
