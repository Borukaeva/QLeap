const path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, 'src/core/')
          ],
          indentedSyntax: false,
        },
        prependData:  '@import "@/assets/styles/app.scss";',
      },
    },
  },
  assetsDir: '@/assets/',
  

};