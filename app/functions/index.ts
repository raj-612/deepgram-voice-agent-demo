import type { LlmFunction } from "app/utils/deepgramUtils";
import { weatherFunction } from "./weather";

// Define all functions
const functions: LlmFunction[] = [
  weatherFunction,
  // Add more functions here
];

export function getFunctionDefinitions(): LlmFunction[] {
  return functions;
}