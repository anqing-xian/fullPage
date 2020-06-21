var pageEngine = {
    init: function (selector, bgImageArray) {
        this.$W = $(selector);
        this.bgImageArray = bgImageArray;
        this.slideFlag = false;
        return this;
    },
    addSection: function (className) {
        this.$Page = $("<div class='section'/>").addClass(className);
        this.$Page.appendTo(this.$W);
        this.slideFlag = false;
        return this;
    },
    addSlide: function (className) {
        this.$Slide = $("<div class='slide'/>").addClass(className).css({ position: 'relative' });
        this.$Slide.appendTo(this.$Page);
        this.slideFlag = true;
        return this
    },
    addComponent: function (config) {
        this.con = config.className;
        var oCp = null;
        switch (config.type) {
            case 'upOrDown':
                oCp = ComponentFactory(config);
                break;
        }
        this.slideFlag ? this.$Slide.append(oCp) : this.$Page.append(oCp);
        return this;
    },
    bindEvent: function () {
        var self = this;
        var dom = $(`.${this.con}`).parent();
        if($(`.${this.con}`).parent().hasClass('slide')){
            dom = $(`.${this.con}`).parents('.section');
        }
        $(`.${this.con}`).parent().on({
            _leave: function () {
                $(this).find(`.${self.con}`).trigger('cpLeave');
            },
            _load: function () {
                $(this).find(`.${self.con}`).trigger('cpLoad');
            }
        })
    },
    load: function () {
        var self = this;
        this.bindEvent();
        this.$W.myFullPage({
            bgImageArray: this.bgImageArray,
            onLeave: function (index, direction) {
                if (self.$W.find('.section').eq(index).find('.sliderWrapper')[0]) {
                    self.$W.find('.section').eq(index).find('.innerActive').trigger('_leave');
                } else {
                    self.$W.find('.section').eq(index).trigger('_leave');
                }
            },
            afterLoad: function (index, direction) {
                if (self.$W.find('.section').eq(index).find('.sliderWrapper')[0]) {
                    self.$W.find('.section').eq(index).find('.innerActive').trigger('_load');
                } else {
                    self.$W.find('.section').eq(index).trigger('_load');
                }
            }
        })
        self.$W.find('.section').eq(0).trigger('_load');
    }
}