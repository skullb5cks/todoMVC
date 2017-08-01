// 네이버 Papago NMT API 예제
const express = require('express');
const app = express();
const client_id = 'oSRnwJhN_IM6evE9Mm6I';
const client_secret = '6TsXXFXQJU';
const query = '학교';

app.get('/translate', function (req, res) {
    console.log(req);
    const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
    const request = require('request');
    const options = {
        url: api_url,
        form: req.query,
        headers: {'X-Naver-Client-Id': client_id, 'X-Naver-Client-Secret': client_secret}
    };

    request.post(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
 });
 
 app.listen(3001, function () {
    console.log('http://127.0.0.1:3001/translate app listening on port 3000!');
 });