const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://meaning17:17102002@cluster0.ystctum.mongodb.net/weatherapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection) {
      console.log('Connected to MongoDB Atlas');
    } else {
      console.error('Error connecting to MongoDB Atlas');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  }
};


const newsSchema = new mongoose.Schema({
  content: String,
  image: String,
},{collection : "news"});

const NewsModel = mongoose.model('News', newsSchema);

const getAllNews = async () => {
  try {
    const news = await NewsModel.find({});
    console.log('News:', news);
    return news;
  } catch (error) {
    console.error('Error retrieving news:', error.message);
    throw error;
  }
};

const main = async () => {
  try {
    await connectToMongoDB();
    const news = await getAllNews();
  } catch (error) {
    console.error('Main error:', error);
  }
};

main();

module.exports = {
  connectToMongoDB,
  getAllNews,
};
