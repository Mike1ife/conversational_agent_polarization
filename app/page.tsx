export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="flex w-full max-w-xl flex-col gap-4 rounded-xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-zinc-900">Study Entry</h1>
        <p className="text-zinc-600">
          Use the study link provided to you. It should include a study ID.
        </p>
      </div>
    </main>
  );
}
