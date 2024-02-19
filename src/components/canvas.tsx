"use client";

import React from "react";

const Canvas = ({ code }: { code: string }) => {
  React.useEffect(() => {
    const codeContainer = document.getElementById("code-container");
    if (codeContainer) {
      codeContainer.innerHTML = code;
    }
  }, [code]);

  return (
    <div
      id="code-container"
      className="flex min-w-full justify-center items-center border-4"
    ></div>
  );
};

export default Canvas;
