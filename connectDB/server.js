

const express = require('express');
const cors = require('cors');
const { connectToMongoDB, getAllNews, getAllPlaces } = require('./db');
const { crawlAndSaveData,crawlAndSavePlaces } = require('./crawler');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/news', async (req, res) => {
  try {
    await connectToMongoDB();
    const news = await getAllNews();
    res.json(news);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/places', async (req, res) => {
  try {
    await connectToMongoDB();
    const places = await getAllPlaces();
    res.json(places);
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    // Khi server được khởi động, thực hiện crawl dữ liệu và lưu vào MongoDB
    await crawlAndSaveData();
    await crawlAndSavePlaces();
  } catch (error) {
    console.error('Error crawling and saving data during server start:', error);
  }
});
