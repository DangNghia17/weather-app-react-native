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
const plancesSchema = new mongoose.Schema({
  name: String,
  location: String,
  image: String,
  rate: String,
},{collection : "plances"});

const NewsModel = mongoose.model('News', newsSchema);
const PlancesModel = mongoose.model('Plances', plancesSchema);

const getAllNews = async () => {
  try {
    const news = await NewsModel.find({});
    // console.log('News:', news);
    return news;
  } catch (error) {
    console.error('Error retrieving news:', error.message);
    throw error;
  }
};
const getAllPlances = async () => {
  try {
    const plances = await PlancesModel.find({});
    console.log('Plances:', plances);
    return plances;
  } catch (error) {
    console.error('Error retrieving news:', error.message);
    throw error;
  }
};

const main = async () => {
  try {
    await connectToMongoDB();
    const news = await getAllNews();
    const plances = await getAllPlances();
  } catch (error) {
    console.error('Main error:', error);
  }
};

main();

module.exports = {
  connectToMongoDB,
  getAllNews,
  getAllPlances
};
