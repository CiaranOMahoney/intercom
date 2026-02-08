---
name: intercom-auto-tag-sentiment-analyzer
description: Auto-tag user sentiment by listening to new conversation messages and applying “positive” or “negative” tags in Intercom.
---

# Intercom Auto-Tag Sentiment Analyzer

## Prerequisites

- Node.js v14+ installed
- An Intercom admin access token with `tags` and `webhooks` scopes
- A registered webhook in your Intercom app pointing to this service's `/webhook` endpoint

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file with:

```dotenv
INTERCOM_ACCESS_TOKEN=your_intercom_access_token
PORT=3000        # optional, defaults to 3000
```

> **Note:** If `INTERCOM_ACCESS_TOKEN` is not set, the service will start in demo mode using a placeholder token (`demo-token`).
> API calls will log errors until a valid token is provided.



## Running

```bash
npm start
``` 

Service will listen for `conversation.user.created` webhooks, analyze the message sentiment, and tag the user as `positive` or `negative`.

## Testing

Simulate a webhook call:

```bash
curl -X POST http://localhost:3000/webhook \
  -H 'Content-Type: application/json' \
  -d '{"topic":"conversation.user.created","data":{"item":{"user":{"id":"123"},"conversation_message":{"body":"I love using Intercom!"}}}}'
```
