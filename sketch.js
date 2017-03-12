/*
    Load all the p5 libraries and then parse out the global variables into a
    format compatible with an eslint config file. It should be in the form:

    {
        "variableName": false,
        "nextVariableName": false
    }

    The false value indicates that this global variable should not be
    overwritten!
*/

new p5(function (p) {
    p.setup = function () {
        // Loop through all the enumerable properties on the p5 instance and on
        // the p5 prototype chain
        var eslintGlobalsConfig = {}; 
        for (var key in p) {
            // If the variable is not "private"
            if (key[0] !== "_") eslintGlobalsConfig[key] = false;
        }
        console.log(JSON.stringify(eslintGlobalsConfig));
    }
});
