const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const searchChatGPT = async (req, res) => {
  try {
    console.log("chicken");
    
    const { query } = req.body;
    console.log("Request body:"); // Debugging line
    console.log("Query received:", query); // Debugging line

    if (!query) {
      return res.status(400).json({ error: 'Query is required' });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // or "gpt-4" if you have access
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: query }
      ],
    });

    const result = response.choices[0].message.content;
    res.status(200).json({ result });

  } catch (error) {
    console.error('Error querying ChatGPT:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { searchChatGPT };
