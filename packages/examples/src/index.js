import tools from '@zzailianlian/dom-tools'
import { getDomElement, getTargetNodeBySourceDom } from '@zzailianlian/dom-tools'
import local from './js/index.js';

// console.log('tools',tools);

// 更改为ts
// const { getDomElement, getTargetNodeBySourceDom } = tools;

console.log('get111--1', getDomElement, getTargetNodeBySourceDom, tools.getDomElement('hhh'));

console.log('local-1-3', local)
console.log('tools', getTargetNodeBySourceDom({
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
  // exclude: {
  //   // class: 'inclu',
  //   // id: 'parent2-exclue-attr1-attr2',
  //   attrs: [{
  //     key: 'attr1',
  //     value: 'attr1'
  //   }],
  //   isCross: false
  // }
}));