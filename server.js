var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Pool = require('pg').Pool;

var config = {
    user: 'rashiahlawat',
    database : 'rashiahlawat',
    host : 'db.imad.hausra-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
    
};


var Pool = new Pool(config);
app.get('/test-db' ,function(err ,result)
{
    pool.query('SELECT * FROM article' , function(err,result)
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }else
        {
            res.send(JSON.stringify(result));
        }
    });
});

// var articles ={
//     'articleone' : {
//     title :'Article One | Imad Hausra',
//     heading : 'Article one',
//     date :'Feb 9, 2017',
//     content :`
//                     <p>
//                         This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
//                     </p>
//                     <p>
//                         This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
//                     </p>
//                     <p>
//                         This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.This is article one.
//                     </p>
//     `
//     },

//     'articletwo' : {
//     title :'Article Two | Imad Hausra',
//     heading : 'Article two',
//     date :'Feb 10, 2017',
//     content :`
//                     <p>
//                         This is article second.
//                     </p>
//     `
//  },

//  'articlethree' : {
//     title :'Article Three | Imad Hausra',
//     heading : 'Article three',
//     date :'Feb 19, 2017',
//     content :`
//                     <p>
//                         This is article third.
//                     </p>
//     `
//  }
// };



// function createTemplate(data){
// var title = data.title;
// var heading = data.heading;
// var date = data.date;
// var content = data.content;
// var htmlTemplate = `
// <html>
//     <head>
//         <title> ${title}</title>
//         <meta name= "viewport" content="width=device-width , initial-scale=1" />
//         <link href="/ui/style.css" rel="stylesheet" />
//     </head>
//     <body>
//         <div class="container">
//             <div>
//                 <a href="/">Home</a>
//             </div>
//             <hr/>
//             <h2>${heading}</h2>
//             <div>
//                 ${date}
//             </div>
//             <div>
//                 ${content}
//             </div>
//         </div>
//     </body>
    
// </html>
// `;

// return htmlTemplate;
// }


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter =0;
app.get('/counter', function (req, res) {
    counter = counter +1;
  res.send(counter.toString());
});


var nameLists = [];
app.get('/submit-name' , function(req ,res ){
   var responseName = req.query.name;
   nameLists.push(responseName);
   res.send(JSON.stringify(nameLists));
   
});
// app.get('/:articleName' , function(req, res){
//     var articleName = req.params.articleName;
//     res.send(createTemplate(articles[articleName]));
// });


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
