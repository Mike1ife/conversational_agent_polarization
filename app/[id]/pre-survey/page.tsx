import Survey from "@/src/components/survey/Survey";
import React from "react";
import { preSurveyPages } from "./surveyConfig";

export default function PreSurvey({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);

    return (
        <Survey id={id} surveyType="pre" surveyPage={preSurveyPages} />
    );
}