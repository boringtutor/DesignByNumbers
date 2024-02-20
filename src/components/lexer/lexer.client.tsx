"use client";
function Lexer({ code }: { code: string[] }) {
  return (
    <div className="grow border-4 border-slate-300">
      <h1>Tokens</h1>
      <ul>
        <div>{`[`}</div>
        {code.map((token, i) => {
          return (
            <div key={i}>
              <div className="ml-2">{`{`}</div>
              <li className="ml-4">{`"type" : "${token.type}"`}</li>
              <li className="ml-4">{`"value" : "${token.value}"`}</li>
              <div className="ml-2">{`}`}</div>
            </div>
          );
        })}
      </ul>
      <div>{`]`}</div>
    </div>
  );
}

export default Lexer;
