var h = require('http')
var url = require('url');
var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'PysChore'
});
con.connect((e)=>{
if(!e)
{
    var name, email, msg;
    var stmt = h.createServer(function(req,res){
        var http = require('http');
        res.writeHead(200, {'Content-Type': 'text/html'});
        var q = url.parse(req.url, true).query;
        name = q.name;
        email = q.email;
        msg = q.msg;
        var txt = name + " " + email + " "+ msg;
        res.end(txt);
        con.query('insert into Feedback values ',txt)
    })
}
})



