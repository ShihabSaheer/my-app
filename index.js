const http = require('http');
const os = require('os');

const PORT = 3000;

const renderPage = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CI/CD Demo App</title>
  <style>
    body {
      font-family: Arial, Helvetica, sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      margin: 0;
      padding: 0;
      color: #fff;
    }
    .container {
      max-width: 900px;
      margin: 80px auto;
      background: rgba(0, 0, 0, 0.25);
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    h1 {
      margin-top: 0;
      font-size: 2.5rem;
    }
    .info {
      margin-top: 20px;
      padding: 15px;
      background: rgba(255,255,255,0.1);
      border-radius: 8px;
    }
    footer {
      margin-top: 30px;
      font-size: 0.9rem;
      opacity: 0.8;
    }
    .badge {
      display: inline-block;
      background: #00e676;
      color: #000;
      padding: 6px 12px;
      border-radius: 20px;
      font-weight: bold;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🚀 CI/CD Demo Application</h1>
    <p>
      This app is deployed using <strong>GitHub Actions + Jenkins</strong>.
    </p>

    <span class="badge">Deployment Successful</span>

    <div class="info">
      <p><strong>Server Time:</strong> ${new Date().toLocaleString()}</p>
      <p><strong>Hostname:</strong> ${os.hostname()}</p>
      <p><strong>Node Version:</strong> ${process.version}</p>
      <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
    </div>

    <footer>
      <p>© ${new Date().getFullYear()} DevOps Pipeline Demo</p>
    </footer>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'UP' }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(renderPage());
});

server.listen(PORT, () => {
  console.log(`🚀 App running on http://localhost:${PORT}`);
});

