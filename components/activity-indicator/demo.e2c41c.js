webpackJsonp(["components/activity-indicator/demo"],{"/dYH":function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u7840","en-US":"Basic"},filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ActivityIndicator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-demo-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span><span class="token punctuation">></span></span>\u52a0\u8f7d\u4e2d<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ActivityIndicator</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#f5222d<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span> <span class="token attr-name">vertical</span><span class="token punctuation">></span></span>\n      loading<span class="token operator">...</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ActivityIndicator</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("Jmof"),a=(s("wLXD"),s("JkW7"));return n.createElement("div",{className:"m-demo-list"},n.createElement(a.ActivityIndicator,null,"\u52a0\u8f7d\u4e2d..."),n.createElement(a.ActivityIndicator,{color:"#f5222d",size:26,vertical:!0},"loading..."))},style:".m-demo-list {\n  padding: 10px;\n}\n\n.m-demo-list > .m-activity-indicator {\n  margin-bottom: 16px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.m-demo-list</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.m-demo-list</span> > <span class="token class">.m-activity-indicator</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},"4rJ0":function(n,a,s){n.exports={basic:s("/dYH"),carousel:s("eeQU")}},eeQU:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"Carousel","en-US":"Carousel"},filename:"components/activity-indicator/demo/carousel.md",id:"components-activity-indicator-demo-carousel"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> ActivityIndicator <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'modo-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    loading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  handleClick <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>m-demo-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>carousel<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>carousel<span class="token punctuation">"</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#fff<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>12<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token string">\'\u786e\u8ba4\u652f\u4ed8\'</span><span class="token punctuation">}</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s("Jmof"),a=(s("wLXD"),function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}()),t=s("JkW7");function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}var o=function(s){function o(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,e=Array(t),c=0;c<t;c++)e[c]=arguments[c];return a=s=p(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),s.state={loading:!1},s.handleClick=function(){s.setState({loading:!0}),setTimeout(function(){s.setState({loading:!1})},3e3)},p(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),a(o,[{key:"render",value:function(){var a=this.state.loading;return n.createElement("div",{className:"m-demo-list"},n.createElement(t.ActivityIndicator,{type:"carousel"}),n.createElement(t.Button,{type:"primary",disabled:a,onClick:this.handleClick},a?n.createElement(t.ActivityIndicator,{type:"carousel",color:"#fff",size:"12"}):"\u786e\u8ba4\u652f\u4ed8"))}}]),o}();return n.createElement(o,null)},style:".m-demo-list {\n  padding: 10px;\n}\n\n.m-demo-list > .m-activity-indicator {\n  margin-bottom: 16px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.m-demo-list</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.m-demo-list</span> > <span class="token class">.m-activity-indicator</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});