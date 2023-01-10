# Three.js Journey

## Description

This example shows how to use cursor and OrbitControl to move camera, and shows the difference of Orthographic Projection and Perspective Projection.

## Learning Points

* The example shows difference between Orthographic Projection and Perspective Projection. Orthographic Projection makes all objects and faces the same size
in the scene; Perspective Projection makes all objects and faces big if near the camera, small if far from camera. Which means the far Orthographic Projection
object be, the bigger it is.
* Orbit Control let camera move around the target, we demonstrate three simple utilities of it.
    * The control target default by point (0, 0, 0), you can alter the target by `controls.target.x/y/z`.
    * You can decide to rotate the world with camera or not by using `controls.autoRotate = true (yes)` or `controls.enableDamping = true (no)`.
    * Use `controls.update()` to update the Orbit Control.
* Feel free to checkout the links below if you want to review the knowledge of rotation matrix or coordinate system.

## Extensional Resources

* Rotation matrix [explanation](https://silverwind1982.pixnet.net/blog/post/165223625-%E6%97%8B%E8%BD%89%E7%9F%A9%E9%99%A3-%28rotation-matrix%29)
* Coordinate system [explanation](https://ithelp.ithome.com.tw/articles/10245073)

## Setup

* Paste the code in `script.js` to your project.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
