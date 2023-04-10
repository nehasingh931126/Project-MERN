const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./model/http-error');

const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/user-routes');
const app = express();

app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

app.use('/api/places',placesRoutes);
app.use("/app/user", usersRoutes);

// this will be called when there is no route matching
app.use((req, res, next)=> {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next)=> {
  if(res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An Unknown error occured!'})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});