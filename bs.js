var browserSync = require('browser-sync');

var domain = "http://eastwood.resultsdemo.com/";

browserSync({
    proxy: domain,
    files: ['build/**'],
    serveStatic: ['build'],
    logLevel: "debug",
    rewriteRules: [
        {
            match: new RegExp('eastwood.resultspage.com/rac/sli-rac.css'), fn: function() {
              return 'eastwood.resultsdemo.com/search.css';
            }
        }
    ],
    startPath: "search?w=*"
});
