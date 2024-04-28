/* eslint-env node */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

/** @type {import('expo/metro-config').MetroConfig} */
const config = {
  ...defaultConfig,
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      // skip loading wasm (not supported), an empty module will be loaded in place
      if ('./ed25519_wasm.js' === moduleName) {
        return { type: 'empty' };
      }

      // rewrite symbol-sdk subpath includes with src/ intermediate directory
      // due to limited exports support in final bundle
      const SYMBOL_SDK_SUBPATH_IMPORT = 'symbol-sdk/';
      if (moduleName.startsWith(SYMBOL_SDK_SUBPATH_IMPORT)) {
        moduleName = `symbol-sdk/src/${moduleName.substring(SYMBOL_SDK_SUBPATH_IMPORT.length)}`;
      }

      // chain to the standard Metro resolver for everything else
      return context.resolveRequest(context, moduleName, platform);
    },
    extraNodeModules: {
      crypto: require.resolve('@symbol-blockchain-community/expo-symbol-crypto'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer'),
      events: require.resolve('events'),
      assert: require.resolve('assert'),
      url: require.resolve('url'),
      process: require.resolve('process'),
    },
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg', 'cjs'],
  },
};

module.exports = config;
