# Three.js Journey

## Description

This example shows how to create a geometry with pure vertex points.

## Learning Points

* You can create geometry with pure vertex points with the following settings
    * Declare a fixed size `Float32Array` (which defined in standard JS library). You can calculate size with `geometry count * how many vertex a set * 3`.
    * Or you can declare the `Float32Array` with points in it directly.
    * Create `THREE.BufferAttribute(<Float32Array>, how many numbers per vertex)`, transform pure number to buffer (geometry attribute).
    * Create `THREE.BufferGeometry()`.
    * Link to the buffer attribute with `geometry.setAttribute('position', buffer attribute)`.
    * You know the rest.

## 重點整理

* `ThreeJS` 不只提供不同形狀函式，也提供讓開發者自行建構物體的函式，流程大致如下。
    * 宣告一個固定陣列 `Float32Array`（JS 標準函式庫）。容量大小可以透過 `物體數量 * 每個物體有多少頂點 * 3` 得知。（3 => 每個頂點有 x,y,z 三個值）
    * 也可以直接把頂點座標一次初始化進 `Float32Array`。
    * 建立 `THREE.BufferAttribute(<Float32Array>, 3)`（3 => 每個頂點有 x,y,z 三個值），將純數值轉換至緩衝區。
    * 建立物體緩衝區 `THREE.BufferGeometry()`。
    * 將物體緩衝區與數值矩陣連結 `geometry.setAttribute('position', 數值矩陣變數)`。
    * 剩下就如同其他物體一般。

## Setup

* Paste the code in `script.js` to your project.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
