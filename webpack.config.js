const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};