# Three.js Journey

## Description

This example shows how to use basic shader and create a shape and animation that ThreeJS can't do.

## Learning Points

* `.vert` file stands for vertex shader code. To be simpler, vertex shader controls the vertices and the position information of the scene, you can modify the `shader.vert` file to see the difference.
* `.frag` file sttands for fragment shader code. To be simpler, fragment shader controls the color of the scene. Same as vertex shader, you can modify the `shader.frag` file to see the difference.
* Shaders will process accorrdingly, from vertex shader to fragment shader.
* Every shader accept one specific coordinate (x,y or u,v) a time, so you can think as each pixel contains a shader, helps each pixel what the need to render (geometry, material, texture, etc...) at this moment.
* The shader code in ThreeJS is `GLSL`, the same as `OpenGL`, you might see another shading language called `HLSL` in the future.
* The shader code looks like `C/C++` and yes it is, but with a little bit different.
    * `gl_Position` must be defined inside vertex shader, it's an API and will send position information to the GPU. Usally it will set to the final position, after transformations and projections.
    * `gl_FragColor` must be defined inside fragment shdader, same as `gl_Position`, it's an API and will send color information to the GPU.
    * `uniform` variable is a constant variable, only it can be modify from `ShaderMaterial`. It can exists on both vertex and fragment shader.
    * `attribute` variable only exists in `WebGL` and `ThreeJS`, and it can only be declared at vertex shader, so you can pass some vertex shader only information with `attribute` variable.
    * `varying` variable on ly exists in `WebGL` and `ThreeJS`, and need to be declared on both side of vertex and fragment shader with the same name. It's a channel for vertex shader communicate with fragment shader.
* `ShaderMaterial` contains a lot of built-in variables, such as, uv coordinate, projection matrix, etc... Read the link below for checking out more build-in variables.
* `Exercises` folder contains shader exercises and patterns, if you want to practice more, feel free you try it.

## 重點整理

* `.vert` 檔案裡面存放頂點著色器（vertex shader）程式碼。簡單來說，頂點著色器裡定義所有與頂點相關資訊，如，位置、法線位置、初始顏色等等。可以試著更改 `shader.vert` 的程式碼並查看變化。
* `.frag` 檔案裡面存放片段著色器（fragment shader）程式碼。簡單來說，片段著色器裡定義所有跟像素顏色相關資訊。可以試著更改 `shader.frag` 的程式碼並查看變化。
* 著色器們會依照順序進行處理，在 `WebGL` 與 `ThreeJS` 中，以 `vertex shader` 與 `fragment shader` 為主，而順序也是 `vertex` 先 `fragment` 後。
* 每個著色器接受一組座標作為輸入，因此可以想成每個像素都有一個著色器，由此可見為什麼圖學工程師很在意效能。
* 著色器程式語言叫 `GLSL`，與 `OpenGL` 相同，之後可能會看到另一種著色器語言叫 `HLSL`。
* `GLSL` 看起來很像 `C/C++`，因為它就是由 `C/C++` 衍伸而來的語言，但還是有些細微不同。
    * `gl_Position` 必須在頂點著色器中定義，`WebGL` 會把變數中內容送至 `GPU` 進行處理。
    * `gl_FragColor` 必須在片段著色器中定義，`WebGl` 會把變數中內容送至 `GPU` 進行處理。
    * `uniform` 變數如同 `const`，不能在著色器程式碼中更改，但可以在 `WebGL` 與 `ThreeJS` 程式中進行更改，並送給著色器使用。
    * `attribute` 變數只能在頂點著色器使用，與 `uniform` 一樣，可以在 `WebGL` 與 `ThreeJS` 程式中進行更改，因此適合紀錄只與頂點著色器相關資訊，如，座標、法線、初始顏色等等。
    * `varying` 變數是頂點著色器與片段著色器之間的橋樑，但兩邊需以同樣名稱定義，`WebGL` 在頂點著色器程式結束後，會把資料傳送至片段著色器。
* `ShaderMaterial` 擁有許多內建變數，如，uv 座標、投影矩陣等等。更多資訊請查看以下連結。
* `Exercises` 資料夾中存放著色器練習以及一些常用模式，如果想多練習著色器，歡迎試試。

## Extensional Resources

* [uniform, atrribtue and varying in GLSL](https://www.jianshu.com/p/eed3ebdad4fb)
* [ShaderMaterial build-in variables](https://threejs.org/docs/index.html?q=raw#api/en/renderers/webgl/WebGLProgram)

## Setup

* Paste the code in `script.js` to your project.
* Copy the `shaders` folder and paste it into your `static` folder.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
