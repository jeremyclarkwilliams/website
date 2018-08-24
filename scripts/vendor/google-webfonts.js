WebFontConfig = {
    google: {
        families: ['Raleway:300,500,700', 'Galada']
    },
    timeout: 3000
};

(function(d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
})(document);
