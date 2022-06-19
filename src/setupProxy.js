const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware("/competitions", {
            target: "https://api.football-data.org/v4",
            changeOrigin: true
        })
    )
}