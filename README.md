# jquery-component
jquery-component是自己在开发中遇到问题，总结，形成自己的开发组件


## toast组件

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


### 时间日期组件
使用的flatpickr的组件

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


### replaceAll自定义函数组件
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
<script type="text/javascript" src="tip.js"></script>
```

2、js头部引入
```js
var str = '2016-09-19';
var result = str.replaceAll('-','.');
```