import Survey from "@/src/components/survey/Survey";
import React from "react";
import { postSurveyPages } from "../../../src/config/surveyConfig";

export default function PostSurvey({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);

    return (
        <Survey id={id} surveyType="post" surveyPage={postSurveyPages} />
    );
}