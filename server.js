const express = require('express');
const cors = require('cors');
const { connectToMongoDB, getAllNews } = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/news', async (req, res) => {
  try {
    await connectToMongoDB();
    const news = await getAllNews();
    res.json(news);
    console.log(news)
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

