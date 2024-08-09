module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-private-methods",
    "@babel/plugin-transform-private-property-in-object",
    "react-native-reanimated/plugin",
    "babel-plugin-styled-components",
    '@babel/plugin-transform-template-literals'
  ],
};
