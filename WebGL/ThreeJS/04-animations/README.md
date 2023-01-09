# Three.js Journey

## Description

This example shows how to use different method to achieve objects animation.
The methods include gsap animation library, scene update function and 
scen update function with camera movement to simulate animation.

## Learning Points

* The example shows three simple animation methods.
    * gsap library, use `gsap.to` to move your position with animation, it's powerful when you facing large amount of objects. Check more
    usages out in gsap [documentation](https://greensock.com/docs/)
    * Transform objects in a update function
    * Transform camera in a update function
* Use combintation of sin & cos can animate circle as well as natural movement, see this [video](https://www.youtube.com/watch?v=8--5LwHRhjk&t=4s),
if you are confused with how sin & cos can draw a circle, be sure to check the link below.
* **Delta time is use for synchornizing same effect on different computers, which have different spec and cuase different framerate and refresh rate**,
if you wish to know more about delta time, be sure to checkout the link below.
* You might see our cube transform to frustum in the animation occasionally, that's because **we use perspective camera and the camera simulate the view
of our world, which means the objects or faces far from our camera will appear smaller**, be sure to checkout the link below if you still feel confused
and want to know more.

## Extensional Resources

* Rotation matrix [explanation](https://silverwind1982.pixnet.net/blog/post/165223625-%E6%97%8B%E8%BD%89%E7%9F%A9%E9%99%A3-%28rotation-matrix%29)
* Delta time [explanation](https://gafferongames.com/post/fix_your_timestep/)
* Coordinate system [explanation](https://ithelp.ithome.com.tw/articles/10245073)

## Setup

Paste the code in `script.js` to your project and enjoy the example.