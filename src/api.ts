const apiUrl = process.env.API_URL;

const userAPI = {
    validateStudyID: async (studyID: string) => {
        const response = await fetch(`${apiUrl}/validate/${studyID}`, {
            method: "GET",
        });

        if (!response.ok) {
            const errorData = await response.json();
            const error = new Error(errorData.detail || `HTTP error! status: ${response.status}`);
            (error as any).status = response.status;
            throw error;
        }

        const data = await response.json();
        return data["message"];
    }
};

export default {
    user: userAPI
};