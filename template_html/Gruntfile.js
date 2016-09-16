module.exports = function(grunt) {

        // iniciando configuração do grunt para o projeto

        /*
            - minificar arquivos js
            - minificar imagens
            - minificar e enxugar css
        */

        grunt.initConfig({
                uglify: {
                    options: {
                        mangle: false
                    },
                    my_target: {
                        files: {
                            'build/js/output.min.js': ['source/js/jquery.min.js', 'source/js/bootstrap.min.js', 'source/js/bootstrap/*.js', 'source/js/smooth-scroll.min.js', 'source/js/scrollReveal.js', 'source/js/isotope.min.js', 'source/js/jquery.flexslider-min.js', 'source/js/skrollr.min.js', 'source/js/lightbox.min.js', 'source/js/scripts.js' ]
                            }
                        }
                    },
                    uncss: {
                        dist: {
                            files: {
                                'source/index.html' : 'build/css/style.min.css'
                            }
                        },
                        options: {
                            compress: true
                        }
                    }
                });

            grunt.loadNpmTasks('grunt-contrib-uglify'); 
            grunt.loadNpmTasks('grunt-uncss');
            
            // definindo tarefa padrão (grunt)
            grunt.registerTask('default', ['uglify', 'uncss']);

        }