"use client";

import { svgAstType } from "@/compiler/transformer.server";

function Transformer({ code }: { code: svgAstType | string }) {
  if (typeof code === "string") {
    return "no transformer code to display.";
  }
  console.log("Parser AST: ", code);
  return (
    <div className="grow border-4 border-slate-300">
      <h1>Transformer AST</h1>
      <div>
        <div className="px-4">{`"tag" : "${code.tag}"`}</div>
        <div className="px-4">{`"attr" : "${code.attr.width}"`}</div>
        <div className="px-4">{`"attr" : "${code.attr.height}"`}</div>
        <div className="px-4">{`"attr" : "${code.attr.version}"`}</div>
        <div className="px-4">{`"attr" : "${code.attr.viewBox}"`}</div>
        <div className="px-4">{`"attr" : "${code.attr.xmlns}"`}</div>
        {code.body.map((item, index) => {
          if (item.tag === "rect") {
            return (
              <div key={index}>
                <div className="px-4">{`"tag" : "${item.tag}"`}</div>
                <div className="px-4">{`"attr" : "${item.attr.width}"`}</div>
                <div className="px-4">{`"attr" : "${item.attr.height}"`}</div>
              </div>
            );
          } else if (item.tag === "line") {
            return (
              <div key={index}>
                <div className="px-4">{`"tag" : "${item.tag}"`}</div>
                <div className="px-4">{`"attr" : "${item.attr.x1}"`}</div>
                <div className="px-4">{`"attr" : "${item.attr.y1}"`}</div>
                <div className="px-4">{`"attr" : "${item.attr.x2}"`}</div>
                <div className="px-4">{`"attr" : "${item.attr.y2}"`}</div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Transformer;
