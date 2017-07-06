# replacer

Simple plugin for replace any code snippet purpose.
Was used gulp and gulp-replace(https://www.npmjs.com/package/gulp-replace)

If you need to replace any code snipet in more than 2 files(html, css, js, php...) just:

1) Place this files in "/replacer/origin"  folder
2) Open gulpfile.js and fill the "replacePiece", "replaceBy". You can use String, Function or even RegExp!
3) In command promt print "path/to/replacer/gulp".

Voila, look to the "/replacer/output" directory, there should be a new files with changes.

