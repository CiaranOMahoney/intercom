Intercom app submission: Auto-Tag Sentiment Analyzer

Fork: https://github.com/CiaranOMahoney/intercom
Main repo: https://github.com/Trac-Systems/intercom

Trac address: trac1yxj0dk9w8wvjc3pw279xrkaettq5tpyy55f0zqhhhp4psruakf0qeqs007

Summary  
Auto-Tag Sentiment Analyzer applies a simple sentiment-based tag to a conversation based on the customer’s first message. It provides a deterministic signal that can be used for lightweight categorization without judging intent or urgency.

How it works  
- Triggered when a conversation is created  
- Reads the first customer message text  
- Applies a basic sentiment score using keyword polarity  
- Outputs a single tag: Positive or Negative  
- Runs in demo mode without credentials

Intercom integration  
- Operates on Intercom conversation message text  
- Uses message content only  
- Does not modify conversation flow or priority  
- Can be extended with an Intercom token for live tagging

Proof  

Server startup  
![Server startup](https://github.com/CiaranOMahoney/intercom/blob/main/apps/auto-tag-sentiment-analyzer/proof/01-server-start-and-log.png)

Request response  
![Request response](https://github.com/CiaranOMahoney/intercom/blob/main/apps/auto-tag-sentiment-analyzer/proof/02-request-response.png)

