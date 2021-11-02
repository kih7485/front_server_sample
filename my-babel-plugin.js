module.exports = function MyWebpackPlugin() {
  return {
    visitor: {
      VariableDeclaration(path) {
        console.log("VariableDeclaration() kind:", path.node.kind);

        //const => var로 변환
        if (path.node.kind === "const") {
          path.node.kind = "var";
        }
      },
      //   Identifier(path) {
      //     const name = path.node.name;

      //     //바벨이 만든 AST 노드를 출력
      //     console.log("Identifier() name: ", name);

      //     //변환작업: 코드 문자열을 역순으로 변환
      //     path.node.name = name.split("").reverse().join("");
      //   },
    },
  };
};
