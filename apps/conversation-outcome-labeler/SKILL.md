Conversation Outcome Labeler

Purpose
Apply a concrete outcome label when a conversation is marked resolved.

Trigger
Conversation marked resolved.

Inputs
Final agent message text, resolution status.

Output
One outcome label:
Solved / Escalated / Deferred / Rejected / Workaround.

Example input
{
  "final_agent_message_text": "We will defer this request until next quarter.",
  "resolution_status": "resolved"
}

Example output
{
  "outcome": "Deferred"
}

Notes
Runs in demo mode.
Deterministic keyword-based logic.
No credentials required.
