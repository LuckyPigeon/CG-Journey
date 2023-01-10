# Three.js Journey

## Description

This example shows how to use different method to achieve objects animation, the methods include

* gsap animation library
* scene update function
* scen update function with camera movement to simulate animation.

## Learning Points

* There are two ways to load texture in ThreeJS
    * Use `Image` and `THREE.Texture` to initialze the socket and point `image.src` to the file source.
    * Use `THREE.TextureLoader` to load image directly
* Loading Manager can perform as pipeline and do some actions respectively while loading textures.
* PBR stands for Physically Based Rendering, and it's a important principle when it comes to textures,
especially for metalness and roughness, it's the current standard for realistic rendering. Read more in
the link below.
* UV Coordinate is same as our 2D Coordinate in high school, u=x and v=y.
* Mip maps use to handle texels rendering when a texel handles more than or less than a pixel. The mip map
will interpolate and increase the amount of texels if a texel handles more than a pixel; while the mip map
will decrease the amount of texels if a texel handles less than a pixel and improve the performance.

## 重點整理

* `ThreeJS` 中，主要有兩種方式載入紋理。
    * 使用 `Image` 和 `THREE.Texture` 初始化接口並透過 `image.src` 指定檔案路徑。
    * 使用 `THREE.TextureLoader` 載入紋理檔案。
* `Loading Manager` 可以做為管線或中間件使用，載入紋理檔案時執行相應動作。
* `PBR` 全名為 `Physically Based Rendering`，是目前「擬真圖像」使用的標準，對「金屬度」與「粗糙度」影響尤為重要。
* `UV` 座標系統與高中學習的二維座標系統相同，其中 `U=X`、`V=Y`。
* `Mip maps` 用來處理紋素（紋理的最小單位）與像素之間不一致問題。當一個紋素必須處理一個以上像素時，`mip map` 便會在
四個紋素間內插紋素，增加紋素數量；當一個紋素處理少於一個紋素時，代表紋素太多，因此 `mip map` 會移除一些紋素，增加程式
效能。

## Extensional Resources

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
