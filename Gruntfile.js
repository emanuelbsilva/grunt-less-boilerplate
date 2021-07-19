

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**/*.less'],
            dest: 'build',
            ext: '.css'
          }
        ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  
  grunt.registerTask('default', ['less']);
};