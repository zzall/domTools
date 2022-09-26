## dom tools

顾名思义，dom处理方法，总结常用dom处理方法，像使用一般方法一样简单随意，随拿随用

项目还在建设中，期待有志之士共同贡献力量！

<!-- # $ npm config set sign-git-tag true dom-tools发布没办法生成tag？ -->
# https://www.npmjs.com/package/np

<p align="center">
    <a href="https://github.com/zzailianlian/domTools/blob/master/docs/readme_en.md">English</a>
    ·
    <a href="https://github.com/zzailianlian/domTools/blob/master/docs/readme_cn.md">简体中文</a>
    ·
</p>

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

    

### getTargetNodeBySourceDom(options)

根据source dom ：`el` 来获取满足条件的父元素，如果存在则返回，否则返回`null`，

常见场景：

根据click的`e.target`来获取某个父元素，并作相应的操作，或者是如果存在父元素，则做另外的逻辑操作

入参：

* options

  * el

    * 同getDomElement的入参

  * include

    * class
      * 要包含的class
    * id
      * 要包含的id
    * attrs
      * 包含自定义属性的数组
      * 子属性：
        * key 
          * 要包含的自定义属性的key
        * value
          * 要包含的自定义属性的value
    * isCross
      * 是否同时满足class，id与attrs约束的条件
      * 为true时需要同时满足
      * 为false时满足任一条件即可

  * exclude
    * class
      * 要排除的class
    * id
      * 要排除的id
    * attrs
      * 包含自定义属性的数组
      * 子属性：
        * key 
          * 要包含的自定义属性的key
        * value
          * 要包含的自定义属性的value
    * isCross
      * 是否同时满足class，id与attrs约束的条件
      * 为true时需要同时满足
      * 为false时满足任一条件即可

示例：

```javascript
getTargetNodeBySourceDom({
  el: 'child',
  include: {
    class: 'parent2',
    // id: 'parent2-exclue-attr1-attr2',
    attrs: [{
      key: 'attr1',
      value: 'attr1'
    }],
    isCross: true
  },
  exclude: {
    // class: 'inclu',
    // id: 'parent2-exclue-attr1-attr2',
    attrs: [{
      key: 'attr1',
      value: 'attr1'
    }],
    isCross: false
  }
})
```


### imageToBase64(imgUrl,format)

根据图片的url生成base64

入参：

* `imgeUrl` 
  * String 图片url
* `format`
  * 要转换的图片格式
  * 默认为`'image/png'`

返回：

* 返回一个`Promise`
* `res`为生成的`base64`字符串

### loadScript(src, opts = {})

动态生成script并放入到head标签的内部，返回一个可提供回调的Promise，同时缓存该Promise实例

入参：

* src
  * string script标签的src
* opts
  * object script标签的属性

返回：

* Promise

### loadCSSCode(code)

已内联的形式将css code渲染到style标签中，并塞入到head标签的尾部

入参：

* code
  * string css代码字符串

### loadCSS(href)

动态生成link标签，加载指定css并将link标签放入到head尾部

入参：

* href
  * string 要加载的css href

### loadImage(src)

加载指定src的图片资源并将生成img标签通过Promise返回，同时缓存该Promise实例

入参:

* src
  * string 图片的src




## 预计要做

接下来我要做的：

1. 转成ts
2. 集成lint
3. 添加babel与生成的静态目标资源
4. 集成lint-stage
5. 集成ci/cd



##

```diff
+ 开始学习一丢丢。。
- 放弃躺平一丢丢。。
```


