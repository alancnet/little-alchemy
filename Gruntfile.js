var grunt = require('grunt');
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    babel: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'dist/little-alchemy.js': 'little-alchemy.js',
                'dist/recipes.js': 'recipes.js'
            }
        }
    }
});

grunt.registerTask('default', ['babel']);