/*时间戳->时间*/
function change() {
    var timeStamp = document.getElementById('timeStamp').value;
    document.getElementById('time').value = timeFormat(timeStamp);
}
/*函数1*/
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
/*函数2*/
/*不过这样转换在某些浏览器上会出现不理想的效果，因为toLocaleDateString()方法是因浏览器而异的，比如 IE为2016年8月24日 22:26:19 格式 搜狗为Wednesday, August 24, 2016 22:39:42*/
function translate(item) {
    var date = new Date(parseInt(item));
    return date.toLocaleDateString().replace(/\//g, "-") + " " + date.toTimeString().substr(0, 8);
};


/*时间->时间戳*/
/*获取标准时间*/
function getDate1() {
    var newDate1 = new Date();
    console.log('a');
    document.getElementById('newDate1').innerText = newDate1;
}

/*时间->时间戳  Date.parse(标准时间)方法*/
function getDate2() {
    var newDate2 = Date.parse(new Date());
    console.log('b');
    document.getElementById('newDate2').innerText = newDate2;
}

/*时间->时间戳  标准时间.valueOf()方法*/
function getDate3() {
    var newDate3 = (new Date()).valueOf();
    console.log('c');
    document.getElementById('newDate3').innerText = newDate3;
}

/*时间->时间戳  标准时间.getTime()方法*/
function getDate4() {
    var newDate4 = (new Date()).getTime();
    console.log('d');
    document.getElementById('newDate4').innerText = newDate4;
}

/*时间->时间戳  标准时间Number()方法*/
function getDate5() {
    var newDate5 =Number(new Date());
    console.log('e');
    document.getElementById('newDate5').innerText = newDate5;
}


