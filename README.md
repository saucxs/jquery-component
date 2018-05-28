# jquery-component
jquery-component是自己在开发中遇到问题，总结，形成自己的开发组件，有待继续完善
浏览器支持：开发主流浏览器


## toast组件
展示样例：http://www.mwcxs.top/static/jquery-component/toast/tipToast.html
+ 调用方式

1、在页面上引入
```html
<script type="text/javascript" src="tip.js"></script>
```

2、js头部引入
```js
var toastTip = new Tip();
toastTip._ready();
```

3、在该页面需要的场景
```js
toastTip._show('网络异常')
```

+ 入参结构

```javascript
Tip: {
    showTime:100,  //进入时间
    delay:3000, //toast显示时间
    hideTime:500  //消失时间
}
```

+ 举例

```js
var toastTip = new Tip();  //使用默认时间
var toastTip = new Tip({showTime:100,delay:3000,hideTime:500});  //使用自己设定时间
```

## dialog弹窗

展示样例：http://www.mwcxs.top/static/jquery-component/dialog/dialog.html

+ 调用方式

1、在页面上引用css和js

```css & js & html
    <link rel="stylesheet" type="text/css" href="common.css">
    <link rel="stylesheet" type="text/css" href="dialog.css">
    <script type="text/javascript" src="jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="dialog.js"></script>
    
     <button id="btn1" class="button">打开对话框</button>
     <div class="dialog dialog1">你确认删除吗？</div>
```

2、页面相应场景引入js
```js
        $(".dialog1").dialog({
            'title':'警告',
            'buttons':{
                '确定':function(api){
                    api.setTitle('温馨提示');
                    api.setContent('删除成功！');
                    console.log('ajax请求')
                },
                '取消':function(api){
                    api.close();
                }
            }
        },function(api){
            $('#btn1').click(function(){
                api.open();
            });
        });
```
说明：
1、弹窗的dom调用dialog(object,function);包含两个参数，一个参数是json对象--弹窗里的内容，第二参数是函数--触发弹窗的事件
2、还在完善其他函数部分，比如调用前的方法，调用后的方法等等


## loading
加载动画
展示样例：http://www.mwcxs.top/static/jquery-component/loading/loading.html

+ 调用方式

1、页面引入css

```css
<link rel="stylesheet" href="loading.css">
```
2、该页面需要的场景
```dom
 <div class="scale-ball">
        <div class="scale-ball-a"></div>
        <div class="scale-ball-b"></div>
        <div class="scale-ball-c"></div>
 </div>
```


## 时间日期组件
使用的flatpickr的组件
展示样例：http://www.mwcxs.top/static/jquery-component/timePicker/timePicker.html

+ 调用方式

1、页面引入css，js，html

```css & js
<link rel="stylesheet" type="text/css" href="flatpickr.min.css">
<script type="text/javascript" src="flatpickr.js"></script>
<input style="margin-left: -3px;" type="text" class="birthday dataPicker">
```

2、在该页面需要的场景
```js
  $(".dataPicker").flatpickr({
    enableTime: false,      //true为带时间，false为不带时间
    dateFormat: "Y-m-d",    //日期格式为'年-月-日'
    minDate: "1900-1-1",    //最小的日期
    maxDate: "today",       //最大的日期，today为今天
    defaultDate: ["1990-1-1"],   //初始化默认的日期
    locale: {
      weekdays: {
        shorthand: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
        longhand: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
      },
      months: {
        shorthand: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        longhand: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
      },
      rangeSeparator: " 至 ",
      weekAbbreviation: "周",
      scrollTitle: "滚动切换",
      toggleTitle: "点击切换 12/24 小时时制",
    },  //设置为中文
  });
```

## drag组件
基于jquery
+ 调用方式
1、页面引用
```js
<script src="drag.js"></script>
```
2、场景应用
```js
$.init("父元素","被拖动的元素","被拖动的样式","被替换元素的样式")
```
说明
* pElem 父元素的className 如 ".option"
* cElem 子元素(要拖拽的元素)的className 如 ".option-list"
* style1:被拖动的样式
* style2:被替换的样式

3、举例
```js
 $.init(".options",".option-list",{'border-color':'#1F8CEB','background':'green'},{'border-color':'#5579ee','background':'red'});
```


## colorPicker组件
主要是模仿的是webkit内核的颜色选择器
展示样例：http://www.mwcxs.top/static/jquery-component/colorPicker/colorPicker.html

+ 调用方式

1、页面引用

```js
<script src="colorPicker.js"></script>
```

2、需要的场景
```js
 Colorpicker.create({
        bindClass:'inputPicker',
        change: function(elem,hex){
            elem.value = hex;
            document.getElementById('inputPicker').value = hex;
            document.getElementById('pickerShow').style.backgroundColor = hex;
        }
    })
```

## replaceAll自定义函数组件
展示样例（查看console）：http://www.mwcxs.top/static/jquery-component/replaceAll/replaceAll.html

原生js中并没有replaceAll方法，只有replace，如果要将字符串替换，一般使用replace
```js
var str = '2016-09-19';
var result = str.replace('-','');
console.log(result);

201609-19
```

+ 调用方式

1、在页面上引入
```html
<script type="text/javascript" src="replaceAll.js"></script>
```

2、js头部引入
```js
var str = '2016-09-19';
var result = str.replaceAll('-','.');
```


## timeStamp时间戳与事件转换
展示样例（查看console）：http://www.mwcxs.top/static/jquery-component/timeStamp/timeStamp.html
用 new Date(时间戳) 格式转化获得当前时间
```js
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
timeFormat(1526485239098);
2018-5-16 23:40:39
```

+ 调用方式

1、在页面上引入
```html
<script type="text/javascript" src="timeStamp.js"></script>
```

2、自己js格式化
```js
timeFormat('时间戳字符')  //建议用该种方式
或者
translate('时间戳字符')  //因为toLocaleDateString()方法是因浏览器而异的，IE和搜过浏览器展示有差异
```

3、举例子
```js
timeFormat(1526485239098)  //建议用该种方式
或者
translate(1526485239098)  //因为toLocaleDateString()方法是因浏览器而异的，IE和搜过浏览器展示有差异
```


