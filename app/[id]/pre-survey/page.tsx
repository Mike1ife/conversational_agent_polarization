"use client";

import api from "@/src/api";

import { checkState, routeToState } from "@/src/route";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { preSurveyPages, SurveyQuestion } from "./surveyConfig";
import ChoiceQuestion from "@/src/components/survey/ChoiceQuestion";
import DiscreteScaleQuestion from "@/src/components/survey/DiscreteScaleQuestion";
import RatingQuestion from "@/src/components/survey/RatingQuestion";

export default function PreSurvey({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);
    const router = useRouter();

    checkState(id, "pre_survey");

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [responses, setResponses] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitPreSurvey = async (finalResponses: Record<string, string>) => {
        setIsSubmitting(true);
        try {
            await api.preSurvey.savePreSurvey(id, { responses: finalResponses });
            routeToState(id, "intervention");
        } catch (error) {
            console.error('Error submitting survey:', error);
            router.push(`/${error}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNextClick = (e: React.SubmitEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const newResponses = { ...responses };
        preSurveyPages[currentPage].questions.forEach(q => {
            const value = formData.get(q.name) as string;
            if (value) newResponses[q.name] = value;
        });
        setResponses(newResponses);

        if (currentPage !== preSurveyPages.length - 1) {
            setCurrentPage(prev => prev + 1);
        } else {
            submitPreSurvey(newResponses);
        }
    };

    const renderQuestion = (q: SurveyQuestion) => {
        switch (q.type) {
            case 'choice':
                return (
                    <ChoiceQuestion
                        key={q.name}
                        name={q.name}
                        question={q.question}
                        options={q.options || []}
                        selectedValue={responses[q.name]}
                    />
                );
            case 'scale':
                return (
                    <DiscreteScaleQuestion
                        key={q.name}
                        name={q.name}
                        question={q.question}
                        valueLabels={q.valueLabels || []}
                        initialIndex={q.initialIndex || 0}
                        selectedValue={responses[q.name]}
                    />
                );
            case 'rating':
                return (
                    <RatingQuestion
                        key={q.name}
                        name={q.name}
                        question={q.question}
                        min={q.min || 1}
                        max={q.max || 5}
                        minLabel={q.minLabel || ""}
                        maxLabel={q.maxLabel || ""}
                        allowNotApplicable={q.allowNotApplicable || false}
                        selectedValue={responses[q.name]}
                    />
                );
        }
    };


    return (
        <main className="mx-100 my-10 space-y-6">
            <div className="mb-6">
                <p className="text-sm text-zinc-600 mb-2">Page {currentPage + 1} of {preSurveyPages.length}</p>
                <div className="w-full bg-zinc-200 rounded-full h-2">
                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-200"
                        style={{ width: `${((currentPage + 1) / preSurveyPages.length) * 100}%` }}
                    />
                </div>
            </div>

            <h1 className="text-3xl font-bold">Pre-Survey</h1>

            <form onSubmit={handleNextClick} className="space-y-6">
                {preSurveyPages[currentPage].questions.map(renderQuestion)}
                <div className="space-x-10">
                    {currentPage > 0 && <button
                        type="button"
                        className="btn-zinc"
                        onClick={() => { setCurrentPage(prev => prev - 1); }}>
                        Back
                    </button>}

                    <button
                        type="submit"
                        className="btn-blue"
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Submitting..."
                            : currentPage < preSurveyPages.length - 1 ? "Next" : "Submit"}
                    </button>
                </div>
            </form>
        </main>
    );
}