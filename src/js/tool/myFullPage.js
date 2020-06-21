//实例方法
$.fn.extend({
    myFullPage: function (config) {
        var bgImageArray = config.bgImageArray;
        var $W = $(this);
        var $Section = $W.find('.section');
        var commonStyle = {
            width: '100%',
            height: '100%'
        }
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        var curIndex = 0;
        var curIndex1 = 0;
        var lock = true;
        $('html')
            .add('body')
            .css({
                position: 'relative',
                overflow: 'hidden',
                margin: 0
            })
            .add($W)
            .add($Section)
            .css(commonStyle)
        $W.css({
            position: 'absolute',
            left: 0,
            top: 0
        })
            .find('.section')
            .each(function (index, ele) {
                $(ele).css({
                    backgroundImage: `url(${bgImageArray[index]})`,
                    backgroundSize: '100% 100%',
                    position: 'relative'
                }).find('.slide')
                    .css({ float: 'left', width: clientWidth, height: clientHeight })
                    .wrapAll('<div class="sliderWrapper"></div>')
            })
        $Section.find('.sliderWrapper').each(function (index, ele) {
            $(ele).css({ width: $(ele).find('.slide').length * clientWidth, height: clientHeight, position: 'absolute', left: 0, top: 0 })
        })

        $Section.eq(0)
            .addClass('active')
            .end().each(function (index, ele) {
                $(ele).find('.slide').eq(0).addClass('innerActive')
            })

        function btnIn() {
            $('.topBtn').animate({
                top: 100
            }, 1000, 'swing').animate({
                top: 50
            }, 1000, 'swing', function () {
                btnIn()
            })

        }
        $('.topBtn').on('mouseover', function () {
            $(this).stop(true);
        })
        $('.topBtn').on('mouseout', function () {
            btnIn()
        })
        btnIn();

        function btnIn1() {
            $('.rightBtn').animate({
                right: 100
            }, 1000, 'swing').animate({
                right: 50
            }, 1000, 'swing', function () {
                btnIn1()
            })

        }
        $('.rightBtn').on('mouseover', function () {
            $(this).stop(true);
        })
        $('.rightBtn').on('mouseout', function () {
            btnIn1()
        })

        $('.topBtn').on('click', function () {
            btnClick('bottom')
        })
        $('.rightBtn').on('click', function () {
            btnClick('right')
        })
        $(document).on('keydown', function (e) {
            btnClick(e)

        })
        function btnClick() {
            if ((arguments[0] == 'top') || (arguments[0] == 'bottom') || arguments[0].which == 38 || arguments[0].which == 40) {
                if (lock) {
                    lock = false;
                    var newTop = $W.offset().top;
                    var direction = '';
                    if (((arguments[0] == 'top' || arguments[0].which == 38) && curIndex != 0)) {
                        direction = 'top';
                        config.onLeave && config.onLeave(curIndex, direction);
                        curIndex--;
                        newTop += clientHeight;
                    } else if ((arguments[0] == 'bottom' || arguments[0].which == 40) && curIndex != ($Section.length - 1)) {
                        direction = 'bottom';
                        config.onLeave && config.onLeave(curIndex, direction);
                        curIndex++;
                        newTop -= clientHeight;
                    }
                    $W.animate({
                        top: newTop
                    }, 350, 'swing', function () {
                        lock = true;
                        $Section.eq(curIndex).addClass('active');
                        if (direction == 'top') {
                            $Section.eq(curIndex + 1).removeClass('active');
                        } else if (direction == 'bottom') {
                            $Section.eq(curIndex - 1).removeClass('active');
                        }
                        if ($('.active').index() == $('.section').length - 1) {
                            $('.topBtn').css({ display: 'none' })
                            $('.topBtn').stop(true)
                        } else {
                            $('.topBtn').css({ display: 'block' })
                            btnIn();
                        }
                        if ($('.active').find('.sliderWrapper')[0]) {
                            $('.rightBtn').css({ display: 'block' })
                            btnIn1();
                        } else {
                            $('.rightBtn').css({ display: 'none' });
                            $('.rightBtn').stop(true)
                        }
                        config.afterLoad && config.afterLoad(curIndex, direction);
                    })
                }
            }
            if ((arguments[0] == 'left') || (arguments[0] == 'right') || arguments[0].which == 37 || arguments[0].which == 39) {
                if (lock) {
                    lock = false;
                    var $SW = $('.active').find('.sliderWrapper');
                    if ($SW[0]) {
                        var curShowDom = $SW.find('.slide');
                        var newLeft = $SW.offset().left;
                        var direction = '';
                        if ((arguments[0].which == 37 || arguments[0] == 'left') && curIndex1 != 0) {
                            direction = 'left';
                            config.onLeave && config.onLeave(curIndex, direction);
                            curIndex1--;
                            newLeft += clientWidth;
                        } else if ((arguments[0] == 'right' || arguments[0].which == 39) && curIndex1 != curShowDom.length - 1) {
                            direction = 'right';
                            config.onLeave && config.onLeave(curIndex, direction);
                            curIndex1++
                            newLeft -= clientWidth;
                        }
                        $SW.animate({
                            left: newLeft
                        }, 350, 'swing', function () {
                            lock = true;
                            curShowDom.eq(curIndex1).addClass('innerActive');
                            if (direction == 'left') {
                                curShowDom.eq(curIndex1 + 1).removeClass('innerActive');
                            } else if (direction == 'right') {
                                curShowDom.eq(curIndex1 - 1).removeClass('innerActive');
                            }
                            if ($('.innerActive').index() == $('.slide').length - 1) {
                                $('.rightBtn').css({ display: 'none' });
                                $('.rightBtn').stop(true)
                            } else {
                                $('.rightBtn').css({ display: 'block' })
                                btnIn1();
                            }
                            config.afterLoad && config.afterLoad(curIndex, direction);
                        })
                    } else {
                        lock = true;
                    }

                }
            }
        }
    }
})