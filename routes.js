const requestHandler = (req, res) => {
   const { url, method } = req;
   if(url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html><head><title>First node app</title>");
      res.write("<body>");
      res.write("<h1>Hello folks!</h1>");
      res.write("<form action='/create-user' method='POST'><input name='username'/>");
      res.write("<button type='submit'>Submit</button></form>");
      res.write("</body>");
      res.write("</head></html>");
      return res.end();
   }
   if(url === "/users") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html><head><title>Users</title>");
      res.write("<body>");
      res.write("<h1>Users</h1>");
      res.write("<ul><li>Guna</li><li>Sekar</li><li>Anjali</li></ul>");
      res.write("</body>");
      res.write("</head></html>");
      return res.end();
   }
   if(url === "/create-user" && method === "POST") {
      const body =[];
      req.on("data", chunk => {
         body.push(chunk);
      })
      req.on('end', () => {
         const parsedBody = Buffer.concat(body).toString();
         const username = parsedBody.split("=")[1];
         console.log("Username: " + username);
         res.statusCode = 302;
         res.setHeader("Location", "/users");
         return res.end();
      })
   }
};

module.exports = {
   requestHandler
};