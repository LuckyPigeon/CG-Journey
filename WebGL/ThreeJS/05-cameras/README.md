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
    * Use `controls.update` to update the Orbit Control.
* Feel free to checkout the links below if you want to review the knowledge of rotation matrix or coordinate system.

## 重點整理

* 本範例首次使用 `Orthographic Projection`，可以很清楚看到它與 `Perspective Projection` 差異。`Orthographic Projection` 遠近大小一致，因此可以推論越遠物體實際大小則越大。
* `Orbit Control` 讓使用者視角可以受游標控制，這個範例中有三個使用案例
    * `Orbit Control` 的初始目標設定為點（0, 0, 0），但可以使用 `controls.target.x/y/z` 更改位置。
    * 當游標移動時，開發者可以決定是否讓世界與游標一同旋轉，轉與不轉會讓使用者視角呈相反方向移動。可以使用 `controls.autoRotate = true (yes)` 或 
    `controls.enableDamping = true (no)` 決定。
    * 在更新函式中，務必使用 `controls.update` 更新游標位置，否則使用者視角不會有任何反應。
* 如果想複習旋轉矩陣或座標系統，請務必查看以下連結。

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
