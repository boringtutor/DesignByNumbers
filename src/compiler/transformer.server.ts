import { ParsedAstType } from "@/types/misc";

export type svgAstType = {
  tag: string;
  attr: {
    width: number;
    height: number;
    viewBox: string;
    xmlns: string;
    version: string;
  };
  body: any[];
};

export function TransformerAST(ast: ParsedAstType) {
  var svg_ast: svgAstType = {
    tag: "svg",
    attr: {
      width: 100,
      height: 100,
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
    },
    body: [],
  };

  if (typeof ast === "string") {
    return "ast is not valid";
  }

  var pen_color = 100; // default pen color is black

  const ast_body = [...ast.body];
  while (ast_body.length > 0) {
    const node = ast_body.shift();
    switch (node?.name) {
      case "Paper":
        if (node.arguments === undefined) {
          return "Paper command must be followed by a number.";
        }
        var paper_color = 100 - node.arguments[0].value;
        // add rect element information to svg_ast's body
        svg_ast.body.push({
          tag: "rect",
          attr: {
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill:
              "rgb(" +
              paper_color +
              "%," +
              paper_color +
              "%," +
              paper_color +
              "%)",
          },
        });
        break;
      case "Pen":
        if (node.arguments === undefined) {
          return "Pen command must be followed by a number.";
        }
        pen_color = 100 - node.arguments[0].value;
        break;
      case "Line":
        if (node.arguments === undefined) {
          return "Line command must be followed by 4 numbers.";
        }
        // add line element information to svg_ast's body
        svg_ast.body.push({
          tag: "line",
          attr: {
            x1: node.arguments[0].value,
            y1: node.arguments[1].value,
            x2: node.arguments[2].value,
            y2: node.arguments[3].value,
            "stroke-linecap": "round",
            stroke:
              "rgb(" + pen_color + "%," + pen_color + "%," + pen_color + "%)",
          },
        });
        break;
    }
  }
  return svg_ast;
}
