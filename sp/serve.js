var cheerio = require('cheerio');
var fs = require('fs');
var superagent = require('superagent');


superagent.get("https://live.kuaishou.com/profile/3x6hdrttyupy5bc")
          .end(function(err, sres){
            // console.log(sres)
           if (sres.ok){
            // let that = sres.match(/VUE_MODEL_INIT_STATE.profileGallery=([\s\S]*?);/)[1];
            var regExp = /VUE_MODEL_INIT_STATE.profileGallery=([\s\S]*?);/g;
            
            // var that=str.match(regExp)
            var that = regExp.exec(sres);              
            
            console.log(that);
           }else{
             console.log('获取失败')
           }

           });







// JSON.parse(sres.match(/window.VUE_MODEL_INIT_STATE.profileGallery= ([\s\S]*?); /)[1]);
// var arr = [];
// var data = sres.text ;
// var temp=/window.\w.*}/;
// data = temp.exec(data) ;
// console.log(data)

// $(".ulist.focuslistnews").each(function(index, element) {
//   var $eleItem = $(element).find(".bold-item a");
//   var $eleItemSon = $(element).find(".bold-item ~ li a");
//   arr.push({
//     title: $eleItem.text(),
//     href: $eleItem.attr("href"),
//     item: {
//       title: $eleItemSon.text(),
//       href: $eleItemSon.attr("href")
//     }
//   });
// });
// res.send(arr);


// app.listen(8888, function() {
//   console.log("抓取成功!");
// });