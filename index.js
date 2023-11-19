const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();

// Create a proxy middleware for /api/ backend
const apiProxy = createProxyMiddleware('/api', {
  target: 'http://localhost:8080',
  changeOrigin: false,
});

const fileProxy = createProxyMiddleware('/files', {
  target: 'http://localhost:8080',
  changeOrigin: false,
});

// Create a proxy middleware for / frontend
const rootProxy = createProxyMiddleware('/', {
  target: 'http://localhost:5173',
  changeOrigin: false,
});

// Enable CORS for all routes
app.use(cors());

app.use('/api', apiProxy);
app.use('/files', fileProxy);
app.use('/', rootProxy);


const port = 3000; 
app.listen(port, () => {
  console.log(`Reverse proxy server is running on port ${port}`);
});
