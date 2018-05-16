/*函数timeFormat*/
function timeFormat(item) {
    var date = new Date(parseInt(item));
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = date.getDate() + ' ';
    var h = date.getHours() + ':';
    var m = date.getMinutes() + ':';
    var s = date.getSeconds();
    return Y+M+D+h+m+s;
}
/*函数translate*/
/*不过这样转换在某些浏览器上会出现不理想的效果，因为toLocaleDateString()方法是因浏览器而异的，
比如 IE为2016年8月24日 22:26:19 格式 搜狗为Wednesday, August 24, 2016 22:39:42*/
function translate(item) {
    var date = new Date(parseInt(item));
    return date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8);
};