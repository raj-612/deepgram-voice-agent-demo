import { NextResponse } from "next/server";

const API_URL = "https://api.dev.arinternal.xyz/api/signup-basic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = [
      "firstname",
      "lastname",
      "email_id",
      "contact_number_1",
      "business_name",
      "business_address",
      "business_city",
      "business_state",
      "business_zip"
    ];

    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Prepare the request body with hardcoded values for required fields
    const requestBody = {
      ...body,
      business_suite_number: body.business_suite_number || "",
      business_country: "US",  // Hardcoded
      password: "",            // Empty as requested
      confirm_password: "",    // Empty as requested
      term_condition: 1,       // Hardcoded
      agree_checkbox: 1,       // Hardcoded
      invite_key: ""           // Empty as requested
    };

    console.log('Sending request to API:', JSON.stringify(requestBody, null, 2));

    // Make the API call
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    console.log('API Response:', {
      status: response.status,
      data: data
    });

    // Return the API response directly while maintaining our structure
    return NextResponse.json({
      success: data.success || data.status === 201,
      message: data.message || (data.status === 201 ? "Account created successfully" : "Error creating account"),
      data: data.data,
      details: data
    }, { 
      status: data.status || response.status 
    });

  } catch (error) {
    console.error("Error in account setup:", error);
    return NextResponse.json({ 
      success: false,
      error: "Internal server error",
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 