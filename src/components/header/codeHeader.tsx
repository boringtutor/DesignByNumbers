"use client";
import React from "react";
import Canvas from "../canvas";
import CodeEditor from "../codeEditor/codeEditor";

const testCode = `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
<rect x="0" y="0" width="100" height="100" fill="rgb(0%, 0%, 0%)"></rect>
<line x1="50" y1="23" x2="22" y2="73" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
<line x1="22" y1="73" x2="78" y2="73" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
<line x1="78" y1="73" x2="50" y2="23" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
<line x1="77" y1="23" x2="77" y2="23" stroke="rgb(100%, 100%, 100%)" stroke-linecap="round"></line>
</svg>`;

function CodeHeader() {
  const [codeState, setCodeState] = React.useState("");
  function onCodeSubmit(value: any) {
    console.log("Code submitted: ", value);
    setCodeState(value);
  }
  return (
    <div className=" h-[400px] border-4 border-red-500 flex ">
      <div
        className={`flex-auto  flex justify-center align-middle border-4 border-purple-500`}
      >
        <Canvas code={testCode} />
      </div>
      <div className="flex felx-auto h-full border-4 border-pink-400">
        <CodeEditor handler={onCodeSubmit} />
      </div>
    </div>
  );
}

export default CodeHeader;
