const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const userAPI = {
    validateStudyID: async (studyID: string) => {
        const response = await fetch(`${apiUrl}/validate/${studyID}`, {
            method: "GET",
        });

        return response;
    }
};

export default {
    user: userAPI
};