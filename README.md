## dom tools

> 顾名思义 dom处理方法



## 方法

### getDomElement(string|HTMLElement)

根据.xx #xx xx 或dom 来获取dom元素

入参：

* `string`
  * tag string
  * class string
  * id string
* `HTMLElement`

返回：

* 返回原生dom

🌰例子：

```javascript
// 获取 zzz 元素
getDomElement('zzz')
// 获取 class 为.zzz的元素，
getDomElement('.zzz')
// 获取 id 为 #zzz 的元素，
getDomElement('#zzz')
// 若入参为 dom元素，则不作任何处理，直接返回，用于减少判断，保持代码正文一致性
getDomElement(document.querySelector('zzz'))
```



### isScrollIntoView(target)

是否移动到屏幕中

入参：

* target
  * 与`getDomElement`的入参一致

返回

* boolean
  * 为`true`则在视图中
  * 为`false`则不在视图中



### getRectFromView(target)

获取dom的相对于页面左上角的相关位置信息

入参：

* target
  * 与`getDomElement`的入参一致

返回

* ```javascript
  	{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          height: curDom.offsetHeight,
          width: curDom.offsetWidth,
          el: curDom,
        }
  ```

  

### mouseMoveObsever(options)

监听dom滑动时 鼠标上下左右移动，并触发相应事件

入参：

* options
  * el 
    * dom元素
  * once
    * 为true则只在初始时触发或改变方向时触发options.Function
  * moveLeft
    * 鼠标向左滑动时触发
  * moveRight
    * 鼠标向右滑动时触发
  * moveTop
    * 鼠标向上滑动时触发
  * moveBottom
    * 鼠标向下滑动时触发

返回

* register()
  * 开始触发监听事件
* destroy
  * 移除监听事件
  
  
  
  
  
![http://www.baidu.com/img/bdlogo.gif][code-past]
![baidu](http://www.baidu.com/img/bdlogo.gif "百度logo")
