# Intercom Auto-Tag Sentiment Analyzer

**Description:**
Automatically tags Intercom users as `positive` or `negative` based on sentiment analysis of their first conversation message.

---

## How it integrates with Intercom

- Uses Intercom Webhooks (topic: `conversation.user.created`) to receive new conversation messages.
- Calls the [Sentiment](https://www.npmjs.com/package/sentiment) library to compute a sentiment score.
- Applies or creates `positive`/`negative` tags via the Intercom REST API.

---

## Getting Started

### 1. Fork & Clone

```bash
git clone https://github.com/<your-account>/intercom-auto-tag-sentiment-analyzer.git
cd intercom-auto-tag-sentiment-analyzer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure

Copy `.env.example` to `.env` or create `.env`:

```bash
INTERCOM_ACCESS_TOKEN=your_intercom_token
PORT=3000
```

> **Note:** If `INTERCOM_ACCESS_TOKEN` is not set, the service will start in demo mode using a placeholder token (`demo-token`).
> API calls will fail until you supply a valid token.


### 4. Run the Service

```bash
npm start
```

### 5. Test Locally

Use the following `curl` command to simulate a webhook:

```bash
curl -X POST http://localhost:3000/webhook \
  -H 'Content-Type: application/json' \
  -d '{"topic":"conversation.user.created","data":{"item":{"user":{"id":"123"},"conversation_message":{"body":"Great product!"}}}}'
```

---

## Trac Payout Address

`TBD-UNIQUE-TRAC-ADDRESS`

---

## Registration

After confirming the app is runnable and tested, register it via a PR or issue in the competition registry with:

- **App Name:** Intercom Auto-Tag Sentiment Analyzer
- **Repo URL:** https://github.com/<your-account>/intercom-auto-tag-sentiment-analyzer
- **Short Description:** Auto-tags users based on message sentiment
- **Trac Address:** `TBD-UNIQUE-TRAC-ADDRESS`

---

*Competition deadline: Feb 12*