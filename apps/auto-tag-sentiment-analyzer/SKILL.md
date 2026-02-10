# Auto-Tag Sentiment Analyzer Skill

What the app does:
Assigns a simple sentiment label (positive or negative) based on the first message in a conversation.

How to run in demo mode:
npm install
npm start

Example input:
{
  "first_message_text": "I really love using your product!"
}

Example output:
{
  "sentiment": "positive"
}

How to verify it is running:
Check the console output for the received message text and the computed sentiment label. The HTTP response returns the sentiment result as JSON.
