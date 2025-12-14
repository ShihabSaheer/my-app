const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from GitHub Actions + Jenkins 🚀");
}).listen(3000, () => {
  console.log("App running on port 3000");
});

