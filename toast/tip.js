// 提示框效果

function Tip(option) {
    this.el = '<div id="tip" class="tip-toast"><i class="tip-close icon-ic_gb"></i><span></span></div>';
    this.showTime = option.showTime || 300;
    this.hideTime = option.hideTime || 300;
    this.delay = option.delay || 3000;
}

Tip.prototype._ready = function() {
    var self = this;
    $('body').append(this.el);
    $('#tip').find('.tip-close').click(function(){
        self._hide();
    });
};

Tip.prototype._show = function(text) {
    $('#tip').find('span').text(text);
    $('#tip').fadeIn(this.showTime).delay(this.delay).fadeOut(this.hideTime);
};

Tip.prototype._hide = function() {
    $('#tip').stop().fadeOut(this.hideTime);
}