# Three.js Journey

## Description

This example shows how to use different method to achieve objects animation.
The methods include gsap animation library, scene update function and scen update 
function with camera movement to simulate animation.

## Learning Points

* Font Loader can load fonts from typeface.json format, there are some default fonts
inside `node_modules/three/examples/fonts`. You can also generate your font by visiting
this [website](https://gero3.github.io/facetype.js/)
* Text Geometry contains some significant parameters, include
    * font: typeface.json generated font.
    * size: Size of xy plane.
    * height: Size of z axis.
    * curveSegments: Interpolate lines (bones) on z axis, make the text more detailed 
    and rounded.
    * bevelEnabled: Round text, false by default.
    * bevelThickness: The distance (thickness) between both side of bevel.
    * bevelSize: This distance (size) between bevel segments. The bigger the more 
    like sphere.
    * bevelOffset: How much distance the bevel starts (relative to bevelOffset = 0), 
    the bigger the more likely to deform.
    * bevelSegment: Interpolate lines between bevels, make the edge more rounded. 
    BevelSegment is perpendicular to curveSegment.
* If you want to move the text around, you must calculate bounding box using
`textGeometry.computeBoundingBox`, then you can translate the text geometry by adjust
upper-right and bottom-left position.
* `textGeometry.computeBoundingBox` contains two significant parameters.
    * max: upper-right coordintate.
    * min: bottom-left coordintate.

## 重點整理

* `Font Loader` 只能載入 `typeface.json` 格式的字體，`ThreeJS` 在 `/node_modules/three/examples/fonts` 
路徑中提供一些字體。你也可以使用這個[網站](https://gero3.github.io/facetype.js/)自行產生字體。
* `Text Geometry` 中有幾個重要參數，包含
    * font：字體。
    * size：字 XY 平面大小。
    * height：字 Z 軸大小。
    * curveSegments：往字的 Z 軸方向內插線，使字 XY 平面更細節與圓潤。
    * bevelEnabled：往字的邊緣內插平行於 X 軸的線，讓字的邊角更為圓潤。
    * bevelThickness：兩邊 `bevel` 間的距離大小。
    * bevelSize：`bevel` 各邊間的間距大小，越大字越像球體。
    * bevelOffset：`bevel` 各邊角往外凸出的預設值，越大字之間邊界越不明顯，最終會擠壓變形。
    * bevelSegment：在原本 `bevel` 間內插更多線，讓細節更明顯，也讓字的邊角變得更圓潤。`bevelSegment` 垂直
    於 `curveSegment`。
* 如果想要移動或變形 3D 字，必須先透過 `textGeometry.computeBoundingBox` 計算邊界框（`Bounding Box`），得知
右上與左下角座標後才能進行移動或變形。
* `textGeometry.computeBoundingBox` 包含兩個重要參數。
    * max：右上角座標。
    * min：左下角座標。

## Setup

* Paste the code in `script.js` to your project.
* Copy the `textures` and `fonts` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
