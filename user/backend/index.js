const express = require('express');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');
const { HttpsProxyAgent } = require('https-proxy-agent');
const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/proxy', async (req, res) => {
  const proxyAgent = new HttpsProxyAgent('socks5://localhost:9050')
  const targetUrl = req.query.url; // Параметр запроса, содержащий целевой URL

  try {
    // Выполнение запроса к целевому серверу
    const response = await axios.get(targetUrl, {
      httpsAgent: proxyAgent
    });

    // Отправка ответа от целевого сервера обратно клиенту
    res.status(response.status).send(response.data);
    console.log('respstatus', response.status);
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при выполнении запроса:', error);
    res.status(500).send('Произошла ошибка при выполнении запроса');
  }
});
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});
app.use('/auth', authRouter);
mongoose.set('strictQuery', false);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://marciabridges290:qcFIkTXiKm08luYZ@cluster0.croomlt.mongodb.net/`
    );
    app.listen(PORT, () => console.log(`server start on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};
start();

