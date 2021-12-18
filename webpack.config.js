// const path = require('path');
import path from 'path'
module.exports = {
    // entry: ['./src/index.js', './src/register.js', './src/quiz.js'],
    entry: {
        index: './src/index.js',
        input: './src/quiz.js',
        input: './src/register.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development'
}