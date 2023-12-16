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
  title: String,
  link: String,
  image: String,
  content: String,
}, { collection: "news" });

const placesSchema = new mongoose.Schema({
  title: String,
  link: String,
  image: String,
  category: String,
  price: String,
}, { collection: "places" });

const NewsModel = mongoose.model('News', newsSchema);
const PlacesModel = mongoose.model('Places', placesSchema);

const getAllNews = async () => {
  try {
    const news = await NewsModel.find({});
    return news;
  } catch (error) {
    console.error('Error retrieving news:', error.message);
    throw error;
  }
};

const getAllPlaces = async () => {
  try {
    const places = await PlacesModel.find({});
    return places;
  } catch (error) {
    console.error('Error retrieving places:', error.message);
    throw error;
  }
};

module.exports = {
  connectToMongoDB,
  getAllNews,
  getAllPlaces,
  NewsModel,
  PlacesModel, // Thêm export cho PlacesModel
};
