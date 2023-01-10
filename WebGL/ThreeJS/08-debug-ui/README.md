# Three.js Journey

## Description

This example shows how to setup a debug ui, test your scene and objects, and make your program interactive along the way.

## Learning Points

* Debug ui contains three important material.
    * `lil.GUI` initialize the debug program.
    * `gui.add` adds options to the debug ui, you can set option types and utilies such as `min`, `max`, `step` by yourself, or let the library decide for you.
    * You can use side utilies of the library to decorate and make your debug ui more interactive. Such as, `gui.addColor` to add color option, `gui.close` to
    close the debug ui by default. To learn more about side utilies, visit official [documentation](https://lil-gui.georgealways.com/)

## Setup

* Paste the code in `script.js` to your project.
* Run `npm install --save gsap lil-gui` to install the dependencies.
* Run following commands in your command line interface.

```bash
npm i
npm run dev
```

* Enjoy the example :).
