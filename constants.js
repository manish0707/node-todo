require('dotenv').config();

const DATABASE_PATH = process.env.MONGODB_URL;

if(!DATABASE_PATH) {
  throw new Error("Please set database url path in environment variables!");
}

module.exports = {
  DATABASE_PATH,
};
