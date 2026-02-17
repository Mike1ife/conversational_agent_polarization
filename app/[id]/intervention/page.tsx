"use client";

import { checkState, routeToState } from "@/src/route";
import React from "react";

export default function Intervention({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);

    checkState(id, "intervention");

    return (
        <main className="flex flex-col items-start justify-center gap-12 px-80 py-8">
            <button className="btn-blue" onClick={() => routeToState(id, "post_survey")}>Next</button>
        </main>
    );
}
