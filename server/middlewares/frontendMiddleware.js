const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app, options) => {
  const isProd = JSON.stringify(process.env.NODE_ENV) === 'production';
  const apiUrl = process.env.API_URL || 'http://127.0.0.1:4066'; // Sử dụng giá trị mặc định cho dev
  const wssUrl = process.env.WSS_URL || 'ws://localhost:4066/'; // Sử dụng giá trị mặc định cho dev

  app.use(corsMiddlewares);

  if (isProd) {
    // Cấu hình cho môi trường sản xuất
    const addProdMiddlewares = require('./addProdMiddlewares');
    addProdMiddlewares(app, options);
  } else {
    // Cấu hình cho môi trường phát triển
    const webpackConfig = require('../../webpack/webpack.dev');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  // Proxy cho API và WebSocket
  app.use('/api', createProxyMiddleware({
    target: apiUrl,
    secure: false,
  }));
  
  app.use('/socket', createProxyMiddleware({
    target: wssUrl,
    secure: false,
    ws: true,
  }));

  return app;
};

function corsMiddlewares(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return next();
}