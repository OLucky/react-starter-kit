# react-starter-kit

## Includes
### Production Dependencies
- [React](https://www.npmjs.com/package/react) - view library.
- [React-router](https://www.npmjs.com/package/react-router-dom) - application routing.

Redux, MobX, default React or any other way to manage state management choice is based on the project requirements.

### Dev Dependencies
- [Webpack](https://www.npmjs.com/package/webpack) - code bundling and minification.
- [Webpack Serve](https://www.npmjs.com/package/webpack-serve) - dev server.
- [Webpack Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) - checking structure and size of webpack output bundle for optimization.
- [Extract Text Webpack Plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) - to separate styles from scripts bundle on production.  
- [Babel](https://www.npmjs.com/package/babel-core) - JS-code compiling for compatibility with older browsers.
- [Babel Preset Env](https://www.npmjs.com/package/babel-preset-env) - ES2015+ code compiling to ES5.
- [Babel Preset React](https://www.npmjs.com/package/babel-preset-react) - Babel's preset for React.
- [Babel Plugin Transform Class Properties](https://www.npmjs.com/package/babel-plugin-transform-class-properties) - Babel's plugin for supporting class properties.
- [Node Sass](https://www.npmjs.com/package/node-sass) - Sass usage in Node environment.
- [Autoprefixer](https://www.npmjs.com/package/autoprefixer) - prefixing css on output for browsers compatibility.
- [PostCSS Import](https://www.npmjs.com/package/) - importing css files in scss-files. Useful when working with libraries.

### Dev Dependencies - Webpack Loaders
- [Babel Loader](https://www.npmjs.com/package/babel-loader) - to use Babel with Webpack.
- [File Loader](https://www.npmjs.com/package/file-loader) - for processing app assets (currently, images and fonts) with Webpack.
- [Style Loader](https://www.npmjs.com/package/style-loader) - as fallback for Extract Text Webpack Plugin.
- [CSS Loader](https://www.npmjs.com/package/css-loader) - importing css into bundle.
- [Sass Loader](https://www.npmjs.com/package/sass-loader) - compiling sass/scss files into css. 
- [PostCSS Loader](https://www.npmjs.com/package/postcss-loader) - enabling postcss processing for styles in bundle.

## npm scripts
- _npm start_ - start Webpack Serve on port 9000.
- _npm run build_ - builds main.js and styles.css for production.
- _npm run analyse_ - builds main.js and styles.css for production with enabled Webpack Bundle Analyzer.

## Prefered folders structure so far
- _dist/_ - output folder for Webpack in production mode.
- _src/_ - entry point for Webpack (index.js), main .scss file (styles.scss), potscss config. 
  - _/scss/_ - .scss files.
  - _/scripts/_ - .js files.
  - _/public/_ - static files and assets, content folder for webpack-serve
  
  Inner structure of src/ subfolders may vary though files are prefered to be grouped by domain.
