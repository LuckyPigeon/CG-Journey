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
* Mip maps use to handle texels rendering when a texel handles more than or less than a pixel. The renderer
will interpolate and increase the amount of texels if a texel handles more than a pixel; while the renderer
will decrease the amount of texels if a texel handles less than a pixel and improve the performance.

## Extensional Resources

* PBR (Physically Based Rendering) [explanation](https://marmoset.co/posts/basic-theory-of-physically-based-rendering/)

## Setup

* Paste the code in `script.js` to your project
* Copy the `texture` folder and paste it into your `static` folder.
* Enjoy the example :).
