import Canvas from "@/components/canvas";
import CodeEditor from "@/components/codeEditor/codeEditor";
import CodeHeader from "@/components/header/codeHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col border-4 border-red-200 p-5  ">
      <CodeHeader />
      <div className="grow flex ">
        <div className="grow border-4 border-slate-300">Tokens</div>
        <div className="grow border-4 border-slate-500">Parsed AST</div>
        <div className="grow border-4 border-amber-300">Transformed AST</div>
        <div className="grow border-4 border-amber-700">Generated SVG Code</div>
      </div>
    </main>
  );
}
