!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SlVueTree=e():t.SlVueTree=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=16)}([function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){var r=n(4),o=n(0);t.exports=function(t,e,n){var i=!0,s=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(i="leading"in n?!!n.leading:i,s="trailing"in n?!!n.trailing:s),r(t,e,{leading:i,maxWait:e,trailing:s})}},function(t,e,n){var r=n(6),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(2).Symbol;t.exports=r},function(t,e,n){var r=n(0),o=n(5),i=n(8),s=Math.max,l=Math.min;t.exports=function(t,e,n){var a,u,c,d,h,f,p=0,v=!1,g=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=a,r=u;return a=u=void 0,p=e,d=t.apply(r,n)}function S(t){return p=t,h=setTimeout(_,e),v?y(t):d}function b(t){var n=t-f;return void 0===f||n>=e||n<0||g&&t-p>=c}function _(){var t=o();if(b(t))return x(t);h=setTimeout(_,function(t){var n=e-(t-f);return g?l(n,c-(t-p)):n}(t))}function x(t){return h=void 0,m&&a?y(t):(a=u=void 0,d)}function N(){var t=o(),n=b(t);if(a=arguments,u=this,f=t,n){if(void 0===h)return S(f);if(g)return clearTimeout(h),h=setTimeout(_,e),y(f)}return void 0===h&&(h=setTimeout(_,e)),d}return e=i(e)||0,r(n)&&(v=!!n.leading,c=(g="maxWait"in n)?s(i(n.maxWait)||0,e):c,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==h&&clearTimeout(h),p=0,a=f=u=h=void 0},N.flush=function(){return void 0===h?d:x(o())},N}},function(t,e,n){var r=n(2);t.exports=function(){return r.Date.now()}},function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(7))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(9),o=n(0),i=n(11),s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=l.test(t);return n||a.test(t)?u(t.slice(2),n?2:8):s.test(t)?NaN:+t}},function(t,e,n){var r=n(10),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},function(t,e,n){var r=n(12),o=n(15);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},function(t,e,n){var r=n(3),o=n(13),i=n(14),s=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):i(t)}},function(t,e,n){var r=n(3),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,l=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,l),n=t[l];try{t[l]=void 0;var r=!0}catch(t){}var o=s.call(t);return r&&(e?t[l]=n:delete t[l]),o}},function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var s={name:"sl-vue-tree",props:{value:{type:Array,default:function(){return[]}},edgeSize:{type:Number,default:3},showBranches:{type:Boolean,default:!1},level:{type:Number,default:0},parentInd:{type:Number},allowMultiselect:{type:Boolean,default:!0},allowToggleBranch:{type:Boolean,default:!0},allowExternalDrag:{type:Boolean,default:!0},multiselectKey:{type:[String,Array],default:function(){return["ctrlKey","metaKey"]},validator:function(t){var e=["ctrlKey","metaKey","altKey"],n=Array.isArray(t)?t:[t];return!!(n=n.filter((function(t){return-1!==e.indexOf(t)}))).length}},scrollAreaHeight:{type:Number,default:70},maxScrollSpeed:{type:Number,default:20}},data:function(){return{rootCursorPosition:null,scrollIntervalId:0,scrollSpeed:0,lastSelectedNode:null,mouseIsDown:!1,isDragging:!1,lastMousePos:{x:0,y:0},preventDrag:!1,currentValue:this.value}},mounted:function(){this.isRoot&&document.addEventListener("mouseup",this.onDocumentMouseupHandler)},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseupHandler)},watch:{value:function(t){this.currentValue=t}},computed:{cursorPosition:function(){return this.isRoot?this.rootCursorPosition:this.getParent().cursorPosition},depth:function(){return this.gaps.length},nodes:function(){if(this.isRoot){var t=this.copy(this.currentValue);return this.getNodes(t)}return this.getParent().nodes[this.parentInd].children},gaps:function(){var t=[],e=this.level-1;for(this.showBranches||e++;e-- >0;)t.push(e);return t},isRoot:function(){return!this.level},selectionSize:function(){return this.getSelected().length},dragSize:function(){return this.getDraggable().length}},methods:{setCursorPosition:function(t){this.isRoot?this.rootCursorPosition=t:this.getParent().setCursorPosition(t)},getNodes:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.map((function(o,i){var s=n.concat(i);return e.getNode(s,o,t,r)}))},getNode:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=t.slice(-1)[0];if(n=n||this.getNodeSiblings(this.currentValue,t),e=e||n&&n[o]||null,null==r&&(r=this.isVisible(t)),!e)return null;var i=null==e.isExpanded||!!e.isExpanded,s=null==e.isDraggable||!!e.isDraggable,l=null==e.isSelectable||!!e.isSelectable,a={title:e.title,isLeaf:!!e.isLeaf,children:e.children?this.getNodes(e.children,t,i):[],isSelected:!!e.isSelected,isExpanded:i,isVisible:r,isDraggable:s,isSelectable:l,data:void 0!==e.data?e.data:{},path:t,pathStr:JSON.stringify(t),level:t.length,ind:o,isFirstChild:0==o,isLastChild:o===n.length-1};return a},isVisible:function(t){if(t.length<2)return!0;for(var e=this.currentValue,n=0;n<t.length-1;n++){var r=e[t[n]];if(!(null==r.isExpanded||!!r.isExpanded))return!1;e=r.children}return!0},emitInput:function(t){this.currentValue=t,this.getRoot().$emit("input",t)},emitSelect:function(t,e){this.getRoot().$emit("select",t,e)},emitBeforeDrop:function(t,e,n){this.getRoot().$emit("beforedrop",t,e,n)},emitDrop:function(t,e,n){this.getRoot().$emit("drop",t,e,n)},emitToggle:function(t,e){this.getRoot().$emit("toggle",t,e)},emitNodeClick:function(t,e){this.getRoot().$emit("nodeclick",t,e)},emitNodeDblclick:function(t,e){this.getRoot().$emit("nodedblclick",t,e)},emitNodeContextmenu:function(t,e){this.getRoot().$emit("nodecontextmenu",t,e)},onExternalDragoverHandlerThrottled:o()((function(t,e){this.onExternalDragoverHandler(t,e)}),75),onExternalDragoverHandler:function(t,e){if(e.preventDefault(),console.log("onExternalDragoverHandlerThrottled allow is: ",this.allowExternalDrag),this.allowExternalDrag){var n=this.getRoot(),r=n.getCursorPositionFromCoords(e.clientX,e.clientY);n.setCursorPosition(r),n.$emit("externaldragover",r,e)}},onExternalDropHandler:function(t,e){var n=this.getRoot(),r=n.getCursorPositionFromCoords(e.clientX,e.clientY);n.$emit("externaldrop",r,e),this.setCursorPosition(null)},select:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=Array.isArray(this.multiselectKey)?this.multiselectKey:[this.multiselectKey],i=r&&!!o.find((function(t){return r[t]}));n=(i||n)&&this.allowMultiselect;var s=this.getNode(t);if(!s)return null;var l=this.copy(this.currentValue),a=this.allowMultiselect&&r&&r.shiftKey&&this.lastSelectedNode,u=[],c=!1;return this.traverse((function(t,r){a?(t.pathStr!==s.pathStr&&t.pathStr!==e.lastSelectedNode.pathStr||(r.isSelected=t.isSelectable,c=!c),c&&(r.isSelected=t.isSelectable)):t.pathStr===s.pathStr?r.isSelected=t.isSelectable:n||r.isSelected&&(r.isSelected=!1),r.isSelected&&u.push(t)}),l),this.lastSelectedNode=s,this.emitInput(l),this.emitSelect(u,r),s},onMousemoveHandlerThrottled:o()((function(t){this.onMousemoveHandler(t)}),75),onMousemoveHandler:function(t){if(this.isRoot){if(!this.preventDrag){var e=this.isDragging,n=this.isDragging||this.mouseIsDown&&(this.lastMousePos.x!==t.clientX||this.lastMousePos.y!==t.clientY),r=!1===e&&!0===n;if(this.lastMousePos={x:t.clientX,y:t.clientY},n){var o=this.getRoot().$el,i=o.getBoundingClientRect(),s=this.$refs.dragInfo,l=t.clientY-i.top+o.scrollTop-(0|s.style.marginBottom),a=t.clientX-i.left;s.style.top=l+"px",s.style.left=a+"px";var u=this.getCursorPositionFromCoords(t.clientX,t.clientY),c=u.node,d=u.placement;if(r&&!c.isSelected&&this.select(c.path,!1,t),this.getDraggable().length){this.isDragging=n,this.setCursorPosition({node:c,placement:d});var h=i.bottom-this.scrollAreaHeight,f=(t.clientY-h)/(i.bottom-h),p=i.top+this.scrollAreaHeight,v=(p-t.clientY)/(p-i.top);f>0?this.startScroll(f):v>0?this.startScroll(-v):this.stopScroll()}else this.preventDrag=!0}}}else this.getRoot().onMousemoveHandler(t)},getCursorPositionFromCoords:function(t,e){var n,r,o=document.elementFromPoint(t,e),i=o.getAttribute("path")?o:this.getClosetElementWithPath(o);if(i){if(!i)return;n=this.getNode(JSON.parse(i.getAttribute("path")));var s=i.offsetHeight,l=this.edgeSize,a=e-i.getBoundingClientRect().top;r=n.isLeaf?a>=s/2?"after":"before":a<=l?"before":a>=s-l?"after":"inside"}else{var u=this.getRoot().$el.getBoundingClientRect();e>u.top+u.height/2?(r="after",n=this.getLastNode()):(r="before",n=this.getFirstNode())}return{node:n,placement:r}},getClosetElementWithPath:function(t){return t?t.getAttribute("path")?t:this.getClosetElementWithPath(t.parentElement):null},onMouseleaveHandler:function(t){if(this.isRoot&&this.isDragging){var e=this.getRoot().$el.getBoundingClientRect();t.clientY>=e.bottom?this.setCursorPosition({node:this.nodes.slice(-1)[0],placement:"after"}):t.clientY<e.top&&this.setCursorPosition({node:this.getFirstNode(),placement:"before"})}},getNodeEl:function(t){this.getRoot().$el.querySelector('[path="'.concat(JSON.stringify(t),'"]'))},getLastNode:function(){var t=null;return this.traverse((function(e){t=e})),t},getFirstNode:function(){return this.getNode([0])},getNextNode:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=null;return this.traverse((function(o){if(!(e.comparePaths(o.path,t)<1))return!n||n(o)?(r=o,!1):void 0})),r},getPrevNode:function(t,e){var n=this,r=[];this.traverse((function(e){if(n.comparePaths(e.path,t)>=0)return!1;r.push(e)}));for(var o=r.length;o--;){var i=r[o];if(!e||e(i))return i}return null},comparePaths:function(t,e){for(var n=0;n<t.length;n++){if(null==e[n])return 1;if(t[n]>e[n])return 1;if(t[n]<e[n])return-1}return null==e[t.length]?0:-1},onNodeMousedownHandler:function(t,e){0===t.button&&(this.isRoot?this.mouseIsDown=!0:this.getRoot().onNodeMousedownHandler(t,e))},startScroll:function(t){var e=this,n=this.getRoot().$el;this.scrollSpeed!==t&&(this.scrollIntervalId&&this.stopScroll(),this.scrollSpeed=t,this.scrollIntervalId=setInterval((function(){n.scrollTop+=e.maxScrollSpeed*t}),20))},stopScroll:function(){clearInterval(this.scrollIntervalId),this.scrollIntervalId=0,this.scrollSpeed=0},onDocumentMouseupHandler:function(t){this.isDragging&&this.onNodeMouseupHandler(t)},onNodeMouseupHandler:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0===t.button)if(this.isRoot)if(this.mouseIsDown=!1,this.isDragging||!e||this.preventDrag||this.select(e.path,!1,t),this.preventDrag=!1,this.cursorPosition){var n=this.getDraggable(),r=!0,o=!1,i=void 0;try{for(var s,l=n[Symbol.iterator]();!(r=(s=l.next()).done);r=!0){var a=s.value;if(a.pathStr==this.cursorPosition.node.pathStr)return void this.stopDrag();if(this.checkNodeIsParent(a,this.cursorPosition.node))return void this.stopDrag()}}catch(t){o=!0,i=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}var u=this.copy(this.currentValue),c=[],d=!0,h=!1,f=void 0;try{for(var p,v=n[Symbol.iterator]();!(d=(p=v.next()).done);d=!0){var g=p.value,m=this.getNodeSiblings(u,g.path),y=m[g.ind];c.push(y)}}catch(t){h=!0,f=t}finally{try{d||null==v.return||v.return()}finally{if(h)throw f}}var S=!1;if(this.emitBeforeDrop(n,this.cursorPosition,(function(){return S=!0})),S)this.stopDrag();else{for(var b=[],_=0;_<c.length;_++){var x=c[_];b.push(this.copy(x)),x._markToDelete=!0}this.insertModels(this.cursorPosition,b,u),this.traverseModels((function(t,e,n){t._markToDelete&&e.splice(n,1)}),u),this.lastSelectedNode=null,this.emitInput(u),this.emitDrop(n,this.cursorPosition,t),this.stopDrag()}}else this.stopDrag();else this.getRoot().onNodeMouseupHandler(t,e)},onToggleHandler:function(t,e){this.allowToggleBranch&&(this.updateNode(e.path,{isExpanded:!e.isExpanded}),this.emitToggle(e,t),t.stopPropagation())},stopDrag:function(){this.isDragging=!1,this.mouseIsDown=!1,this.setCursorPosition(null),this.stopScroll()},getParent:function(){return this.$parent},getRoot:function(){return this.isRoot?this:this.getParent().getRoot()},getNodeSiblings:function(t,e){return 1===e.length?t:this.getNodeSiblings(t[e[0]].children,e.slice(1))},updateNode:function(t,e){if(this.isRoot){var n=JSON.stringify(t),r=this.copy(this.currentValue);this.traverse((function(t,r){t.pathStr===n&&Object.assign(r,e)}),r),this.emitInput(r)}else this.getParent().updateNode(t,e)},getSelected:function(){var t=[];return this.traverse((function(e){e.isSelected&&t.push(e)})),t},getDraggable:function(){var t=[];return this.traverse((function(e){e.isSelected&&e.isDraggable&&t.push(e)})),t},traverse:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];e||(e=this.currentValue);for(var r=!1,o=[],i=0;i<e.length;i++){var s=e[i],l=n.concat(i),a=this.getNode(l,s,e);if(r=!1===t(a,s,e),o.push(a),r)break;if(s.children&&(r=!1===this.traverse(t,s.children,l)))break}return!r&&o},traverseModels:function(t,e){for(var n=e.length;n--;){var r=e[n];r.children&&this.traverseModels(t,r.children),t(r,e,n)}return e},remove:function(t){var e=t.map((function(t){return JSON.stringify(t)})),n=this.copy(this.currentValue);this.traverse((function(t,n,r){var o=!0,i=!1,s=void 0;try{for(var l,a=e[Symbol.iterator]();!(o=(l=a.next()).done);o=!0){var u=l.value;t.pathStr===u&&(n._markToDelete=!0)}}catch(t){i=!0,s=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw s}}}),n),this.traverseModels((function(t,e,n){t._markToDelete&&e.splice(n,1)}),n),this.emitInput(n)},insertModels:function(t,e,n){var r=t.node,o=this.getNodeSiblings(n,r.path),s=o[r.ind];if("inside"===t.placement){var l;s.children=s.children||[],(l=s.children).unshift.apply(l,i(e))}else{var a="before"===t.placement?r.ind:r.ind+1;o.splice.apply(o,[a,0].concat(i(e)))}},insert:function(t,e){var n=Array.isArray(e)?e:[e],r=this.copy(this.currentValue);this.insertModels(t,n,r),this.emitInput(r)},checkNodeIsParent:function(t,e){var n=e.path;return JSON.stringify(n.slice(0,t.path.length))==t.pathStr},copy:function(t){return JSON.parse(JSON.stringify(t))}}},l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sl-vue-tree",class:{"sl-vue-tree-root":t.isRoot},on:{mousemove:t.onMousemoveHandlerThrottled,mouseleave:t.onMouseleaveHandler,dragend:function(e){t.onDragendHandler(null,e)}}},[n("div",{ref:"nodes",staticClass:"sl-vue-tree-nodes-list"},[t._l(t.nodes,(function(e,r){return n("div",{staticClass:"sl-vue-tree-node",class:{"sl-vue-tree-selected":e.isSelected}},[n("div",{staticClass:"sl-vue-tree-cursor sl-vue-tree-cursor_before",style:{visibility:t.cursorPosition&&t.cursorPosition.node.pathStr===e.pathStr&&"before"===t.cursorPosition.placement?"visible":"hidden","--depth":t.depth},on:{dragover:function(t){t.preventDefault()}}}),t._v(" "),n("div",{staticClass:"sl-vue-tree-node-item",class:{"sl-vue-tree-cursor-hover":t.cursorPosition&&t.cursorPosition.node.pathStr===e.pathStr,"sl-vue-tree-cursor-inside":t.cursorPosition&&"inside"===t.cursorPosition.placement&&t.cursorPosition.node.pathStr===e.pathStr,"sl-vue-tree-node-is-leaf":e.isLeaf,"sl-vue-tree-node-is-folder":!e.isLeaf},attrs:{path:e.pathStr},on:{mousedown:function(n){t.onNodeMousedownHandler(n,e)},mouseup:function(n){t.onNodeMouseupHandler(n,e)},contextmenu:function(n){t.emitNodeContextmenu(e,n)},dblclick:function(n){t.emitNodeDblclick(e,n)},click:function(n){t.emitNodeClick(e,n)},dragover:function(n){t.onExternalDragoverHandlerThrottled(e,n)},drop:function(n){t.onExternalDropHandler(e,n)}}},[t._l(t.gaps,(function(t){return n("div",{staticClass:"sl-vue-tree-gap"})})),t._v(" "),t.level&&t.showBranches?n("div",{staticClass:"sl-vue-tree-branch"},[t._t("branch",[e.isLastChild?t._e():n("span",[t._v("\n            "+t._s(String.fromCharCode(9500))+t._s(String.fromCharCode(9472))+" \n          ")]),t._v(" "),e.isLastChild?n("span",[t._v("\n            "+t._s(String.fromCharCode(9492))+t._s(String.fromCharCode(9472))+" \n          ")]):t._e()],{node:e})],2):t._e(),t._v(" "),n("div",{staticClass:"sl-vue-tree-title"},[e.isLeaf?t._e():n("span",{staticClass:"sl-vue-tree-toggle",on:{click:function(n){t.onToggleHandler(n,e)}}},[t._t("toggle",[n("span",[t._v("\n             "+t._s(e.isLeaf?"":e.isExpanded?"-":"+")+"\n            ")])],{node:e})],2),t._v(" "),t._t("title",[t._v(t._s(e.title))],{node:e}),t._v(" "),!e.isLeaf&&0==e.children.length&&e.isExpanded?t._t("empty-node",null,{node:e}):t._e()],2),t._v(" "),n("div",{staticClass:"sl-vue-tree-sidebar"},[t._t("sidebar",null,{node:e})],2)],2),t._v(" "),e.children&&e.children.length&&e.isExpanded?n("sl-vue-tree",{attrs:{value:e.children,level:e.level,parentInd:r,allowMultiselect:t.allowMultiselect,allowToggleBranch:t.allowToggleBranch,edgeSize:t.edgeSize,showBranches:t.showBranches},on:{dragover:function(t){t.preventDefault()}},scopedSlots:t._u([{key:"title",fn:function(e){var n=e.node;return[t._t("title",[t._v(t._s(n.title))],{node:n})]}},{key:"toggle",fn:function(e){var r=e.node;return[t._t("toggle",[n("span",[t._v("\n             "+t._s(r.isLeaf?"":r.isExpanded?"-":"+")+"\n          ")])],{node:r})]}},{key:"sidebar",fn:function(e){var n=e.node;return[t._t("sidebar",null,{node:n})]}},{key:"empty-node",fn:function(e){var n=e.node;return[!n.isLeaf&&0==n.children.length&&n.isExpanded?t._t("empty-node",null,{node:n}):t._e()]}}])}):t._e(),t._v(" "),n("div",{staticClass:"sl-vue-tree-cursor sl-vue-tree-cursor_after",style:{visibility:t.cursorPosition&&t.cursorPosition.node.pathStr===e.pathStr&&"after"===t.cursorPosition.placement?"visible":"hidden","--depth":t.depth},on:{dragover:function(t){t.preventDefault()}}})],1)})),t._v(" "),t.isRoot?n("div",{directives:[{name:"show",rawName:"v-show",value:t.isDragging,expression:"isDragging"}],ref:"dragInfo",staticClass:"sl-vue-tree-drag-info"},[t._t("draginfo",[t._v("\n        Items: "+t._s(t.selectionSize)+"\n      ")])],2):t._e()],2)])};l._withStripped=!0;var a=function(t,e,n,r,o,i,s,l){var a=typeof(t=t||{}).default;"object"!==a&&"function"!==a||(t=t.default);var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId=i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=l?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var d=c.render;c.render=function(t,e){return u.call(e),d(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,u):[u]}return{exports:t,options:c}}(s,l,[],!1,null,null,null);a.options.__file="src/sl-vue-tree.vue";e.default=a.exports}]).default}));
//# sourceMappingURL=sl-vue-tree.js.map