const express = require('express');
const router = require('./routers/router')
const path = require('path');
const port = 3000;
const viewPath = path.join(__dirname, '../views');
const staticPath = path.join(__dirname, '../public');

const app = express();
app.set('view engine', 'ejs')
app.set('views', viewPath);
app.use(express.static(staticPath));
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`Listing Port : http://localhost:${port}`);
})