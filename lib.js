export function getDomElement(domstr) {
  let dom = null;
  if (domstr instanceof HTMLElement) {
    dom = domstr;
  } else {
    dom = document.querySelector(domstr);
    // ||
    // document.querySelector(`.${domstr}`) ||
    // document.querySelector(`#${domstr}`);
  }
  return dom;
};
export function isScrollIntoView(target, scrollContainter) {
  // const scrollEl = this.getDomElement(scrollContainter || document.body);
  const targetEl = this.getDomElement(target);
  if (targetEl) {
    const wH = Math.min(window.innerHeight, window.outerHeight);
    const sH =
      document.body.scrollTop || document.documentElement.scrollTop;
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
};
export function getRectFromView(domstr) {
  const dom = this.getDomElement(domstr);
  if (dom) {
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