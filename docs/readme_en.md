## Dom Tools

As the name suggests, the DOM processing method, summarize the commonly used DOM processing method, as simple and casual as using the general method, casual use, casual use

The project is still under construction, and I look forward to the joint contribution of people with aspirations!

## method

### GetDomelement (String | htmlelement)

Get DOM elements based on .xx #xx xx or dom

Payment:

* `String`
  * tag String
  * class string
  * id string
* `Htmlelement`

return:

* Return to native DOM

🌰 Example:

`` `javascript
// Get ZZZ element
getDomelement ('ZZZ')
// Get the element of class .zzz,
getDomelement ('. ZZZ')
// Get the element of #zzz,
getDomelement ('#zzz')
// If you participate in the DOM element, you will not be treated without any treatment, and return directly to reduce judgment and maintain the consistency of the code text
getDomelement (document.queryselector ('zzz'))
`` `



### ISSCROLLLINTOVIEW (target)

Whether to move to the screen

Payment:

* target
  * Consistent with the reference of `getDomelement`

return

* Boolean
  * `True` is in the view
  * `False` is not in the view



### GetrectFromview (target)

Get the related location information of the DOM relative to the upper left corner of the page

Payment:

* target
  * Consistent with the reference of `getDomelement`

return

* `` `javascript
  {{
    TOP: 0,
    bottom: 0,
    left: 0,
    Right: 0,
    Height: Curdom.offsetheight,
    width: Curdom.offsetWidth,
    EL: Curdom,
  }
  `` `

  

### MouseMoveobsever (Options)

Move the mouse up, down, left and right when the DOM slides, and trigger the corresponding event

Payment:

* Options
  * EL
    * DOM element
  * ONCE
    * True is only triggered or changing direction in the initial trigger or changing direction
  * Moveleft
    * Triggered when the mouse slide to the left
  * MOVERIGHT
    * Triggered when the mouse slides to the right
  * Movetop
    * Triggered when the mouse slides upward
  * Movebottom
    * Triggered when the mouse declines

return

* register ()

  * Start triggering monitoring events

* Destroy

  * Removal monitoring incident

    

### GettargetNodebysourceDom (Options)

Get the parent element that meets the conditions according to the source dom: `el`. If it exists, it returns, otherwise it will return to` null`,

Common scenes:

Get a parent element based on CLICK's `E.Target`, and do the corresponding operation, or if there is a parent element, do another logical operation

Payment:

* Options

  * EL

    * Same as GetDomelement's Payment

  * Include

    * Class
      * Class you want to include
    * ID
      * ID you want to include
    * Attrs
      * Array containing custom attributes
      * Sub -attribute:
        * Key
          * KEY of the custom attribute to be included
        * Value
          * Value of the custom attributes to be contained
    * iScross
      * Whether you meet the conditions of class, IDRS constraints at the same time
      * It needs to be satisfied at the same time when True
      * Seting any condition for false

  * Exclude
    * Class
      * Class to be eliminated
    * ID
      * ID to be eliminated
    * Attrs
      * Array containing custom attributes
      * Sub -attribute:
        * Key
          * KEY of the custom attribute to be included
        * Value
          * Value of the custom attributes to be contained
    * iScross
      * Whether you meet the conditions of class, IDRS constraints at the same time
      * It needs to be satisfied at the same time when True
      * Seting any condition for false

Example:

`` `javascript
gettargetNodeBysourceDom ({{{
  EL: 'Child',
  include: {{
    Class: 'Parent2',,
    // ID: 'Parent2-EXCLUE-ATTR1-ATTR2',
    Attrs: [{{{
      Key: 'Attr1',
      Value: 'Attr1'
    }],,,
    iscross: true
  },
  exclude: {{
    // Class: 'Inclu',
    // ID: 'Parent2-EXCLUE-ATTR1-ATTR2',
    Attrs: [{{{
      Key: 'Attr1',
      Value: 'Attr1'
    }],,,
    iscross: false
  }
})
`` `



####

Next I have to do:

1. Turn to TS
2. Integrated lint
3. Add Babel and the static target resources generated
4. Integrated Lint-Stage
5. Integrated CI/CD



##

`` `diff
+ Start learning. Essence
-An abandoning lying flat. Essence
`` `