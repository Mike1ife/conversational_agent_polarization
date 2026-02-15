"use client";

import api from "@/src/api";
import InstructionSection from "@/src/components/InstructionSection";
import { useRouter } from "next/navigation";
import React from "react";

export default function InstructionPage({ params }: { params: Promise<{ id: string; }>; }) {
    const { id } = React.use(params);
    const router = useRouter();

    const onAgree = async () => {
        await api.user.advanceUserState(id, { state: "pre_survey" });
        router.push(`/${id}/pre-survey`);
    };

    return (
        <main className="flex flex-col items-center justify-center gap-12 px-80 py-8">
            <InstructionSection title="Study Information & Consent" titleSize="3xl">
                You are invited to participate in a research study about how people use AI assistants to understand and reflect on public issues. Please read the information below before deciding whether to take part.
            </InstructionSection>

            <InstructionSection title="Research Purpose">
                This study examines how people seek, interpret, and reflect on information when interacting with conversational AI systems. You will engage with an AI assistant on two different public issues and answer a few questions before and after each interaction.
            </InstructionSection>

            <InstructionSection title="Procedures">
                <p>If you agree to participate, you will complete an online session that includes:</p>
                <ol className="list-decimal list-outside ml-12 space-y-2 mt-4">
                    <li>A brief questionnaire about your background and general opinions;</li>
                    <li>Two short interactions with an AI assistant on different topics;</li>
                    <li>Follow-up questionnaires about each interaction.</li>
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
                <p>If you agree to participate, you will complete an online session that includes:</p>
                <ul className="list-disc list-outside ml-12 space-y-2 mt-4">
                    <li>A brief questionnaire about your background and general opinions;</li>
                    <li>Two short interactions with an AI assistant on different topics;</li>
                    <li>Follow-up questionnaires about each interaction.</li>
                </ul>
            </InstructionSection>

            <div className="flex justify-start w-full">
                <button
                    className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition-colors"
                    onClick={() => onAgree()}>
                    I Agree to Participate
                </button>
            </div>
        </main>
    );
}
