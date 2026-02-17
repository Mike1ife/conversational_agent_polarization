import { redirect } from "next/navigation";
import api from "./api";
import { UserState, ValidState } from "./interfaces";

export const statePath: Record<ValidState, string> = {
    "not_started": "instruction",
    "pre_survey": "pre-survey",
    "intervention": "intervention",
    "post_survey": "post-survey",
    "complete": "thankyou"
};

export const checkState = async (id: string, currState: ValidState) => {
    const userState: UserState = await api.user.getUserState(id);
    if (userState.state !== currState) {
        redirect(`/${id}`);
    }
};

export const routeToState = async (id: string, state: ValidState) => {
    await api.user.advanceUserState(id, { state: state });
    redirect(`/${id}/${statePath[state]}`);
};