require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const Sentiment = require('sentiment');

const app = express();
const port = process.env.PORT || 3000;
const providedToken = process.env.INTERCOM_ACCESS_TOKEN;
const accessToken = (providedToken && providedToken.trim() !== '')
  ? providedToken
  : 'demo-token';
const sentiment = new Sentiment();

if (!providedToken) {
  console.warn(
    'WARNING: INTERCOM_ACCESS_TOKEN not set. Using placeholder token for demo mode. API calls will fail unless you set a real token.'
  );
}

app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
  try {
    const { topic, data } = req.body;
    if (topic === 'conversation.user.created' && data?.item?.user?.id && data.item.conversation_message?.body) {
      const message = data.item.conversation_message.body;
      const score = sentiment.analyze(message).score;
      const tagName = score >= 0 ? 'positive' : 'negative';
      const userId = data.item.user.id;

      // Create or apply tag in one request (Intercom creates the tag if it doesn't exist)
      await axios.post(
        'https://api.intercom.io/tags',
        { name: tagName, users: [{ id: userId }] },
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      console.log(`Tagged user ${userId} as ${tagName} (score: ${score})`);
    }
    res.status(200).send('OK');
  } catch (err) {
    console.error('Error handling webhook:', err.response?.data || err.message || err);
    res.status(500).send('Error');
  }
});

app.listen(port, () => {
  console.log(`Intercom Auto-Tag Sentiment Analyzer listening on port ${port}`);
});
