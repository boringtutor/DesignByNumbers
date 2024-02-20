"use client";

import { ParsedAstType } from "@/types/misc";

function Parser({ code }: { code: ParsedAstType | string }) {
  if (typeof code === "string") {
    return "no code to display.";
  }
  console.log("Parser AST: ", code);
  return (
    <div className="grow border-4 border-slate-300">
      <h1>Parser AST</h1>
      <div>
        {code.body.map((item, index) => {
          return (
            <div key={index}>
              <div className="px-4"> {`"type " : "${item.type}"`}</div>
              <div className="px-4">{`"name" : "${item?.name}"`}</div>
              <div>
                {item.arguments?.map((arg, index) => {
                  return (
                    <div key={index}>
                      <div className="px-8">{`"type" : "${arg.type}"`}</div>
                      <div className="px-8">{`"value" : "${arg.value}"`}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Parser;
