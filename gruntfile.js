module.exports = function(grunt) {

  // project configuration
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: {
          'web/assets/styles/all.css': 'src/styles/main.scss'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          // 'src/scripts/vendor/blazy.js',
          'src/scripts/main.js'
          ],
        dest: 'web/assets/scripts/all.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'web/assets/scripts/all.min.js': ['web/assets/scripts/all.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'src/images',
            src: '**',
            dest: 'web/assets/images/'
          }
        ]
      }
    },
    watch: {
      sass: {
        files: 'src/styles/*.scss',
        tasks: ['sass']
      },
      concat: {
        files: 'src/scripts/*.js',
        tasks: ['concat']
      },
      jshint: {
        files: 'src/scripts/main.js',
        tasks: ['jshint']
      }
    },
    jshint: {
      all: ['gruntfile.js', 'src/scripts/main.js']
    }
  });

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // register tasks
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'copy']);
  grunt.registerTask('dev', ['sass', 'concat', 'jshint', 'copy', 'watch']);

};
