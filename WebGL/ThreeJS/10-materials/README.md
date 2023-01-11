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

## 重點整理

* `ThreeJS` 有許多材質選項，其中包含
    * MeshBasicMaterial：最基礎物質，對光只會有單純顏色反應，沒有陰影、深度或任何特殊反應。
    適合用來測試程式碼與想法。
    * MeshDepthMaterial：包含深度的物質，對光的深度有反應，離光越近越亮，越遠越暗。
    * MeshLambertMaterial：使用一種稱為「Lambertian」的模型進行反射模擬。
    * MeshPhongMaterial：使用一種稱為「Blinn-Phong」的模型進行反射模擬。
    * MeshToonMaterial：使用卡通著色的物質。
    * MeshStandardMaterial：使用 `PBR` 渲染物質。
    * MeshPhysicalMaterial：`MeshStandardMaterial` 的延伸物質，提供更多進階 PBR 相關功能。
* 不同物質中，也包含不同紋理映射，可以為紋理增加不同細節，其中包含
    * map：顏色映射，可以最基礎地為物質載入紋理。
    * alphaMap：掌握紋理的透明度，某種意義上可以用來選定、裁切物體，如，門。（物體位置塗白，其他地方塗黑）
    需要設置 `transparet = true` 才可以使用。
    * aoMap：環境光遮蔽映射，讓細節陰影更加明顯。
    * displacementMap：讓紋理有三維空間，映射圖中越白部份表示該部件在 Z 軸越大（越高）。
    * metalnessMap：掌控物體的「金屬度」，數值越高，反射效果就越好。
    * roughnessMap：掌控物體的「粗糙度」，數值越高，吸收率越好。
    * envMap：環境映射圖，將物體光、陰影與環境進行比對，做出微調，讓物體更為真實。需要設置 
    `scene.background = environmentMap`。
* `Ambient Light`，俗稱環境光，顧名思義是存在環境中的光，微小且範圍大。
* 若想知道更多物質的用途與範例，請務必查看下方連結。

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
