'use strict';

class Modulite {

    constructor(opts){
        this.options = {};
        for(var key in opts){
            this.options[key] = opts[key];
        }
    }

    load(mod, path){
        var fs = require('fs');
        var nsobject = require('nsobject');
        path = path || this.options.path;
        var files = fs.readdirSync(path + '/' + mod + '/config');
        for(var i=0; i<files.length; i++){
            nsobject.create(mod.toUpperCase() + '.' + files[i].split('.')[0].toUpperCase(), require(process.cwd() + '/' + path + '/' + mod + '/config/' + files[i]));
        } 

        return require('require-all')({
            dirname: process.cwd() + '/' + path + '/' + mod + '/classes'
        });
    }

    static get_config(config){
        var nsobject = require('nsobject');
        return nsobject.get(config.toUpperCase());
    }

}

module.exports = Modulite;
