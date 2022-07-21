// const tools = require('./js/index')
// const module = require('@zzailianlian/dom-tools')
import local from './js/index.js'
import tools from '../index.js'


// 更改为ts
const { getDomElement, getTargetNodeBySourceDom } = tools;

console.log('local-1', local)
console.log('tools', tools, getTargetNodeBySourceDom({
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
}));