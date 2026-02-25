import { Application, autoDetectRenderer, WebGLRenderer } from "pixi.js";
import "./App.css";

// webGlRenderer
console.log("new WebGlRenderer");

const webGlRenderer = new WebGLRenderer();
await webGlRenderer.init({
  skipExtensionImports: true,
});

console.log("WebGlRenderer initialised", webGlRenderer);

// Application
console.log("new Application");

const pixiApplication = new Application();
await pixiApplication.init({
  skipExtensionImports: true,
});

console.log("Application initialised", pixiApplication);

// autoDetectRenderer
console.log("await autoDetectRenderer");

const autoRenderer = await autoDetectRenderer({
  height: 100,
  width: 100,
});

console.log("autoDetectRenderer resolved", autoRenderer);

function App() {
  return <div>Pixi loaded successfully</div>;
}

export default App;
