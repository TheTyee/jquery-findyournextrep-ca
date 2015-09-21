module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyright (c) 2015 <%= pkg.author %> under a BSD3 License.*/\n'
      },
      dist: {
        files: {
          // just minified
          'dist/js/<%= pkg.name %>.min.js': [ 'src/js/<%= pkg.name %>.js' ]
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    connect: {
      server: {
        options: {
          open: "http://localhost:8000/example",
          keepalive: true
        }
      }
    },
    watch: {
      scripts: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('demo', ['uglify', 'cssmin', 'connect']);
};
