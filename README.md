# symbol sdk expo sample

The boilerplate for developing a mobile application using Symbol SDK v3.

## Dependencies

* symbol-sdk v3 
* expo  

## Quick start

1. Clone the repository:

```bash
git clone ${this-repo}
```

2. Install the dependencies:

```bash
npm install
```

3. Run the project:

```bash
npm run start
```

## Points to Note

When using the sample code provided in the symbol-sdk official repository directly, errors may occur in the Expo environment. To avoid these errors, the following modifications have been made in this sample:

1. Change in the method of importing `symbol-sdk`

Add the following settings to `metro.config.cjs` to change the reference to `symbol-sdk/src/symbol` when importing `symbol-sdk/symbol`.

```js
const SYMBOL_SDK_SUBPATH_IMPORT = 'symbol-sdk/';
if (moduleName.startsWith(SYMBOL_SDK_SUBPATH_IMPORT)) {
  moduleName = `symbol-sdk/src/${moduleName.substring(SYMBOL_SDK_SUBPATH_IMPORT.length)}`;
}
```

2. Change in the method of loading the wasm file

Since symbol-sdk uses a wasm file, the method of loading it is modified. In the React Native environment, handling wasm is difficult, so it is modified not to load it.

```js
if ('./ed25519_wasm.js' === moduleName) {
  return { type: 'empty' };
}
```

3. Changes in tsconfig.json settings

To avoid conflicts with Expo's bundler, switch from using `Node16`, recommended by `symbol-sdk`, to the following settings:

```json
{
  "target": "ESNext",
  "module": "ESNext",
  "moduleResolution": "Bundler"
}
```