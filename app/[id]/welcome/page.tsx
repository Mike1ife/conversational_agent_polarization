"use client";

import React from "react";

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default function WelcomePage({ params }: PageProps) {
    const { id } = React.use(params);

    return (
        <main className="flex min-h-screen items-center justify-center bg-zinc-50">
            <h1 className="text-2xl font-semibold text-zinc-900">
                Welcome for {id}
            </h1>
        </main>
    );
}
