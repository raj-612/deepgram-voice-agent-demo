import type { LlmFunction } from "app/utils/deepgramUtils";
import { weatherFunction } from "./weather";
import { accountSetupFunction } from "./account";

// Define all functions
const functions: LlmFunction[] = [
  weatherFunction,
  accountSetupFunction,
  // Add more functions here
];

export function getFunctionDefinitions(): LlmFunction[] {
  return functions;
}