# Conversation Intent Classifier Skill

## What the app does

On conversation creation, it assigns exactly one intent label from a fixed set (Billing, Bug, Feature, Cancellation, How-To, Other) based on explicit keyword matching in the initial customer message.

## How to install

```bash
npm install
```

## How to configure

Optionally set the `INTERCOM_ACCESS_TOKEN` environment variable for real mode; if not set, the app runs in demo mode without requiring credentials.

## How to run

```bash
npm start
```

## How to verify it is running

1. Check the console output for a startup confirmation and demo-mode status.
2. Send a POST request to `http://localhost:3000/webhook` with a JSON body containing a `message.body` field and observe the response and console logs for the detected intent label.
