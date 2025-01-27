import type { LlmFunction } from "app/utils/deepgramUtils";

export const accountSetupFunction: LlmFunction = {
  name: "setup_account",
  description: "Setup a new account for an aesthetic clinic in Aesthetic Record EMR. Collect basic information to create a new account.",
  parameters: {
    type: "object",
    properties: {
      firstname: {
        type: "string",
        description: "First name of the clinic owner"
      },
      lastname: {
        type: "string",
        description: "Last name of the clinic owner"
      },
      email_id: {
        type: "string",
        description: "Email address for the account"
      },
      contact_number_1: {
        type: "string",
        description: "Contact phone number with country code (e.g., +1xxxxxxxxxx)"
      },
      business_name: {
        type: "string",
        description: "Name of the aesthetic clinic or business"
      },
      business_address: {
        type: "string",
        description: "Street address of the business"
      },
      business_city: {
        type: "string",
        description: "City where the business is located"
      },
      business_state: {
        type: "string",
        description: "State where the business is located (e.g., TX)"
      },
      business_zip: {
        type: "string",
        description: "ZIP code of the business location"
      },
      business_suite_number: {
        type: "string",
        description: "Suite or unit number (if applicable)"
      }
    },
    required: [
      "firstname",
      "lastname",
      "email_id",
      "contact_number_1",
      "business_name",
      "business_address",
      "business_city",
      "business_state",
      "business_zip"
    ]
  }
}; 