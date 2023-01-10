# Three.js Journey

## Description

This example shows how to setup a debug ui, test your scene and objects, and make your program interactive along the way.

## Learning Points

* Debug UI contains three important material.
    * `lil.GUI` initialize the debug program.
    * `gui.add` adds options to the debug UI, you can set option types and utilies such as `min`, `max`, `step` by yourself, or let the library decide for you.
    * You can use side utilies of the library to decorate and make your debug UI more interactive. Such as, `gui.addColor` to add color option, `gui.close` to
    close the debug UI by default. To learn more about side utilies, visit official [documentation](https://lil-gui.georgealways.com/)

## 重點整理

* 偵錯 UI 包含以下幾個重點
    * `lil.GUI` 初始化偵錯 UI 程式。
    * `gui.add` 增加偵錯 UI 選項，選項名稱後還可以接 `min`、`max`、`step` 等工具函式，或者可以讓函式自行辨識。
    * 使用函式庫提供的其他工具函式裝飾偵錯 UI 不僅可以讓程式變強大，也可以增加使用者體驗。例如，`gui.addColor` 可以增加顏色選項、`gui.close` 可以收闔偵錯 UI、`gui.hide`
    可以隱藏偵錯 UI。想知道更多工具函式，請務必查看[官方文件](https://lil-gui.georgealways.com/)

## Setup

* Paste the code in `script.js` to your project.
* Run `npm install --save gsap lil-gui` to install the dependencies.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
