# Three.js Journey

## Description

This example shows how to use HTML Canvas, WebGL and ThreeJS to create a basic scene.

## Learning Points

* We usually use `document.querySelector('canvas.webgl')` to selection WebGL section in our HTML code, and rendered our scene in the HTML Canvas.
* `THREE.Scene` initialze the scene, you can use `scene.add` to add more objects to the scene.
* `ThreeJS` basic object creation process is `THREE.Mesh(ThreeJS Geometry, ThreeJS Material)`.
* There are two camera projections, "Orthogonal Projection" and "Perspective Projection".
    * "Orthogonal Projection" **lets every object in the scene always stays the same size**, which means objects **don't** zoom in/out after it move near/far from the camera.
    * "Perspective Projection" **is the projection method that we see every day**, which means objects zoom in/out after it move near/far from the camera.
* `THREE.WebGLRenderer` allows GPU calculates the whole scene.

## 重點整理

* 使用 `document.querySelector('canvas.webgl')` 選取 HTML 程式碼並將圖形渲染至 HTML Canvas 中。
* `THREE.Scene` 用來初始化場景，可以使用 `scene.add` 添加更多物體至場景。
* `ThreeJS` 建立物件基礎流程 -> `THREE.Mesh(ThreeJS Geometry, ThreeJS Material)`
* 電腦圖學中主要有兩種投影方式，正交投影（Orthogonal Projection）以及透視投影（Perspective Projection）
    * 正交投影中每個物體不論遠近都同樣大小，因此越遠的物體實際大小越大。
    * 透視投影如同我們日常生活，物體離我們越近就越大，越遠就越小。
* `THREE.WebGLRenderer` 讓我們使用 GPU 渲染場景。

## Extensional Resources

* Coordinate system [explanation](https://ithelp.ithome.com.tw/articles/10245073)

## Setup

* Double click `index.html`.
* Enjoy your example :).
