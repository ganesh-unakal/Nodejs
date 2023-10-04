const http = require('http');

const server = http.createServer((req,res)=>{
   const url = req.url;
   if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body> <form action="/message" methods="POST"> <input type="text" name="message"> <button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();// this for not execute else Part
   }

   if(url==='/home') {
      res.write('<html>');
      res.write('<head><title>Home Page</title></head>');
      res.write('<body> <h1>Welcome Home</h1></body>');
      res.write('</html>');
      return res.end();
   }

   if(url==='/about') {
      res.write('<html>');
      res.write('<head><title>about page</title></head>');
      res.write('<body><h1>Welcome to About Us Page</h1></body>');
      res.write('</html>');
      return res.end();
   }

   if(url=== '/node') {
      res.write('<html>')
      res.write('<head><title>node page</title></head>');
      res.write('<body><h1>Welcome to my node js project</h1></body>')
      res.write('</html>')
      return res.end();
   }


   res.setHeader('Content-Type', 'text/html');
   res.write('<html>');
   res.write('<head><title> My First page </title></head>');
   res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
   res.write('</html>');
   res.end();
})

server.listen(4000);