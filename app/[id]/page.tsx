import api from "@/src/api";
import { redirect } from "next/navigation";
import React from "react";

async function getNextPath(id: string) {
    return "welcome";
}

export default async function IdPage({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = await params;
    const nextPath = await getNextPath(id);
    if (!nextPath) redirect("/error");
    redirect(`/${id}/${nextPath}`);
}
