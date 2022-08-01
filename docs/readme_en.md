## dom tools

As the name implies, the DOM processing method summarizes the commonly used DOM processing methods, which are as simple and casual as using the general method, and can be used as needed.

The project is still under construction, looking forward to people with lofty ideals to contribute together!

## method

### getDomElement(string|HTMLElement)

Get the dom element according to .xx #xx xx or dom

Input parameters:

* `string`
  * tag string
  * class string
  *id string
* `HTMLElement`

return:

* Return to native dom

🌰 Example:

````javascript
// get the zzz element
getDomElement('zzz')
// Get the element whose class is .zzz,
getDomElement('.zzz')
// Get the element with id #zzz,
getDomElement('#zzz')
// If the input parameter is a dom element, no processing is performed, and the return is directly used to reduce judgment and maintain the consistency of the code body
getDomElement(document.querySelector('zzz'))
````



### isScrollIntoView(target)

whether to move to the screen

Input parameters:

* target
  * Consistent with the input parameter of `getDomElement`

return

* boolean
  * `true` in view
  * `false` not in view



### getRectFromView(target)

Get the relative position information of the dom relative to the upper left corner of the page

Input parameters:

* target
  * Consistent with the input parameter of `getDomElement`

return

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
  ````

  

### mouseMoveObsever(options)

When listening to the dom sliding, the mouse moves up and down, left and right, and triggers the corresponding event

Input parameters:

* options
  *el
    * dom element
  * once
    * true to trigger options.Function only on initial trigger or when changing direction
  * moveLeft
    * Triggered when the mouse slides to the left
  * moveRight
    * Triggered when the mouse slides to the right
  * moveTop
    * Triggered when the mouse slides up
  *moveBottom
    * Triggered when the mouse slides down

return

* register()

  * Start triggering the listener event

* destroy

  * remove listener event

    

### getTargetNodeBySourceDom(options)

According to source dom: `el` to get the parent element that satisfies the condition, if it exists, return it, otherwise return `null`,

Common scenarios:

Get a parent element according to the `e.target` of click, and do the corresponding operation, or if there is a parent element, do another logical operation

Input parameters:

* options

  *el

    * Same as the input parameter of getDomElement

  *include

    * class
      * class to include
    *id
      * id to include
    *attrs
      * Array containing custom properties
      * Subproperties:
        * key
          * the key of the custom attribute to include
        * value
          * The value of the custom attribute to include
    *isCross
      * Whether the constraints of class, id and attrs are satisfied at the same time
      * When true, it needs to be satisfied at the same time
      * When false, either condition is satisfied

  * exclude
    * class
      * class to exclude
    *id
      * id to exclude
    *attrs
      * Array containing custom properties
      * Subproperties:
        * key
          * the key of the custom attribute to include
        * value
          * The value of the custom attribute to include
    *isCross
      * Whether the constraints of class, id and attrs are satisfied at the same time
      * When true, it needs to be satisfied at the same time
      * When false, either condition is satisfied

Example:

````javascript
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
````

### imageToBase64(imgUrl,format)

Generate base64 based on the url of the image

Input parameters:

* `imgeUrl`
  * String image url
* `format`
  * Image format to convert
  * Default is `'image/png'`

return:

* return a `Promise`
* `res` is the generated `base64` string

### loadScript(src, opts = {})

Dynamically generate script and put it inside the head tag, return a Promise that can provide a callback, and cache the Promise instance at the same time

Input parameters:

*src
  * src of the string script tag
*opts
  * attribute of object script tag

return:

* Promises

### loadCSSCode(code)

The css code is rendered inline into the style tag and stuffed into the end of the head tag

Input parameters:

*code
  * string css code string

### loadCSS(href)

Dynamically generate link tags, load the specified css and put the link tags at the end of the head

Input parameters:

*href
  * string css href to load

### loadImage(src)

Load the image resource of the specified src and generate the img tag and return it through Promise, and cache the Promise instance at the same time

Intake:

*src
  * string image src

## Expected to do

What I do next:

1. Convert to ts
2. Integrate lint
3. Add babel and the generated static target resources
4. Integrate lint-stage
5. Integrate CI/CD



##

````diff
+ Start learning a little bit. .
- Give up lying flat for a while. .
````