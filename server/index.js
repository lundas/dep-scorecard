require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const controllers = require('./controllers');

const upload = multer();

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 3000;

app.post('/api', upload.single('file'), controllers.processFile);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
