"use client";

import api from "@/src/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PageProps = {
  params: {
    id: string;
  };
};

export default function IdPage({ params }: PageProps) {
  const router = useRouter();

  useEffect(() => {
    let isActive = true;

    const run = async () => {
      try {
        await api.user.validateStudyID(params.id);
        if (isActive) {
          router.replace(`/${params.id}/welcome`);
        }
      } catch {
        if (isActive) {
          router.replace("/error");
        }
      }
    };

    run();

    return () => {
      isActive = false;
    };
  }, [params.id, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50">
      <p className="text-zinc-600">Validating your study link...</p>
    </main>
  );
}
