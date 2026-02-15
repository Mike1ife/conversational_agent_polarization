import { UserState } from "./interfaces";

// https://conversational-agent-polarization-b.vercel.app/docs
// const apiUrl = "https://conversational-agent-polarization-b.vercel.app";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const userAPI = {
    validateStudyID: async (studyID: string) => {
        const response = await fetch(`${apiUrl}/validate/${studyID}`);
        return response;
    },
    getUserState: async (studyID: string) => {
        const response = await fetch(`${apiUrl}/state/${studyID}`);
        const data: UserState = await response.json();
        return data;
    },
    advanceUserState: async (studyID: string, nextState: UserState) => {
        await fetch(`${apiUrl}/advance/${studyID}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(nextState),
        });
    }
};

export default {
    user: userAPI
};