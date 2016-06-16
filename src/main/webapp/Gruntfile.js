module.exports = function(grunt) {

  grunt.initConfig({
    // js
    uglify: {
        targets: {
          files: [{
              expand: true,
              src: 'js/**/*.js',
              dest: 'build'
          }]
        }
      },
      
      // css
      cssmin: {
          minify: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.css'],
              dest: 'build/css',
              ext: '.css'
            }]
          },
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          combine: {
            files: {
              'build/css/styles.min.css': ['build/css/*.css']
            }
          }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);

};