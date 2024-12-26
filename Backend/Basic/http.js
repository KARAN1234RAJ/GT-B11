/**
 * URL
 * http://example.com/signup
 * http://127.20.60.7:400/login
 * http://flipkart.com/shop/shirts
 * item===>shirt // param
 * Query params --> ?userId="122"&password="wdw;""
 *
 */
const http = require("http");
const server = http.createServer((req, res) => {
  // console.log("req method", req.method);
  console.log("req url", req.url);
  // console.log('req recieved');

  if (req.url === "/login") {
    res.write("Welcome to login Page!!");
  } else if (req.url === "/signup") {
    res.write("Welcome to signup Page!");
  } else {
    res.write("Welcome to generic Page!!");
  }
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
