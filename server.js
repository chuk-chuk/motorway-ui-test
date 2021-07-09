const app = require('express')();
const images = require('./src/images.json');

const port = process.env.REACT_APP_PORT || 5000
const url = process.env.REACT_APP_URL || "http://localhost:"

app.get('/images', ({ query }, res) => {
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;
  return res.status(200).json(i);
});

app.get(/^\/(car-images|avatars)\//, (req, res) => {
  res.status(200).sendFile(`public/${req.url}`, { root: __dirname });
});

app.listen(port, () => {
  process.stdout.write(`Server is available on ${url}${port}/\n`);
});
