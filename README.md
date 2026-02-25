# Pixi.js docker issues

This package provides basic examples of issues occurred when trying to use the `autoDetectRenderer` method of pixi.js v8 in a docker container.

The promise resolves as expected when running vite in dev or preview mode, but silently dies when called from a docker container.
