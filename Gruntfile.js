/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
   // pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // This will minify all JS files
    
    uglify: {
      my_target: {
          files:{
              'dist/js/main.min.js': ['dist/js/main.js', 'dist/js/jquery.js', 'dist/js/bootstrap.js']
          }
          
      }
    },
      
    cssmin: {
        options: {
          shorthandCompacting: false,
          roundingPrecision: -1
        },
        target: {
            files: {
                'dist/css/main.min.css':['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
            }
           
        }
    },

 
    copy: {
      fonts: {
        cwd: 'bower_components/components-font-awesome/fonts',  
        src: '**',
        dest: 'dist/fonts/',
        expand: 'true',
      },
     
      bootCSS: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.css',
        dest: 'dist/css/bootstrap.css',
      },
      bootJS: {
        src: 'bower_components/bootstrap/dist/css/bootstrap.js',
        dest: 'dist/js/bootstrap.js',
      },
      fontCSS: {
        src: 'bower_components/components-font-awesome/css/font-awesome.css',
        dest: 'dist/css/font-awesome.css',
      },
      jqueryJS: {
         src: 'bower_components/jquery/dist/jquery.js',
        dest: 'dist/js/jquery.js',  
          
      },
      css: {
         src: 'css/main.css',
        dest: 'dist/css/main.css',  
          
      },
      js: {
         src: 'js/main.css',
        dest: 'dist/js/main.js',  
          
      },
       html: {
         src: 'index.html',
        dest: 'dist/index.html',  
          
      } 
    },
      clean:{
        css: ["dist/css/*.css", "!dist/css/*.min.css"],
        js: ["dist/js/*.js", "!dist/js/*.min.js"]  
          
      }
  });

  // These plugins provide necessary tasks.
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
 
  // Default task.
  grunt.registerTask('default', [ 'copy', 'uglify', 'cssmin', 'clean']);

};