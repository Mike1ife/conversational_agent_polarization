import api from "@/src/api";
import { UserState, ValidState } from "@/src/interfaces";
import { redirect } from "next/navigation";

const statePath: Record<ValidState, string> = {
    "not_started": "instruction",
    "pre_survey": "pre-survey",
    "conversation": "conversation",
    "post_survey": "post-survey",
    "complete": "thankyou"
};

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
