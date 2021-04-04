const { response } = require('express');
const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.listen(3000, () => console.log('listening at port 3000'));

app.get('/cryptocurrency/',async (request, response) => {
    // const api_url = `https://api.nomics.com/v1/currencies/ticker?key=ed642eaa8e3e9db1f3f6350cadbfc6a0&ids=BTC,ETH,XRP,LTC,BCH,ETC&interval=1d,30d&convert=USD&per-page=100&page=1`;
    const api_url =`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP,LTC,BCH,ETC&tsyms=USD,GBP,EUR,JPY,ZAR`
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
})
