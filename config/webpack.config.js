const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const packageJson = require('../package.json');

const reactAppName = packageJson.name;

const production = process.env.NODE_ENV === 'production';

console.log('APP NAME IS :::', reactAppName);
console.log('IS PRD???', production);
const srcPath = path.resolve('src');
console.log('src path ::: ', srcPath);

// 분리빌드 app 에서 사용하기 위한  manifest설정
const manifestConfig = {
  fileName: 'asset-manifest.json',
  publicPath: '/',
  generate: (seed, files) => {
    const manifestFiles = files.reduce((manifest, file) => {
      manifest[file.name] = file.path;
      return manifest;
    }, seed);

    return {
      files: manifestFiles,
      id: reactAppName,
    };
  },
};

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '...'], // ... 을 넣어야 default extions가 활성화되어 오류가안난다!
    modules: [srcPath, 'node_modules'], // import 할때 상대경로를 입력하지않으면 src 폴더를 우선적으로 찾음
  },
  devtool: production ? 'source-map' : 'inline-source-map', // production 일경우 source-map 처리
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../build'), // 현재폴터 ../build 폴더에 output 파일 생성
  },
  devServer: {
    hot: true,
    port: 3000,
    open: false,
    allowedHosts: 'all', // nginx 설정...
    historyApiFallback: true, // dev server router 새로고침시 404 에러 해결
    client: { logging: 'warn' },
  },
  optimization: production
    ? {
        minimize: true,
        minimizer: [new TerserPlugin()],
      }
    : {},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dist/index.html',
    }),
    new MiniCssExtractPlugin(),
    new WebpackManifestPlugin(manifestConfig),
  ],
};
