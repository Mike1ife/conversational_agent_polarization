export type ValidState = "not_started" | "pre_survey" | "conversation" | "post_survey" | "end";

export interface UserState {
    state: ValidState;
}