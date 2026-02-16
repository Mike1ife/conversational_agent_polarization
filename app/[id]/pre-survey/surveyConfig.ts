export interface SurveyQuestion {
    type: 'choice' | 'rating';
    name: string;
    question: string;
    // Choice-specific
    options?: string[];
    // Rating-specific
    min?: number;
    max?: number;
    minLabel?: string;
    maxLabel?: string;
}

export interface SurveyPage {
    questions: SurveyQuestion[];
}

export const preSurveyPages: SurveyPage[] = [
    {
        questions: [{
            type: "choice",
            name: "aiFrequency",
            question: "How often do you use AI tools such as ChatGPT, Gemini, or similar systems?",
            options: ["Never", "Less than once a month", "A few times per month", "A few times per week", "Daily or almost daily"],
        }]
    },
    {
        questions: [{
            type: "choice",
            name: "age",
            question: "What is your age?",
            options: ["18–24", "25–34", "35–44", "45–54", "55 or above", "Prefer not to say", "Under 18"]
        },
        {
            type: "rating",
            name: "familiarity",
            question: "How familiar are you with reading and writing in English?",
            min: 1,
            max: 5,
            minLabel: "Not familiar at all",
            maxLabel: "Extremely familiar"
        }]
    },
    {
        questions: [{
            type: "choice",
            name: "gender",
            question: "What is your gender?",
            options: ["Male", "Female", "Non-binary / third gender", "Prefer not to say"]
        }]
    }
];