var ComponentFactory = function (config) {
    var $P = $('<p/>');
    config.className && $P.addClass(config.className);
    config.css && $P.css(config.css);
    config.center && $P.css({margin: '0 auto',paddingTop: '200px'});
    config.text && $P.text(config.text);
    if(config.event) {
        for(var prop in config.event) {
            $P.on(prop,config.event[prop]);
        }
    }
    $P.on('cpLeave', function () {
        var self = this;
        setTimeout(function () {
            config.animateOut && $(self).animate(config.animateOut,1000,'swing')
        },config.delay || 0)
    })
    $P.on('cpLoad', function () {
        var self = this;
        setTimeout(function () {
            config.animateIn && $(self).animate(config.animateIn,1000,'swing')
        },config.delay || 0)
    })
    return $P;
}