type PageProps = {
  params: {
    id: string;
  };
};

export default function WelcomePage({ params }: PageProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50">
      <h1 className="text-2xl font-semibold text-zinc-900">
        Welcome for {params.id}
      </h1>
    </main>
  );
}
