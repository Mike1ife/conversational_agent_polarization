export interface SurveyQuestion {
    type: 'choice' | 'scale' | 'rating';
    name: string;
    question: string;
    // Choice-specific
    options?: string[];
    // Rating-specific
    min?: number;
    max?: number;
    minLabel?: string;
    maxLabel?: string;
    allowNotApplicable?: boolean;
    // Scale-specific
    isDiscrete?: boolean;
    initialIndex?: number; // Optional
    valueLabels?: string[];
}

export interface SurveyPage {
    questions: SurveyQuestion[];
}

export const preSurveyPages: SurveyPage[] = [
    {
        questions: [
            {
                type: "choice",
                name: "gender",
                question: "What is your gender?",
                options: ["Male", "Female", "Non-binary / third gender", "Prefer not to say"]
            },
            {
                type: "choice",
                name: "age",
                question: "What is your age?",
                options: ["18–24", "25–34", "35–44", "45–54", "55 or above", "Prefer not to say", "Under 18"]
            },]
    },
    {
        questions: [
            {
                type: "choice",
                name: "aiFrequency",
                question: "How often do you use AI tools such as ChatGPT, Gemini, or similar systems?",
                options: ["Never", "Less than once a month", "A few times per month", "A few times per week", "Daily or almost daily"],
            },
            {
                type: "rating",
                name: "politicalOrientation",
                question: "How would you describe your political orientation?",
                min: 1,
                max: 7,
                minLabel: "Very conservative",
                maxLabel: "Very liberal",
                allowNotApplicable: true
            }]
    },
    {
        questions: [
            {
                type: "scale",
                name: "strongRepublican",
                question: "Would you call yourself a strong Republican or a not very strong Republican?",
                isDiscrete: true,
                valueLabels: ["Not very strong Republican", "Strong Republican"]
            },
            {
                type: "scale",
                name: "strongDemocrat",
                question: "Would you call yourself a strong Democrat or a not very strong Democrat?",
                isDiscrete: true,
                valueLabels: ["Not very strong Democrat", "Strong Democrat"]
            },
            {
                type: "scale",
                name: "closerParty",
                question: "Do you think of yourself as closer to the Republican Party or the Democratic Party?",
                isDiscrete: true,
                initialIndex: 1,
                valueLabels: ["Closer to Republican Party", "Neither", "Closer to Democratic Party"]
            }]
    },
    {
        questions: [
            {
                type: "scale",
                name: "partisanshipStrength",
                question: "Would you call yourself a strong Republican or a not very strong Republican?",
                isDiscrete: false,
                valueLabels: Array.from({ length: 101 }, (_, index) => index.toString())
            }
        ]
    },
];