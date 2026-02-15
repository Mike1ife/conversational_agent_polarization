import api from "@/src/api";
import Header from "@/src/components/Header";
import { redirect } from "next/navigation";

export default async function IdLayout({ params, children }: {
    params: Promise<{ id: string; }>;
    children: React.ReactNode;
}) {
    const { id } = await params;
    const response = await api.user.validateStudyID(id);
    if (!response.ok) redirect("/error");
    return (
        <>
            <Header id={id} />
            {children}
        </>
    );
}
