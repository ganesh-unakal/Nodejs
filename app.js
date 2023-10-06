const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   const url = req.url;
   const method = req.method;

   if (url === '/') {
      fs.readFile('message.txt',{encoding : 'utf-8'}, (err,data)=>{
         if (err) {
            console.log(err)
         }
         
         console.log(`data fetched, ${data}`);
         res.write('<html>');
         res.write('<head><title>Read and write from file</title></head>');
         res.write('<body>');
         res.write(`<h3>previous data : ${data} </h3>`)
         res.write(
            `<form action='/message' method='POST'>
            <input type='text' name='message'><button type ='submit'>send</button></form>`
          );
          res.write('</body>');
          res.write('</html>');
          return res.end();
      })
   }


   if(url==="/message" && method==="POST") {
      const body =[]
      req.on('data',(chunk)=>{
         console.log(chunk)
         body.push(chunk)
      })
     req.on('end',()=>{
         const parsedBody = Buffer.concat(body).toString();
         const message = parsedBody.split('=')[1];//1 is the 2nd element in the resulting array
         fs.writeFileSync('message.txt', message);//tz is depend on the incoming data so

      });


      res.statusCode=302; //3002 is stutus code which stands for redirection
      res.setHeader('Location', '/');
      return res.end()
   }
})

server.listen(4000);