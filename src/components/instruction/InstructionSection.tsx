import React from "react";

export default function InstructionSection({ title, children, titleSize = "2xl" }: { title: string, children: React.ReactNode, titleSize?: "xl" | "2xl" | "3xl"; }) {
    const titleClasses = {
        "xl": "text-xl font-bold",
        "2xl": "text-2xl font-bold",
        "3xl": "text-3xl font-bold",
    };

    return (
        <div className="flex flex-col gap-6 w-full">
            <h1 className={titleClasses[titleSize]}>{title}</h1>
            <div className="text-lg w-full">{children}</div>
        </div>
    );
}