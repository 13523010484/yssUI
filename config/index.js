'use strict';
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

//const uri = 'http://180.167.198.186:19005/'; //开发环境
const uri = 'http://dmp.ysstech.com:19005/'; //版本环境
//const uri = 'http://10.10.90.235:18000/'; //内网环境

module.exports = {
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/ams': {
        target: 'http://180.167.198.186:18000/',
        changeOrigin: true,
        pathRewrite: {
          '^/ams': '/ams'
        }
      },
      '/dynamicRoute': {
        target: uri,
        changeOrigin: true,
        pathRewrite: {
          '^/dynamicRoute': ''
        }
      },
      '/ams/yss-cockpit-server': {
        target: uri,
        changeOrigin: true,
        pathRewrite: {
          '^/ams/yss-cockpit-server': ''
        }
      },
      '/ams/yss-lifecycle-flow': {
        target: uri,
        changeOrigin: true,
        pathRewrite: {
          '^/ams/yss-lifecycle-flow': ''
        }
      },
      '/ams/ams-base-parameter': {
        target: uri,
        changeOrigin: true,
        pathRewrite: {
          '^/ams/ams-base-parameter': ''
        }
      },
      '/ams/ams-file-service': {
        target: 'http://180.167.198.186:18000/',
        changeOrigin: true,
        pathRewrite: {
          '^/ams/ams-file-service': ''
        }
      },
      '/ams/yss-awp-server': {
        target: 'http://180.167.198.186:18000/',
        changeOrigin: true,
        pathRewrite: {
          '^/ams/yss-awp-server': ''
        }
      },
      '/ams/yss-data-relay': {
        target: 'http://180.167.198.186:19023/',
        changeOrigin: true,
        pathRewrite: {
          '^/ams/yss-data-relay': ''
        }
      }
      // '/oaAnnounce': {
      //   target: `http://58.34.80.43:18000`, // uat
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/oaAnnounce': '/dmp/ams/yss-cockpit-server/oaAnnounce'
      //   }
      // }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 19005, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: './',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
};
