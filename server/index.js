const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');

const upload = multer();

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const port = process.env.PORT || 3000;

app.post('/api', upload.single('file'), (req, res) => {
  const fileContents = JSON.parse(req.file.buffer.toString());
  console.log('Dependencies', fileContents.dependencies);
  res.status(200).send('got your request, bruh');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
