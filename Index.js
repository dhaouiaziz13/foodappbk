const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config()

const app = express();

app.use(cors());
app.use(morgan('tiny'))
app.use(express.json())
// test route
// app.get("/", (req, res) => {
//   res.send("hello");
// });


app.use('/api',require('./routes/userRoutes'))


app.listen(process.env.PORT || 5000, () => {
  console.log(`app running on port ${process.env.PORT || 5000}`);
});
