import Survey from "@/src/components/survey/Survey";
import { preSurveyPages } from "@/src/config/surveyConfig";
import React from "react";


export default function PreSurvey({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);

    return (
        <Survey id={id} surveyType="pre" surveyPage={preSurveyPages} />
    );
}