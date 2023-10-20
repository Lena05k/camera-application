const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const mysql = require('mysql');


app.get('/', (req, res) => {
  res.send('HELLO POSTGRES + NODEJS!!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));