
## Dom Tools

> As the name suggests DOM processing method



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