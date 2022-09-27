/**
 * 加载指定src的图片资源并将生成img标签通过Promise返回，同时缓存该Promise实例
 * @param {string} src 图片的src
 * @returns Promise
 */
export function loadImage(src) {
  if (loadPromises[src]) {
    return loadPromises[src];
  }
  const promise = (loadPromises[src] = new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (e) {
      img.onload = null;
      reject(e);
    };
  }));
  return promise;
}