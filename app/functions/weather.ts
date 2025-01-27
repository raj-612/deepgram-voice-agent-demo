import type { LlmFunction } from "app/utils/deepgramUtils";

export const weatherFunction: LlmFunction = {
  name: "weather",
  description: "Get current weather for a location",
  parameters: {
    type: "object",
    properties: {
      location: {
        type: "string",
        description: "The city and state, e.g. San Francisco, CA"
      }
    },
    required: ["location"]
  }
}; 