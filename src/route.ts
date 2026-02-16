
import { redirect } from "next/navigation";
import api from "./api";
import { UserState, ValidState } from "./interfaces";

export const checkState = async (id: string, currState: ValidState) => {
    const userState: UserState = await api.user.getUserState(id);
    if (userState.state !== currState) {
        redirect(`/${id}`);
    }
};