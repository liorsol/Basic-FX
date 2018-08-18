import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import * as bodyParser from 'body-parser';

let app = express();

const compiler = webpack(webpackConfig)
const webpackDevMiddleware = webpackMiddleware(compiler, {
  hot: true,
  publicPath: compiler.publicPath,
  silent: true,
  stats: 'errors-only',
  noInfo: true
})
app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());

app.use('/', require("./router.js").router);
app.get('*', (req,res) => {
	res.sendFile(path.join(__dirname,'./index.html'));
});


app.listen(3000, () => console.log('running on localhost:3000'));