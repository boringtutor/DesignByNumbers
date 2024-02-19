"use client";
import { lexer } from "@/compiler/lexer.server";
import Lexer from "@/components/lexer/lexer.client";
import CodeHeader from "@/components/header/codeHeader";
import React, { useEffect } from "react";
import ParserAST from "@/compiler/parser.server";
import Parser from "@/components/Parser/parser.client";
import { ParsedAstType } from "@/types/misc";

function codeReducer(state: string, action: any) {
  switch (action.type) {
    case "SET_CODE":
      return state.push();

    case "SET_TOKENS":
      return action.payload;

    case "SET_AST":
      return action.payload;

    case "SET_SVG":
      return action.payload;

    default:
      return state;
  }
}

const initialState = [{ code: "" }, { tokens: [] }, { ast: "" }, { svg: "" }];

export default function Home() {
  const [userCode, setUserCode] = React.useState<string>("");
  const [tokens, setTokens] = React.useState<any[]>([]);
  const [parsedAST, setParsedAST] = React.useState<ParsedAstType | string>("");
  const [codeState, dispatch] = React.useReducer(codeReducer, initialState);

  function PerformTask() {
    var testCode: string = "Paper 95\nPen 1\n"; //Line 50 15 85 80\nPen 30\nLine 85 80 15 80\nPen 70\nLine 15 80 50 15";
    console.log("Performing Task........");
    const t = lexer(testCode);
    setTokens((prev) => {
      return t;
    });
    setParsedAST((prev) => {
      return ParserAST(t);
    });
    // console.log("tokens are  => ", t);
  }
  // useEffect(()=>{

  // },[])

  return (
    <main className="flex min-h-screen flex-col border-4 border-red-200 p-5  ">
      <CodeHeader
        codeState={userCode}
        setCodeState={setUserCode}
        handler={PerformTask}
      />
      <div className="grow flex ">
        <div className="grow border-4 border-slate-300">
          <Lexer code={tokens}></Lexer>
        </div>
        <div className="grow border-4 border-slate-500">
          <Parser code={parsedAST}></Parser>
        </div>
        <div className="grow border-4 border-amber-300">Transformed AST</div>
        <div className="grow border-4 border-amber-700">Generated SVG Code</div>
      </div>
    </main>
  );
}
