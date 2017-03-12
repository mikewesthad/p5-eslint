module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "browser": true
    },
    "rules": {
        // Allow unused global variables - e.g. setup, draw, etc.
        "no-unused-vars": ["error", { "vars": "local" }],
        // Console is a beginner's friend, so allow it
        "no-console": 0,
        // Allow redeclaring of variables, so that things reusing "i" in
        // multiple loops doesn't lead to confusion
        "no-redeclare": 0
    },
    // Globals parsed from a p5 instance - don't allow them to be overwritten
    "globals": {
        "p5": false,
        "remove": false,
        "setup": false,
        "canvas": false,
        "width": false,
        "height": false,
        "drawingContext": false,
        "P2D": false,
        "WEBGL": false,
        "ARROW": false,
        "CROSS": false,
        "HAND": false,
        "MOVE": false,
        "TEXT": false,
        "WAIT": false,
        "HALF_PI": false,
        "PI": false,
        "QUARTER_PI": false,
        "TAU": false,
        "TWO_PI": false,
        "DEGREES": false,
        "RADIANS": false,
        "CORNER": false,
        "CORNERS": false,
        "RADIUS": false,
        "RIGHT": false,
        "LEFT": false,
        "CENTER": false,
        "TOP": false,
        "BOTTOM": false,
        "BASELINE": false,
        "POINTS": false,
        "LINES": false,
        "LINE_STRIP": false,
        "LINE_LOOP": false,
        "TRIANGLES": false,
        "TRIANGLE_FAN": false,
        "TRIANGLE_STRIP": false,
        "QUADS": false,
        "QUAD_STRIP": false,
        "CLOSE": false,
        "OPEN": false,
        "CHORD": false,
        "PIE": false,
        "PROJECT": false,
        "SQUARE": false,
        "ROUND": false,
        "BEVEL": false,
        "MITER": false,
        "RGB": false,
        "HSB": false,
        "HSL": false,
        "AUTO": false,
        "ALT": false,
        "BACKSPACE": false,
        "CONTROL": false,
        "DELETE": false,
        "DOWN_ARROW": false,
        "ENTER": false,
        "ESCAPE": false,
        "LEFT_ARROW": false,
        "OPTION": false,
        "RETURN": false,
        "RIGHT_ARROW": false,
        "SHIFT": false,
        "TAB": false,
        "UP_ARROW": false,
        "BLEND": false,
        "ADD": false,
        "DARKEST": false,
        "LIGHTEST": false,
        "DIFFERENCE": false,
        "EXCLUSION": false,
        "MULTIPLY": false,
        "SCREEN": false,
        "REPLACE": false,
        "OVERLAY": false,
        "HARD_LIGHT": false,
        "SOFT_LIGHT": false,
        "DODGE": false,
        "BURN": false,
        "THRESHOLD": false,
        "GRAY": false,
        "OPAQUE": false,
        "INVERT": false,
        "POSTERIZE": false,
        "DILATE": false,
        "ERODE": false,
        "BLUR": false,
        "NORMAL": false,
        "ITALIC": false,
        "BOLD": false,
        "LINEAR": false,
        "QUADRATIC": false,
        "BEZIER": false,
        "CURVE": false,
        "registerPreloadMethod": false,
        "registerMethod": false,
        "alpha": false,
        "blue": false,
        "brightness": false,
        "color": false,
        "green": false,
        "hue": false,
        "lerpColor": false,
        "lightness": false,
        "red": false,
        "saturation": false,
        "background": false,
        "clear": false,
        "colorMode": false,
        "fill": false,
        "noFill": false,
        "noStroke": false,
        "stroke": false,
        "float": false,
        "int": false,
        "str": false,
        "boolean": false,
        "byte": false,
        "char": false,
        "unchar": false,
        "hex": false,
        "unhex": false,
        "append": false,
        "arrayCopy": false,
        "concat": false,
        "reverse": false,
        "shorten": false,
        "shuffle": false,
        "sort": false,
        "splice": false,
        "subset": false,
        "join": false,
        "match": false,
        "matchAll": false,
        "nf": false,
        "nfc": false,
        "nfp": false,
        "nfs": false,
        "split": false,
        "splitTokens": false,
        "trim": false,
        "print": false,
        "frameCount": false,
        "focused": false,
        "cursor": false,
        "frameRate": false,
        "getFrameRate": false,
        "setFrameRate": false,
        "noCursor": false,
        "displayWidth": false,
        "displayHeight": false,
        "windowWidth": false,
        "windowHeight": false,
        "fullscreen": false,
        "pixelDensity": false,
        "displayDensity": false,
        "getURL": false,
        "getURLPath": false,
        "getURLParams": false,
        "createImage": false,
        "saveCanvas": false,
        "saveFrames": false,
        "loadImage": false,
        "image": false,
        "tint": false,
        "noTint": false,
        "imageMode": false,
        "pixels": false,
        "blend": false,
        "copy": false,
        "filter": false,
        "get": false,
        "loadPixels": false,
        "set": false,
        "updatePixels": false,
        "loadFont": false,
        "createInput": false,
        "createReader": false,
        "loadBytes": false,
        "loadJSON": false,
        "loadStrings": false,
        "loadTable": false,
        "parseXML": false,
        "loadXML": false,
        "selectFolder": false,
        "selectInput": false,
        "httpGet": false,
        "httpPost": false,
        "httpDo": false,
        "beginRaw": false,
        "beginRecord": false,
        "createOutput": false,
        "createWriter": false,
        "endRaw": false,
        "endRecord": false,
        "saveBytes": false,
        "save": false,
        "saveJSON": false,
        "saveJSONObject": false,
        "saveJSONArray": false,
        "saveStream": false,
        "saveStrings": false,
        "saveXML": false,
        "selectOutput": false,
        "saveTable": false,
        "writeFile": false,
        "downloadFile": false,
        "isKeyPressed": false,
        "keyIsPressed": false,
        "key": false,
        "keyCode": false,
        "keyIsDown": false,
        "deviceOrientation": false,
        "accelerationX": false,
        "accelerationY": false,
        "accelerationZ": false,
        "pAccelerationX": false,
        "pAccelerationY": false,
        "pAccelerationZ": false,
        "rotationX": false,
        "rotationY": false,
        "rotationZ": false,
        "pRotationX": false,
        "pRotationY": false,
        "pRotationZ": false,
        "turnAxis": false,
        "setMoveThreshold": false,
        "setShakeThreshold": false,
        "mouseX": false,
        "mouseY": false,
        "pmouseX": false,
        "pmouseY": false,
        "winMouseX": false,
        "winMouseY": false,
        "pwinMouseX": false,
        "pwinMouseY": false,
        "mouseButton": false,
        "mouseIsPressed": false,
        "isMousePressed": false,
        "day": false,
        "hour": false,
        "minute": false,
        "millis": false,
        "month": false,
        "second": false,
        "year": false,
        "touches": false,
        "createVector": false,
        "abs": false,
        "ceil": false,
        "constrain": false,
        "dist": false,
        "exp": false,
        "floor": false,
        "lerp": false,
        "log": false,
        "mag": false,
        "map": false,
        "max": false,
        "min": false,
        "norm": false,
        "pow": false,
        "round": false,
        "sq": false,
        "sqrt": false,
        "randomSeed": false,
        "random": false,
        "randomGaussian": false,
        "noise": false,
        "noiseDetail": false,
        "noiseSeed": false,
        "acos": false,
        "asin": false,
        "atan": false,
        "atan2": false,
        "cos": false,
        "sin": false,
        "tan": false,
        "degrees": false,
        "radians": false,
        "angleMode": false,
        "createCanvas": false,
        "resizeCanvas": false,
        "noCanvas": false,
        "createGraphics": false,
        "blendMode": false,
        "arc": false,
        "ellipse": false,
        "line": false,
        "point": false,
        "quad": false,
        "rect": false,
        "triangle": false,
        "ellipseMode": false,
        "noSmooth": false,
        "rectMode": false,
        "smooth": false,
        "strokeCap": false,
        "strokeJoin": false,
        "strokeWeight": false,
        "bezier": false,
        "bezierDetail": false,
        "bezierPoint": false,
        "bezierTangent": false,
        "curve": false,
        "curveDetail": false,
        "curveTightness": false,
        "curvePoint": false,
        "curveTangent": false,
        "beginContour": false,
        "beginShape": false,
        "bezierVertex": false,
        "curveVertex": false,
        "endContour": false,
        "endShape": false,
        "quadraticVertex": false,
        "vertex": false,
        "exit": false,
        "noLoop": false,
        "loop": false,
        "push": false,
        "pop": false,
        "pushStyle": false,
        "popStyle": false,
        "redraw": false,
        "size": false,
        "applyMatrix": false,
        "popMatrix": false,
        "printMatrix": false,
        "pushMatrix": false,
        "resetMatrix": false,
        "rotate": false,
        "rotateX": false,
        "rotateY": false,
        "rotateZ": false,
        "scale": false,
        "shearX": false,
        "shearY": false,
        "translate": false,
        "textAlign": false,
        "textLeading": false,
        "textSize": false,
        "textStyle": false,
        "textWidth": false,
        "textAscent": false,
        "textDescent": false,
        "text": false,
        "textFont": false,
        "plane": false,
        "box": false,
        "sphere": false,
        "cylinder": false,
        "cone": false,
        "ellipsoid": false,
        "torus": false,
        "loadModel": false,
        "model": false,
        "normalMaterial": false,
        "texture": false,
        "ambientMaterial": false,
        "specularMaterial": false,
        "ambientLight": false,
        "directionalLight": false,
        "pointLight": false,
        "camera": false,
        "perspective": false,
        "ortho": false,
        "orbitControl": false,
        "getAudioContext": false,
        "isSupported": false,
        "isFileSupported": false,
        "getMasterVolume": false,
        "masterVolume": false,
        "soundOut": false,
        "sampleRate": false,
        "freqToMidi": false,
        "midiToFreq": false,
        "soundFormats": false,
        "disposeSound": false,
        "loadSound": false,
        "createConvolver": false,
        "setBPM": false,
        "saveSound": false,
        "select": false,
        "selectAll": false,
        "removeElements": false,
        "createDiv": false,
        "createP": false,
        "createSpan": false,
        "createImg": false,
        "createA": false,
        "createSlider": false,
        "createButton": false,
        "createCheckbox": false,
        "createSelect": false,
        "createRadio": false,
        "createFileInput": false,
        "createVideo": false,
        "createAudio": false,
        "VIDEO": false,
        "AUDIO": false,
        "createCapture": false,
        "createElement": false
    }
}
};