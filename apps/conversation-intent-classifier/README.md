name: conversation-intent-classifier
description: Assigns a deterministic intent label to a conversation based on explicit keyword rules.
---

# Conversation Intent Classifier

## What This App Does

This app assigns a single intent label to a conversation based on explicit keyword matching in the customer’s message.  
The possible labels are:

Billing  
Bug  
Feature  
Cancellation  
How-To  
Other  

The logic is fully deterministic and rule-based. No machine learning or scoring is used.

---

## How to Run (Demo Mode)

From this app folder:

npm install  
npm start  

The app will start on port 3000 and run in demo mode.

---

## Example Input

POST request to:

http://localhost:3000/webhook

With JSON body:

{
  "message": {
    "body": "I need help with billing"
  }
}

---

## Example Output

Billing

---

## How to Verify

When running in demo mode, the console logs the detected intent and the HTTP response returns the intent label as plain text.
