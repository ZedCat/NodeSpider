var cheerio = require('cheerio');
var fs = require('fs');
var express = require('express');
var superagent = require('superagent');
var url = 'https://www.kuaishou.com/photo/3x6hdrttyupy5bc/3xmpkchxuppwq8m?f=pc_live';
var app = express()

app.get('/', function (req, res, next) {
    superagent.get(url)
        .end(function (err, sres) {
            if (err) throw Error(err);

            let $ = cheerio.load(sres.text);
            var arr = [];
            let all = $('.video').find('video').attr('src');
            arr.push({
                url: all

            })
            res.send(arr)
            console.log(arr)
        })
});

app.listen(8888, function () {
    console.log("打开localhost:8888查看");
});