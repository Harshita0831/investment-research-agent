export default function Navbar() {
  return (
    <nav className="border-b border-slate-700 bg-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-white">
          🤖 AI Investment Research Agent
        </h1>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          About
        </button>
      </div>
    </nav>
  );
}