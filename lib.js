/**
 *
 * @param {string|HTMLElement}
 *  如果是字符串
 *    如果是.xx ,则返回class为.xx的dom
 *    如果是#xx ,则返回id为#xx的dom
 *    如果是xx ,则返回元素标签为xx的dom，或id为xx的dom，或class为xx的dom，优先级为 标签>id>class
 *  如果是HTMLElement
 *    则直接返回该HTMLElement
 * @returns HTMLElement
 */
export function getDomElement(domstr) {
  let dom = null;
  if (!domstr) return;

  if (domstr instanceof HTMLElement || domstr instanceof Document) {
    dom = domstr;
  } else {
    // dom = document.querySelector(domstr)
    ['.', '#'].includes(domstr.substr(0, 1))
      ? (dom = document.querySelector(domstr))
      : (dom =
          document.querySelector(`${domstr}`) ||
          document.querySelector(`#${domstr}`) ||
          document.querySelector(`.${domstr}`));
  }
  return dom;
}

// 是否移动到屏幕中
export function isScrollIntoView(target, scrollContainter) {
  // const scrollEl = this.getDomElement(scrollContainter || document.body);
  const targetEl = this.getDomElement(target);
  if (targetEl) {
    const wH = Math.min(window.innerHeight, window.outerHeight);
    const sH = document.body.scrollTop || document.documentElement.scrollTop;
    const targetRect = this.getRectFromView(targetEl);
    const currentViewRect = {
      bottom: sH + wH,
      top: sH,
    };
    if (
      (targetRect.top >= currentViewRect.top &&
        targetRect.top <= currentViewRect.bottom) ||
      (targetRect.bottom >= currentViewRect.top &&
        targetRect.bottom <= currentViewRect.bottom)
    ) {
      return true;
    }
  }
  return false;
}

/**
 * 
 * @param {string|HTMLElement} domstr 入参同getDomElement
 * 获取该元素相对于屏幕左上角的坐标
 * @returns 
 * {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: curDom.offsetHeight,
      width: curDom.offsetWidth,
      el: curDom,
    }
 */
export function getRectFromView(domstr) {
  const dom = this.getDomElement(domstr);
  if (dom) {
    if (dom.getBoundingClientRect) {
      return {
        ...dom.getBoundingClientRect(),
        el: dom,
      };
    }
    const _getRect = (curDom) => {
      let rect = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: curDom.offsetHeight,
        width: curDom.offsetWidth,
        el: curDom,
      };
      const getOffsetParentRect = (newDom) => {
        if (newDom && newDom instanceof HTMLElement) {
          rect = {
            ...rect,
            top: rect.top + newDom.offsetTop,
            bottom: rect.top + newDom.offsetTop + curDom.offsetHeight,
            left: rect.left + newDom.offsetLeft,
            right: rect.left + newDom.offsetLeft + curDom.offsetWidth,
          };
          if (newDom.offsetParent) {
            return getOffsetParentRect(newDom.offsetParent);
          }
        }
        return rect;
      };

      return getOffsetParentRect(curDom);
    };
    return _getRect(dom);
  }
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
    width: 0,
    el: null,
  };
}

/**
 * 监听dom滑动时 鼠标上下左右移动，并触发相应事件
 * @param {HTMLElement} options.el .xx #xx xx 或dom元素
 * @param {Boolean} options.once 为true则只在初始时触发或改变方向时触发options.Function
 * @param {Function} options.moveLeft moveLeft
 * @param {Function} options.moveRight moveRight
 * @param {Function} options.moveTop moveTop
 * @param {Function} options.moveBottom moveBottom
 * @returns
 */
export function mouseMoveObsever(options) {
  const { el, moveLeft, moveRight, moveTop, moveBottom, once } = {
    el: null,
    moveLeft: () => {},
    moveRight: () => {},
    moveTop: () => {},
    moveBottom: () => {},
    once: true,
    ...options,
    el: getDomElement(options.el),
  };
  if (!(el instanceof HTMLElement))
    return console.error('el不是HTMLElement类型');
  let startX, startY, moveEndX, moveEndY, X, Y, flag, direction;
  function touchstartHandle(e) {
    once && (flag = true);
    // e.preventDefault();
    (startX = e.changedTouches[0].pageX), (startY = e.changedTouches[0].pageY);
  }
  function changeFlagWithDirection(newDirection) {
    if (direction !== newDirection) {
      once && (flag = true);
    }
  }
  function touchmoveHandle(e) {
    // e.preventDefault();

    (moveEndX = e.changedTouches[0].pageX),
      (moveEndY = e.changedTouches[0].pageY),
      (X = moveEndX - startX),
      (Y = moveEndY - startY);
    startX = moveEndX;
    startY = moveEndY;

    if (X > 0) {
      changeFlagWithDirection('right');
      direction = 'right';
      flag && moveRight instanceof Function && moveRight();
    } else if (X < 0) {
      changeFlagWithDirection('left');
      direction = 'left';
      flag && moveLeft instanceof Function && moveLeft();
    } else if (Y > 0) {
      changeFlagWithDirection('top');
      direction = 'top';
      moveTop instanceof Function && moveTop();
    } else if (Y < 0) {
      changeFlagWithDirection('bottom');
      direction = 'bottom';
      moveBottom instanceof Function && moveBottom();
    } else {
      console.log('anything else');
    }
    once && (flag = false);
  }
  return {
    register() {
      el.addEventListener('touchstart', touchstartHandle);
      el.addEventListener('touchmove', touchmoveHandle);
    },
    destroy() {
      el.removeEventListener('touchstart', touchstartHandle);
      el.removeEventListener('touchmove', touchmoveHandle);
    },
  };
}

/**
 * 根据source dom ：el 来获取满足条件的父元素，如果存在则返回，否则返回null，
 * 常见场景：
 *  根据click的e.target来获取某个父元素，并作相应的操作，或者是如果存在父元素，则做另外的逻辑操作
 * 
 * @param {Object} options
 * options: 
 *  options.el 源dom
 *  options.incude include约束条件
 *    options.incude.class options.incude.id options.incude.attrs
 *    options.incude.attrs: 包含自定义属性对象的数组
 *      {key:string,value:string} key为自定义属性的key，value为自定义属性的value
 *  options.exclude exclude约束条件
 *    options.exclude.class options.exclude.id options.exclude.attrs
 *    options.exclude.attrs: 包含自定义属性对象的数组
 *      {key:string,value:string} key为自定义属性的key，value为自定义属性的value
 * 
 * 具体结构如下:
 * el: 同getDomElement的入参
 * include: {
 *  class: 要包含的class
 *  id: 要包含的id
 *  attrs:[{
 *    key: 要包含的自定义属性的key
 *    value: 要包含的自定义属性的value
 *  }]
 *  isCross: 是否同时满足class，id与attrs约束的条件
 *    为true时需要同时满足，
 *    为false时满足任一条件即可
 * }
 * exclude: {
 *  class: 要排除的class
 *  id: 要排除的id
 *  attrs:[{
 *    key: 要排除的自定义属性的key
 *    value: 要排除的自定义属性的value
 *  }]
 *  isCross: 是否同时满足class，id与attrs约束的条件
 *    为true时需要同时满足，
 *    为false时满足任一条件即可
 * }
 * @returns HTMLElement | Document | null
 */
const getTargetNodeBySourceDom = (options) => {
  const _options = {
    el: null,
    include: {
      class: null,
      id: null,
      attrs: [],
      isCorss: true,
    },
    exclude: {
      class: null,
      id: null,
      attrs: [],
      isCorss: false,
    },
    ...options,
    el: getDomElement(options.el),
  };
  const { el, include, exclude } = _options;
  const getFormatedArray = (arr) => [...arr];
  const isIncludeClassByNode = (dom, className) => {
    if (dom instanceof HTMLElement) {
      return getFormatedArray(dom?.classList)?.includes(className);
    }
    return [];
  };
  const isExpected = (dom) => {
    if (dom instanceof Document) return null;
    const getComparisonFlag = (comparisonOption, type) => {
      let flagArr = [],
        finalFlag = true;
      for (let key in comparisonOption) {
        const value = comparisonOption[key];
        if (key === 'isCross') continue;
        if (key === 'class') {
          flagArr.push(isIncludeClassByNode(dom, value));
        }
        if (key === 'id') {
          flagArr.push(dom.id === value);
        }
        // if (key === 'attrs' ) {
        if (key === 'attrs' && value.filter((item) => item.key).length > 0) {
          let isIncludeAttrs = [];
          value
            .filter((item) => item.key)
            .map((attr) => {
              isIncludeAttrs.push(
                attr['value'] === dom.getAttribute(attr['key']),
              );
            });

          flagArr.push(
            isIncludeAttrs.length > 0 && isIncludeAttrs.every(Boolean),
          );
          // flagArr.push(isIncludeAttrs.length === value.length && isIncludeAttrs.every(Boolean))
        }
      }

      if (comparisonOption['isCross']) {
        //include: 交集，需要同时满足class、id与attrs
        finalFlag = flagArr.length > 0 && flagArr.every(Boolean);
      } else {
        finalFlag = flagArr.some(Boolean);
      }
      return finalFlag;
    };
    const isInclude = getComparisonFlag(include);
    const isExclude = getComparisonFlag(exclude, 'exclude');
    return isInclude && !isExclude;
  };
  if (!el) return null;
  if (isExpected(el)) {
    return el;
  }
  const parentnode = el?.parentNode;
  if (!parentnode) return null;
  if (isExpected(parentnode)) {
    return parentnode;
  } else {
    return getTargetNodeBySourceDom({ ..._options, el: parentnode });
  }
};

export default {
  getDomElement,
  getRectFromView,
  isScrollIntoView,
  getTargetNodeBySourceDom,
};
