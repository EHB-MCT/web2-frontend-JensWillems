const path = require('path');

module.exports = {
    // entry: ['./src/index.js', './src/register.js', './src/quiz.js'],
    entry: {
        index: './src/index.js',
        quiz: './src/quiz.js',
        register: './src/register.js',
        yourScore: './src/yourScore.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development'
}