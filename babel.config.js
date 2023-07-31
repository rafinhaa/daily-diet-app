module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@contexts": "./src/contexts",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
