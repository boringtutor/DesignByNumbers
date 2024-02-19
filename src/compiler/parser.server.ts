import { ParsedAstType } from "@/types/misc";

export default function ParserAST(tokens: any): ParsedAstType | string {
  var AST: any = {
    type: "Drawing",
    body: [],
  };
  while (tokens.length > 0) {
    const token = tokens.shift();
    if (token.type === "word") {
      switch (token.value) {
        case "Paper":
          var expression: any = {
            type: "CallExpression",
            name: "Paper",
            arguments: [],
          };
          //grab the next token
          var argument = tokens.shift();
          if (argument.type === "number") {
            expression.arguments.push({
              type: "NumberLiteral",
              value: argument.value,
            });
          } else {
            return "Paper command must be followed by a number.";
          }
          AST.body.push(expression);
          break;
        case "Pen":
          var expression: any = {
            type: "CallExpression",
            name: "Pen",
            arguments: [],
          };
          //grab the next token
          var argument = tokens.shift();
          if (argument.type === "number") {
            expression.arguments.push({
              type: "NumberLiteral",
              value: argument.value,
            });

            AST.body.push(expression);
          } else {
            return "Pen command must be followed by a number.";
          }
          break;
        case "Line":
          var expression: any = {
            type: "CallExpression",
            name: "Line",
            arguments: [],
          };
          // next 4 tokens should be position arguments
          for (var i = 0; i < 4; i++) {
            //grab the next token
            var argument = tokens.shift();
            if (argument.type === "number") {
              expression.arguments.push({
                type: "NumberLiteral",
                value: argument.value,
              });
            } else {
              return "Line command must be followed by four numbers.";
            }
          }
          AST.body.push(expression);
          break;
      }
    }
  }
  return AST;
}
