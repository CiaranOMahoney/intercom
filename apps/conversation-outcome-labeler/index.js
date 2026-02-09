// Conversation Outcome Labeler
// Does not reopen conversations or validate the resolution.

const http = require('http');
const PORT = process.env.PORT || 3000;

const rules = [
  { label: 'Escalated', keywords: ['escalate', 'escalation'] },
  { label: 'Deferred', keywords: ['defer', 'deferred'] },
  { label: 'Rejected', keywords: ['reject', 'rejected'] },
  { label: 'Workaround', keywords: ['workaround'] }
];

function detectOutcome(text) {
  const lower = text.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some(k => lower.includes(k))) {
      return rule.label;
    }
  }
  return 'Solved';
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      let payload;
      try {
        payload = JSON.parse(body);
      } catch {
        res.statusCode = 400;
        return res.end('Invalid JSON');
      }
      const text = payload.final_agent_message_text || '';
      const outcome = detectOutcome(text);
      console.log(`Input: ${text}`);
      console.log(`Outcome: ${outcome}`);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ outcome }));
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Conversation Outcome Labeler listening on port ${PORT}`);
  console.log('Demo mode: no credentials required');
});
