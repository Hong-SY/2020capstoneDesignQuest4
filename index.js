const express = require('express')
const app = express()
const port = 8000

var dateFormat = require('dateformat');
bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
        var query = req.query;
        query.email = "yoon3784@naver.com";
        query.stuno = "20141600";
        query.time = dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss");
        query.ip = req.ip.replace(/^.*:/,'');
//        res.send(query);
        res.send(JSON.stringify(query));
});

app.post('/', function(req,res){
        var content=req.body;
        content.email = "yoon3784@naver.com";
        content.stuno = "20141600";
        content.time = dateFormat(new Date(), "yyy-mm-dd hh:MM:ss");
        content.ip = req.ip.replace(/^.*:/,'');
        res.send(JSON.stringify(content));
        //res.json(content);
});


app.get('/file', function(req,res){
        var fs = require('fs');
        var content = "api key: "+req.param("api_key")+", field1: "+req.param("field1")+"\n";

        fs.appendFile('filetest.txt', content, function(err){
                if(err) throw err;
                console.log('Saved');
        });
        res.writeHead("200",{"Content-Type":"text/html;charset=utf8"});
        res.write("저장 완료");

        res.end();
});

app.listen(port, () => console.log('Example app listening on port ${port}!'))
