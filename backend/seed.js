import seeder from 'mongoose-seed';
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

seeder.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true
}, function () {

  // Load Mongoose models
  seeder.loadModels([
    './models/Banner',
    './models/Category',
    './models/Image',
    './models/Product',
    './models/Trending',
    './models/User'
  ]);

  // Clear specified collections
  seeder.clearModels(['Banner', 'Category', 'Image', 'Product', 'Trending', 'User'], function () {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });

  });
});

const data = [
    {
        'model': 'User',
        'documents': [
            
        ]
    }
]

