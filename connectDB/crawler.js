const axios = require('axios');
const cheerio = require('cheerio');
const {connectToMongoDB, NewsModel, PlacesModel} = require('./db'); // Import NewsModel và PlancesModel từ db.js

const crawlAndSaveData = async () => {
  try {
    // Thực hiện yêu cầu HTTP để lấy HTML từ trang web
    const response = await axios.get('https://vov.vn/du-bao-thoi-tiet?page=0');
    // const response = await axios.get('https://vov.vn/search?keyword=thoi+tiet&category=All&date=week');
    const html = response.data;

    // Sử dụng Cheerio để phân tích HTML
    const $ = cheerio.load(html);

    // Lấy thông tin cần thiết từ các phần tử HTML
    const articles = [];
    $('.article-media').each((index, element) => {
      const title = $(element).find('.media-title').text().trim();
      const link = $(element).find('.vovvn-title').attr('href');
      const image = $(element).find('img').attr('src');
      const content = $(element).find('p').text().trim();

      articles.push({title, link, image, content});
    });

    // Lưu dữ liệu vào MongoDB
    await connectToMongoDB();

    // Xóa dữ liệu cũ trước khi insert mới
    await NewsModel.deleteMany({});

    // Insert dữ liệu mới vào MongoDB
    await NewsModel.insertMany(articles);
    console.log('Data crawled News and saved to MongoDB');
  } catch (error) {
    console.error('Crawling and saving data error:', error);
  }
};

const crawlAndSavePlaces = async () => {
  try {
    // Thực hiện yêu cầu HTTP để lấy HTML từ trang web
    const response = await axios.get('https://fiditour.com/?s=+&jet_ajax_search_settings=%7B%22search_source%22%3A%22post%22%2C%22search_taxonomy%22%3A%22post_tag%22%2C%22include_terms_ids%22%3A%5B%2219%22%2C%2220%22%2C%2254%22%2C%2247%22%5D%2C%22results_order_by%22%3A%22relevance%22%2C%22results_order%22%3A%22desc%22%2C%22search_in_taxonomy%22%3A%22yes%22%2C%22search_in_taxonomy_source%22%3A%5B%22post_tag%22%5D%7D&post_type=post');
    const html = response.data;

    // Sử dụng Cheerio để phân tích HTML
    const $ = cheerio.load(html);

    // Lấy thông tin từ các phần tử HTML
    const places = [];
    $('article.post').each((index, element) => {
      const title = $(element).find('h3.entry-title a').text().trim();
      const link = $(element).find('h3.entry-title a').attr('href');

      // Kiểm tra và lấy đường dẫn hình ảnh từ thuộc tính data-src
      const imageElement = $(element).find('.blog-media img');
      let image = '';

      if (imageElement.length > 0) {
        image = imageElement.attr('data-src') || imageElement.attr('src');

        const isSVG = image && image.toLowerCase().includes('.svg');

        // Nếu là SVG, gán giá trị trống
        if (isSVG) {
          image = '';
        }
      }

      const category = $(element).find('.entry-meta .category-link a').text().trim();
      const price = $(element).find('p:contains("VND")').text().trim();

      places.push({title, link, image, category, price});
    });


    // Lưu dữ liệu vào MongoDB
    await connectToMongoDB();

    // // Xóa dữ liệu cũ trước khi insert mới
    await PlacesModel.deleteMany({});

    // Insert dữ liệu mới vào MongoDB
    await PlacesModel.insertMany(places);
    // console.log(places)
    console.log('Data crawled Places and saved to MongoDB');
  } catch (error) {
    console.error('Crawling and saving data error:', error);
  }
};

module.exports = {
  crawlAndSaveData,
  crawlAndSavePlaces
};
