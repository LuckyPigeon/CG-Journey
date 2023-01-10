# Three.js Journey

## Description

This example shows how to use different method to achieve objects animation.
The methods include gsap animation library, scene update function and scen update 
function with camera movement to simulate animation.

## Learning Points

* Font Loader can load fonts from typeface.json format, there are some default fonts
inside `node_modules/three/examples/fonts`.
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

## Setup

* Paste the code in `script.js` to your project.
* Copy the `textures` and `fonts` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
