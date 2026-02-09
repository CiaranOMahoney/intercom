# Conversation Outcome Labeler Skill

What the app does:
Applies a human-readable outcome label (Solved, Escalated, Deferred, Rejected, Workaround) based on keywords in the final agent message when a conversation is marked resolved.

How to run in demo mode:
```
npm install
npm start
```

Example input:
```json
{ "final_agent_message_text": "We will defer this request until next quarter.", "resolution_status": "resolved" }
```

Example output:
```json
{ "outcome": "Deferred" }
```

How to verify it is running:
Check console logs for the input text and computed outcome; the HTTP response returns the outcome JSON.
