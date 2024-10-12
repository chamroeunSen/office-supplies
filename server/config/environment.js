process.env.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/mern';
// this is docker i make so if install by local host use the top
// process.env.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://172.18.0.3:27017/mern';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;
process.env.SESSION_SECRET = process.env.SESSION_SECRET || 'mern';
