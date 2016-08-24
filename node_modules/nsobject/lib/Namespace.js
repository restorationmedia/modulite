'use strict';

class Namespace {
    static create(key, config){
        if( !Namespace.exists(key) ){
            Namespace.set(key, config);
        }

        return Namespace.get(key);
    }
        
    static exists(key){
        return (Object.getOwnPropertySymbols(global).indexOf(Namespace.makeSymbol(key)) > -1)
    }

    static get(key){
        return global[Namespace.makeSymbol(key)];
    }

    static set(key, config){
        global[Namespace.makeSymbol(key)] = JSON.parse(JSON.stringify(config));

        return Namespace.get(key);
    }

    static makeSymbol(key){
        return Symbol.for(key);
    }
}

module.exports = Namespace;
