import { ReactNode } from "react";

export interface InstructionItem {
    title: string;
    titleSize?: "xl" | "2xl" | "3xl";
    content: ReactNode;
}

export type SurveyType = "pre" | "post";
export type ValidState = "not_started" | "pre_survey" | "intervention" | "post_survey" | "complete";

export interface UserState {
    state: ValidState;
}

export interface SurveyResponses {
    responses: Record<string, string>;
}

export interface SurveyQuestion {
    type: 'choice' | 'scale' | 'rating';
    name: string;
    question: string;
    // Choice-specific
    options?: string[];
    // Rating-specific
    min?: number; // Continuous-scale shared
    max?: number; // Continuous-scale shared
    minLabel?: string;
    maxLabel?: string;
    allowNotApplicable?: boolean;
    // Scale-specific
    isDiscrete?: boolean;
    // Discrete-scale-specific
    initialIndex?: number;
    valueLabels?: string[];
    // Continuous-scale-specific
    milestones?: { value: number; label: string; }[];
}

export interface SurveyPage {
    questions: SurveyQuestion[];
    note?: string;
}