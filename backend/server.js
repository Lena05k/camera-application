const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const db = require('./models');
db.sequelize.sync()
    .then(() => {
      console.log('Synced db.');
    })
    .catch((err) => {
      console.log('Failed to syns db: ' + err.message);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({requestBody: req.body})
    res.send('HELLO POSTGRES + NODEJS!!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

require('./router/repostRouter')(app);