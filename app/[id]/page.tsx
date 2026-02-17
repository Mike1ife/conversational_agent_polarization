import api from "@/src/api";
import { UserState } from "@/src/interfaces";
import { statePath } from "@/src/route";
import { redirect } from "next/navigation";

async function getUserPath(id: string) {
    const data: UserState = await api.user.getUserState(id);
    return statePath[data.state];
}

export default async function RootPage({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = await params;
    const nextPath = await getUserPath(id);
    if (!nextPath) redirect("/error");
    redirect(`/${id}/${nextPath}`);
}
