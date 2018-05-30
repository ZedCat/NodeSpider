var http = require('https');
//定义函数
var getAHref = function(htmlstr){
    var reg = /<a.+?href=('|")?([^'"]+)('|")?(?:\s+|>)/gim;
    var arr = [];
    while(tem=reg.exec(htmlstr)){
        arr.push(tem[2]);
    }
    return arr;
    console.log(arr)
}


var qHref = "https://live.kuaishou.com/profile/3x6hdrttyupy5bc";//设置被查询的目标网址
    var req = http.get(qHref, function(res) {
    var pageData = "";
    res.setEncoding('utf8');
    res.on('error', function (errget) {
           //出错处理
    });
    res.on('data', function (chunk) {
           pageData += chunk;
    });

    res.on('end', function(){
        //   console.dir(pageData);
          var content = pageData;//获取到网页内容
          var hrefs=getAHref(content);//获取链接

    });

});