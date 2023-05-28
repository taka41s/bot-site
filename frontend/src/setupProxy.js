const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
    app.use(createProxyMiddleware(
        '/api/v1/sign_up', {
            target: 'localhost:4000',
            changeOrigin: true
        }
    ))
}