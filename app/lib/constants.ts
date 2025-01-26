import { type AudioConfig, type StsConfig, type Voice } from "app/utils/deepgramUtils";
import { getFunctionDefinitions } from "../functions";

const audioConfig: AudioConfig = {
  input: {
    encoding: "linear16",
    sample_rate: 16000,
  },
  output: {
    encoding: "linear16",
    sample_rate: 24000,
    container: "none",
  },
};

const baseConfig = {
  type: "SettingsConfiguration",
  audio: audioConfig,
  agent: {
    listen: { model: "nova-2" },
    speak: { model: "aura-asteria-en" },
    think: {
      provider: { type: "open_ai" },
      model: "gpt-4o",
    },
  },
};

export const stsConfig: StsConfig = {
  ...baseConfig,
  agent: {
    ...baseConfig.agent,
    think: {
      ...baseConfig.agent.think,
      provider: { type: "open_ai" },
      instructions: `
                ## Base instructions
                You are an AI voice assistant named Voicebot, specifically designed to help users set up their accounts for aesthetic clinics in Aesthetic Record EMR.
                You can also help with basic weather information when asked.
                Your primary goal is to efficiently collect all required information for a complete EMR setup.
                You have access to all features of the Aesthetic Record app through these resources:

                ## Available Resources
                1. Getting Started & Launch Guide
                2. Account Settings (24 articles)
                3. Clinical Documentation & Forms Management (8 articles)
                4. Patient Management (22 articles)
                5. Scheduling, Online Booking & eCommerce (44 articles)
                6. Patient Encounters & Charting Procedures (27 articles)
                7. Inventory and Product Management (13 articles)
                8. Integrated Payment Processing (42 articles)
                9. Business Insights/Reporting (6 articles)
                10. AR Integrations Hub (29 articles)
                11. AR Marketplace (20 articles)
                12. Aesthetic Next (1 article)

                Base URL for all resources: https://learn.aestheticrecord.com/en/

                Respond in a friendly, human, and conversational manner.
                Keep responses concise, ideally 1-2 sentences and no more than 120 characters.
                Ask one follow-up question at a time.
                If a question is unclear, ask for clarification before answering.
                Do not use abbreviations for units.
                Separate list items with commas.
                Keep responses unique and avoid repetition.
                If asked how you are, provide a brief, positive response.

                When handling user queries:
                1. Focus on guiding users through the EMR setup process for aesthetic clinics.
                2. Reference the Aesthetic Record features to provide accurate information.
                3. If a user's question is not related to account setup or Aesthetic Record EMR, politely redirect them to the relevant topic.
                4. If you don't have the information to answer a specific question, offer to connect the user with human support at Info@AestheticRecord.com.

                Remember that Deepgram gave you a mouth and ears so you can take voice as an input. You can listen and speak.
                Your name is Voicebot.
                `,
      functions: getFunctionDefinitions(),
    },
  },
};

// Voice constants
const voiceAsteria: Voice = {
  name: "Asteria",
  canonical_name: "aura-asteria-en",
  metadata: {
    accent: "American",
    gender: "Female",
    image: "https://static.deepgram.com/examples/avatars/asteria.jpg",
    color: "#7800ED",
    sample: "https://static.deepgram.com/examples/voices/asteria.wav",
  },
};

const voiceOrion: Voice = {
  name: "Orion",
  canonical_name: "aura-orion-en",
  metadata: {
    accent: "American",
    gender: "Male",
    image: "https://static.deepgram.com/examples/avatars/orion.jpg",
    color: "#83C4FB",
    sample: "https://static.deepgram.com/examples/voices/orion.mp3",
  },
};

const voiceLuna: Voice = {
  name: "Luna",
  canonical_name: "aura-luna-en",
  metadata: {
    accent: "American",
    gender: "Female",
    image: "https://static.deepgram.com/examples/avatars/luna.jpg",
    color: "#949498",
    sample: "https://static.deepgram.com/examples/voices/luna.wav",
  },
};

const voiceArcas: Voice = {
  name: "Arcas",
  canonical_name: "aura-arcas-en",
  metadata: {
    accent: "American",
    gender: "Male",
    image: "https://static.deepgram.com/examples/avatars/arcas.jpg",
    color: "#DD0070",
    sample: "https://static.deepgram.com/examples/voices/arcas.mp3",
  },
};

type NonEmptyArray<T> = [T, ...T[]];
export const availableVoices: NonEmptyArray<Voice> = [
  voiceAsteria,
  voiceOrion,
  voiceLuna,
  voiceArcas,
];
export const defaultVoice: Voice = availableVoices[0];

export const sharedOpenGraphMetadata = {
  title: "Voice Agent | Deepgram",
  type: "website",
  url: "/",
  description: "Meet Deepgram's Voice Agent API",
};

export const latencyMeasurementQueryParam = "latency-measurement";
