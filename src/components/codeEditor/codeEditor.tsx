"use client";

import React from "react";
import AceEditor from "react-ace";

const CodeEditor = ({
  code = "",
  handler,
}: {
  code?: string;
  handler: (t: any) => void;
}) => {
  return (
    <div
      id="code-editor-container"
      className="flex flex-col bottom-4 border-rose-200 "
    >
      {/*  style={{"position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"}} */}

      <div id="code" className=" flex h-[300px] bg-red-300">
        <AceEditor height="360px" width="700px" onChange={handler} />
      </div>
    </div>
  );
};

export default CodeEditor;
