const express = require('express');
const app = express();
const db = require('./models/webModels');
db.sequelize.sync().then(() => {
    console.log('Synced db.');
}).catch((err) => {
    console.log('Failed to sync db: ' + err.message);
});

// Парсинг тела запросов
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// успешно протестированно
app.use('/users', require('./routes/userRoutes'));
app.use('/reports', require('./routes/reportRoutes'));
app.use('/photos', require('./routes/photoRoutes'));
app.use('/videos', require('./routes/videoRoutes'));
app.use('/events', require('./routes/eventRoutes'));
// успешно протестированно
app.use('/locations', require('./routes/locationRoutes'));
// успешно протестированно
app.use('/weather', require('./routes/weatherRoutes'));
// успешно протестированно
app.use('/defects', require('./routes/defectRoutes'));
// успешно протестированно
app.use('/recommendations', require('./routes/recommendationRoutes'));
// успешно протестированно
app.use('/results', require('./routes/resultsRoutes'));

app.post('/api/items', (req, res) => {

    res.status(201).send('Item created'); // Отправка ответа
});

app.get('/api/items', (req, res) => {

    res.status(200).send('Items fetched'); // Отправка ответа
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
