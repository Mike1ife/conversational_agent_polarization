"use client";

import api from "@/src/api";
import { checkState } from "@/src/route";
import { useRouter } from "next/navigation";
import React from "react";

export default function Conversation({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);
    const router = useRouter();

    checkState(id, "conversation");

    const onNext = async () => {
        await api.user.advanceUserState(id, { state: "post_survey" });
        router.push(`/${id}/post-survey`);
    };

    return (
        <main className="flex flex-col items-start justify-center gap-12 px-80 py-8">
            <button className="btn-blue" onClick={onNext}>Next</button>
        </main>
    );
}
