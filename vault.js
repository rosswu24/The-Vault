'use strict';
module.exports = function() {
    var vault = {}; // empty object

    var setValue = function(key, value){
        vault[key]=value; // set object key and assign it the same values


    };

    var getValue = function (key){
        if (vault[key] !== undefined){ // make sure the values that come in has a value 
            return vault[key]; // returns the value "key" in the vault object

        }else{
            return null;
        }
    };

     return { setValue: setValue,
                getValue: getValue
            }

  
};

