# Three.js Journey

## Description

This example shows how to use differnt ThreeJS Materials and load textures with material mappings, form a finer and detailed image.

## Learning Points

* ThreeJS contains plenty of material options, include
    * MeshBasicMaterial: The most basic and simplest material, only color and react
    to ambient light, no shadow, no depth and other fancy effect. **Easy to setup and
    test the materials or ideas**.
    * MeshDepthMaterial: A material with depth test, which mean **the face near
    light is brighter and is dark if it far from light**.
    * MeshDepthMaterial: A material with depth test, which mean the face near
    light is brighter and is dark if it far from light.
    * MeshLambertMaterial: Use a special model called "Lambertian" to calcualte and
    simulate the reflectance.
    * MeshPhongMaterial: Use a special model called "Blinn-Phong" to calculate and 
    simulate the reflectance.
    * MeshToonMaterial: A material implementing toon shading.
    * MeshStandardMaterial: Use Physically Based Rendering (PBR) to render the materials.
    * MeshPhysicalMaterial: An extension of MeshStandardMaterial, providing more advanced 
    physically-based rendering properties.
* And in the material options, they also contain different texture mappings
    * map: The color map, which means it can apply textures.
    * alphaMap: Controls the alphaness, can be used to crop the image, such as, door.
    Needs to set "transparent = true" while using.
    * aoMap: Ambient Occulsion map, make the object's textures more detailed.
    * displacementMap: Control the "z axis" of image, the white displacement map it is,
    the "heighter" it gets.
    * metalnessMap: How much "metalness" it is, the more metalness it gets, the better 
    reflectance it becomes.
    * roughnessMap: How much "roughness" it is, the more roughness it get, the more
    light it absorb.
    * envMap: The enivronment map, fine tune the reflectance and lighting from the
    environment. Needs to set "scene.background = environmentMap" while using.
* Ambient Light is global illuminate light, it is tiny light usually; Point Light
is light from a point, simulate near light source.
* More about the usage and examples for the materials, please check the link below.

## ????????????

* `ThreeJS` ????????????????????????????????????
    * MeshBasicMaterial??????????????????????????????????????????????????????????????????????????????????????????????????????
    ???????????????????????????????????????
    * MeshDepthMaterial??????????????????????????????????????????????????????????????????????????????????????????
    * MeshLambertMaterial????????????????????????Lambertian?????????????????????????????????
    * MeshPhongMaterial????????????????????????Blinn-Phong?????????????????????????????????
    * MeshToonMaterial?????????????????????????????????
    * MeshStandardMaterial????????? `PBR` ???????????????
    * MeshPhysicalMaterial???`MeshStandardMaterial` ???????????????????????????????????? PBR ???????????????
* ????????????????????????????????????????????????????????????????????????????????????????????????
    * map????????????????????????????????????????????????????????????
    * alphaMap??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
    ???????????? `transparet = true` ??????????????????
    * aoMap?????????????????????????????????????????????????????????
    * displacementMap???????????????????????????????????????????????????????????????????????? Z ????????????????????????
    * metalnessMap???????????????????????????????????????????????????????????????????????????
    * roughnessMap?????????????????????????????????????????????????????????????????????
    * envMap????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? 
    `scene.background = environmentMap`???
* `Ambient Light`?????????????????????????????????????????????????????????????????????????????????
* ???????????????????????????????????????????????????????????????????????????

## Extensional Resources

* Materials - Official [documentation](https://threejs.org/docs/?q=sta#api/en/materials/MeshStandardMaterial)
* Lambertian reflectance model [explanation](https://blog.csdn.net/u010922186/article/details/40680913)
* Blinn-Phong reflectance model [explanation](https://ithelp.ithome.com.tw/articles/10240632)
* Toon Shading [explanation](https://zh.wikipedia.org/zh-tw/%E5%8D%A1%E9%80%9A%E6%B8%B2%E6%9F%93)
* PBR (Physically Based Rendering) [explanation](https://marmoset.co/posts/basic-theory-of-physically-based-rendering/)

## Setup

* Paste the code in `script.js` to your project.
* Copy the `textures` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
