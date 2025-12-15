const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitHub Actions + Jenkins + GitHub Actions V3");
}).listen(3000, () => {
  console.log("App running on port 3000");
});

