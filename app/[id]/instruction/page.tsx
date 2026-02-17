"use client";

import InstructionSection from "@/src/components/instruction/InstructionSection";
import { routeToState } from "@/src/route";

import React from "react";

export default function Instruction({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);

    return (
        <main className="flex flex-col items-center justify-center gap-12 px-80 py-8">
            <InstructionSection title="Study Information & Consent" titleSize="3xl">
                You are invited to participate in a research study about how people use AI assistants to engage with public issues. Please read the information below before deciding whether to take part.
            </InstructionSection>

            <InstructionSection title="Research Purpose">
                This study examines how people seek and interpret information when interacting with conversational AI systems. You will engage with an AI assistant on one public issue and answer a few questions before and after each interaction.
            </InstructionSection>

            <InstructionSection title="Procedures">
                <p>If you agree to participate, you will complete an online session that includes:</p>
                <ol className="list-decimal list-outside ml-12 space-y-2 mt-4">
                    <li>A brief questionnaire about your background and general opinions;</li>
                    <li>Short interactions with an AI assistant;</li>
                    <li>Follow-up questionnaires after interaction.</li>
                </ol>
                <p className="mt-4">The entire session will take approximately <strong>15–20 minutes</strong>.</p>
            </InstructionSection>

            <InstructionSection title="Risks and benefits">
                There are <strong>no anticipated risks</strong> associated with this study. While there are no direct personal benefits, your participation will help researchers better understand how people engage with information using AI tools.
            </InstructionSection>

            <InstructionSection title="Voluntary participation">
                Participation is <strong>completely voluntary</strong>. You may skip any question or stop participating at any time without penalty.
            </InstructionSection>

            <InstructionSection title="Confidentiality">
                Your responses will remain <strong>confidential</strong> and will be used only for research and educational purposes. No personally identifiable information will be collected or stored.
            </InstructionSection>

            <InstructionSection title="Contact Information">
                If you have any questions about this study, please contact the research team at: <strong>ge.min@northeastern.edu</strong>
            </InstructionSection>

            <InstructionSection title="Consent">
                <p>By clicking “Next” and beginning the survey, you indicate that:</p>
                <ul className="list-disc list-outside ml-12 space-y-2 mt-4">
                    <li>You are at least 18 years old,</li>
                    <li>You have read and understood the information above, and</li>
                    <li>You agree to take part in the study.</li>
                </ul>
            </InstructionSection>

            <div className="flex justify-start w-full space-x-3">
                <button
                    className="btn-blue"
                    onClick={() => routeToState(id, "pre_survey")}>
                    Next
                </button>
            </div>
        </main>
    );
}