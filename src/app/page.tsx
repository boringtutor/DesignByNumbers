"use client";
import { lexer } from "@/compiler/lexer.server";
import Lexer from "@/components/lexer/lexer.client";
import CodeHeader from "@/components/header/codeHeader";
import React from "react";
import ParserAST from "@/compiler/parser.server";
import Parser from "@/components/Parser/parser.client";
import { ParsedAstType } from "@/types/misc";
import { TransformerAST, svgAstType } from "@/compiler/transformer.server";
import Transformer from "@/components/Transformer/transformer.client";
import { generator } from "@/compiler/generator.server";
import GeneratorSVG from "@/components/generator/generator.client";
type CodeStateType = {
  code: string;
  tokens: any[];
  ast: ParsedAstType | string;
  transformed: svgAstType | string;
  svg: string;
};

const initializeCodeState: CodeStateType = {
  code: "",
  tokens: [],
  ast: "",
  transformed: "",
  svg: "",
};

type GameAction =
  | { type: "SET_CODE"; payload: string }
  | { type: "SET_TOKENS"; payload: any[] }
  | { type: "SET_AST"; payload: ParsedAstType | string }
  | { type: "SET_TRASNFORMED_AST"; payload: svgAstType | string }
  | { type: "SET_SVG"; payload: any };

function codeReducer(state: CodeStateType, action: GameAction) {
  switch (action.type) {
    case "SET_CODE":
      // console.log("Code is => ", action.payload);
      // console.log("setting code....");
      return {
        ...state,
        code: action.payload,
      };

    case "SET_TOKENS":
      const { code } = state;
      // console.log("setting tokens....");
      const tokens_from_lexer = lexer(code);
      // console.log("tokens from lexer", tokens_from_lexer.length);
      if (tokens_from_lexer.length === 0) {
        // console.log("No tokens found....");
        return { ...state };
      }
      return {
        ...state,
        tokens: tokens_from_lexer,
      };

    case "SET_AST":
      const { tokens } = state;
      // console.log("setting ast....");
      if (tokens.length === 0) {
        // console.log("No tokens found in ast....");
        return { ...state };
      }
      const ast_from_parser = ParserAST(tokens);
      if (ast_from_parser === "") {
        return { ...state };
      }
      // console.log("ast from parser....", ast_from_parser);
      // console.log("tokens from parser", tokens);
      return {
        ...state,
        ast: ast_from_parser,
      };

    case "SET_TRASNFORMED_AST":
      const { ast } = state;
      if (typeof ast === "string") {
        return {
          ...state,
        };
      }
      console.log("setting transformed ast....");
      const transformed_ast = TransformerAST(ast);
      console.log("transformed ast....", transformed_ast);
      return {
        ...state,
        transformed: transformed_ast,
      };

    case "SET_SVG":
      const { transformed } = state;
      if (typeof transformed === "string") {
        return {
          ...state,
        };
      }
      const svg = generator(transformed);

      console.log("setting svg....", svg);

      return {
        ...state,
        svg: svg,
      };

    default:
      return state;
  }
}

export default function Home() {
  const [codeState, dispatch] = React.useReducer(
    codeReducer,
    initializeCodeState
  );

  function PerformTask() {
    var testCode: string =
      "Paper 95\nPen 1\nLine 50 15 85 80\nPen 30\nLine 85 80 15 80\nPen 70\nLine 15 80 50 15";
    console.log("Performing Task........");
    setUserCode(testCode);
    dispatch({ type: "SET_TOKENS", payload: [] }); // Dispatch action to update code state
    dispatch({ type: "SET_AST", payload: "" }); // Dispatch action to update ast state
    dispatch({ type: "SET_TRASNFORMED_AST", payload: "" }); // Dispatch action to update transformed ast state
    dispatch({ type: "SET_SVG", payload: "" }); // Dispatch action to update svg state
  }

  function setUserCode(code: string) {
    dispatch({ type: "SET_CODE", payload: code }); // Dispatch action to update code state
  }

  return (
    <main className="flex min-h-screen flex-col border-4 border-red-200 p-5  ">
      <CodeHeader
        codeState={codeState.code}
        setCodeState={setUserCode}
        handler={PerformTask}
      />
      <div className="flex flex-1">
        <div className=" border-4 flex flex-1 border-slate-300">
          <Lexer code={codeState.tokens}></Lexer>
        </div>
        <div className="flex flex-1 border-4 border-slate-500">
          <Parser code={codeState.ast}></Parser>
        </div>
        <div className="flex flex-1 border-4 border-amber-300">
          <Transformer code={codeState.transformed}></Transformer>
        </div>
        <div className="flex flex-1 border-4 border-amber-700">
          <GeneratorSVG code={codeState.svg} />
        </div>
      </div>
    </main>
  );
}
