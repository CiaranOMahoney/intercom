const http = require('http');

const PORT = process.env.PORT || 3000;
const INTERCOM_ACCESS_TOKEN = process.env.INTERCOM_ACCESS_TOKEN;

const intents = [
  { label: 'Billing', keywords: ['bill', 'billing', 'payment', 'invoice'] },
  { label: 'Bug', keywords: ['bug', 'error', 'issue', 'fail'] },
  { label: 'Feature', keywords: ['feature', 'request', 'enhancement'] },
  { label: 'Cancellation', keywords: ['cancel', 'termination', 'unsubscribe'] },
  { label: 'How-To', keywords: ['how to', 'help', 'guide'] },
];

function detectIntent(text) {
  const lower = text.toLowerCase();
  for (const intent of intents) {
    for (const keyword of intent.keywords) {
      if (lower.includes(keyword)) {
        return intent.label;
      }
    }
  }
  return 'Other';
}

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      let message;
      try {
        const payload = JSON.parse(body);
        message = payload.message || {};
      } catch (err) {
        res.statusCode = 400;
        return res.end('Invalid JSON');
      }

      const text = (message.body || '').toString();
      const intent = detectIntent(text);
      if (!INTERCOM_ACCESS_TOKEN) {
        console.log(`Demo mode: no INTERCOM_ACCESS_TOKEN provided.`);
        console.log(`Detected intent: ${intent}`);
      } else {
        // Real mode: here you would call Intercom API to assign intent label
        console.log(`Detected intent: ${intent}`);
      }
      res.end(intent);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Conversation Intent Classifier app listening on port ${PORT}`);
  if (!INTERCOM_ACCESS_TOKEN) {
    console.log('Running in demo mode (no Intercom credentials required)');
  } else {
    console.log('Intercom credentials detected');
  }
});
