module.exports = function(grunt) {
  grunt.task.loadNpmTasks('assemble');
  grunt.initConfig({
    assemble: {
      site: {
        options: {
          data: ['config.yml'],
          flatten: true
        },
        files: [
          {
            src: 'src/pages/**/*.hbs',
            dest: 'dest/'
          }
        ]
      }
    }
  });
  grunt.registerTask('default', ['assemble']);
};
