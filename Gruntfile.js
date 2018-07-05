module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            nunjucks: {
                files: ['templates/**/*.html'],
                tasks: ['nunjucks']
            }
        },
        nunjucks: {
            options: {
                paths: "templates"
            },
            render: {
                files: [{
                    expand: true,
                    cwd: "templates",
                    src: [
                        "**/*.html"
                    ],
                    dest: "build",
                    ext: ".html"
                }]
            }
        },
        sass: {
            options: {
                sourceMap: false,
                outputStyle: 'expanded'
            },
            dist: {
                files: {
                    'css/application.css': 'sass/application.sass'
                }
            }
        }
    });
    grunt.registerTask('default', ['nunjucks', 'sass', 'watch']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nunjucks-2-html');
};
