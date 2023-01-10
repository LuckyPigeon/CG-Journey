# Three.js Journey

## Description

This example shows how to use Webpack compile whole ThreeJS project,
and use npm run to deploy the project. 

This is an optional lecture, you may look into "webpack.common.js" and "webpack.dev.js" file,
and google the options if you ecounter some confuse part.
You may escape it and look into the next lecture.

## Learning Points

* You can add new rules and module loader to the modules section in `webpack.common.js`, let webpack support more file extensions.
* `webpack.dev.js` use for **general development** and `webpack.prod.js` use for **production stage**. (if you want to deploy your code on server)
* You can easily find webpack resource by google `webpack` + the keyword that confuses you.

## Setup

* Download [Node.js](https://nodejs.org/en/download/).
* Run following commands in your command line interface.

```bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

* Enjoy the example :).