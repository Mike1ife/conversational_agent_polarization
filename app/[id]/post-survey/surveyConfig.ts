import { SurveyPage } from "@/src/interfaces";

export const postSurveyPages: SurveyPage[] = [
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
                name: "republicanStrength",
                question: "Would you call yourself a strong Republican or a not very strong Republican?",
                isDiscrete: true,
                valueLabels: ["Not very strong Republican", "Strong Republican"]
            },
            {
                type: "scale",
                name: "democratStrength",
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
                question: "How important is being a [Republican/Democrat] to you?",
                isDiscrete: false,
                min: 0,
                max: 100,
                milestones: [{ value: 0, label: "Not important at all" }, { value: 50, label: "Moderately important" }, { value: 100, label: "Extremely important" }]
            }
        ],
        note: "Note: On this and the following pages, text in square brackets is conditional on participants’ party identification. The text before the “/” will be shown to Republican participants. The text after the “/” wil be shown to Democratic participants. If other conditions are used, this will be specifically noted."
    },
    {
        questions: [
            {
                type: "choice",
                name: "attentionCheck",
                question: `To help keep track of who is paying attention, please select "Somewhat disagree" in the options below.`,
                options: ["Strongly agree", "Somewhat agree", "No opinion", "Somewhat disagree", "Strongly disagree"]
            }]
    },
];