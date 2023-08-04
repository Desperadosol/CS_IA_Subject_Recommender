export default async function createMessage(req, res) {
    const { userMessage } = req.body;
    const systemMessage = {
      role: 'system',
      content: 'You are an AI that recommends IB subjects. The user is required to take three higher level (HL) and three standard level (SL) subjects. The subjects must include one course from each of Groups 1-5, and either a Group 6 subject or an additional subject from Groups 1-5. The user must also take a second language, and Mathematics is compulsory. Provide your answer in the form of an ordered list of six subjects with no explanation.'
    };
    const messages = [systemMessage, { role: 'user', content: userMessage }];
    const apiKey = process.env.OPENAI_API_KEY;
    const url = 'https://api.openai.com/v1/chat/completions';
    const body = JSON.stringify({
      messages,
      model: 'gpt-3.5-turbo',
      stream: false,
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body,
      });
      const data = await response.json();
      res.status(200).json({ data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  