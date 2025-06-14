const logger = require("firebase-functions/logger");
const { onRequest } = require("firebase-functions/v2/https");

const TEST_URL = process.env.TEST_URL || "https://webhook.site/test";

exports.testWebhook = onRequest((req, res) => {
  logger.info("Test webhook function triggered");
  logger.info("Test URL:", TEST_URL);
  
  res.json({ 
    message: "Extension test successful",
    timestamp: new Date().toISOString(),
    testUrl: TEST_URL
  });
});