const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitHub Actions + Jenkins + GitHub Actions V1");
}).listen(3000, () => {
  console.log("App running on port 3000");
});

