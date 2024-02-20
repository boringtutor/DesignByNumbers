"use client";

export default function GeneratorSVG({ code }: { code: any }) {
  return (
    <div className="grow border-4 border-slate-300">
      <h1>SVG</h1>
      <div>{code}</div>
    </div>
  );
}
