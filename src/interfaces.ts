export type ValidState = "not_started" | "pre_survey" | "conversation" | "post_survey" | "complete";

export interface UserState {
    state: ValidState;
}

export interface SurveyResponses {
    responses: Record<string, string>;
}