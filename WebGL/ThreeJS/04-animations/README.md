# Three.js Journey

## Description

This example shows how to use different method to achieve objects animation. The methods include gsap animation library, scene update function and 
scen update function with camera movement to simulate animation.

## Learning Points

* The example shows three simple animation methods.
    * gsap library, use `gsap.to` to move your position with animation, it's powerful when you facing large amount of objects. Check more
    usages out in gsap [documentation](https://greensock.com/docs/).
    * Transform objects in a update function.
    * Transform camera in a update function.
* Use combintation of sin & cos can animate circle as well as natural movement, see this [video](https://www.youtube.com/watch?v=8--5LwHRhjk&t=4s).
If you still confused with how sin & cos can draw a circle, be sure to check the link below.
* **Delta time is use for synchornizing same effect on different computers, which have different spec and cuase different framerate and refresh rate**.
If you wish to know more about delta time, be sure to checkout the link below.
* You might see our cube transform to frustum in the animation occasionally, that's because **we use perspective camera and the camera simulate the view
of our world, which means the objects or faces far from our camera will appear smaller**, be sure to checkout the link below if you still feel confused
and want to know more.

## 重點整理

* `ThreeJS` 中有三種簡易動畫方式
    * `gsap` 函式庫，使用 `gsap.to` 可以製作移動動畫，當一次需要控制大量物件時，是個方便的選擇。
    * 使用更新函式移動物體
    * 使用更新函式直接更新使用者視角，繞著物體轉
* 使用 `sin`、`cos` 可以讓物體繞著圈轉，也可以模擬自然環境中物體動作，例如：風吹、水流。延伸觀看：[使用數學畫出人物](https://www.youtube.com/watch?v=8--5LwHRhjk&t=4s)。
如若尚對 `sin`、`cos` 為何能控制物體繞著圈轉有任何疑問，務必查看下方 `Rotation matrix` 連結。
* `Delta time` 使用上下幀時間差做為物體更新的變數之一，讓物體更新不受硬體規格高低影響。若不使用 `delta time` 硬體規格高的可以在上下幀間更新多次，使得兩幀差距過大，造成物體
「瞬間移動」的錯覺；硬體規格低的則是需要兩幀以上才能執行一次更新，造成卡頓情形。如果對 `delta time` 感興趣並想了解更多，請務必查看下方 `Delta time` 連結。
* 如範例 1 提過的 `Perspective Projection`，可以看到這個範例紅色立方體繞圈圈時，越靠近畫面邊緣越容易變形，這就是 `Perspective Projection` 加上小範圍 `near` 和 `far` 
設定帶來的影響。如果想了解更多，請務必查看下方 `Coordinate system` 連結。

## Extensional Resources

* Rotation matrix [explanation](https://silverwind1982.pixnet.net/blog/post/165223625-%E6%97%8B%E8%BD%89%E7%9F%A9%E9%99%A3-%28rotation-matrix%29)
* Delta time [explanation](https://gafferongames.com/post/fix_your_timestep/)
* Coordinate system [explanation](https://ithelp.ithome.com.tw/articles/10245073)

## Setup

* Paste the code in `script.js` to your project.
* This package uses gsap as animation library, run `npm install --save gsap@3.5.1` execute the program smoothly, you can still install latest version
to experience the newest functionailty.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :)
