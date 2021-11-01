class MyWebpackPlugin {
  apply(compiler) {
    // compiler.hooks.done.tap("My Plugin", (stats) => {
    //   console.log("마이 플러그인");
    // });

    compiler.plugin("emit", (compilation, callback) => {
      const source = compilation.assets["main.js"].source();
      console.log(source);
      compilation.assets["main.js"].source = () => {
        const banner = [
          "/**",
          "* 이것은 배너플러그인이 처리한 결과입니다.",
          "Build Date: 2021-11-01",
          "*/",
        ].join("\n");
        return banner + "\n\n" + source;
      };

      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
