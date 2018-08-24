webpackJsonp([0],{1141:function(n,s,a){n.exports={basic:a(1158),custom:a(1159),iconfont:a(1162)}},1158:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 ",["code","<Icon />"]," \u6807\u7b7e\u58f0\u660e\u7ec4\u4ef6\uff0c\u6307\u5b9a\u56fe\u6807\u5bf9\u5e94\u7684 ",["code","type"]," \u5c5e\u6027\u3002\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",["code","spin"]," \u5c5e\u6027\u6765\u5b9e\u73b0\u52a8\u753b\u65cb\u8f6c\u6548\u679c\u3002"]],"en-US":[["p","Use tag ",["code","<Icon />"]," to create an icon and set its type in the ",["code","type"]," prop. Specific the ",["code","spin"]," property to show spinning animation."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c\u7528\u6cd5","en-US":"Basic"},filename:"components/icon/demo/basic.md",id:"components-icon-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"modo-mobile"</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icons-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>home<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>setting<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>reload<span class="token punctuation">"</span></span> <span class="token attr-name">spin</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(9),a(415));return n.createElement("div",{className:"icons-list"},n.createElement(s.Icon,{type:"home"}),n.createElement(s.Icon,{type:"setting"}),n.createElement(s.Icon,{type:"smile"}),n.createElement(s.Icon,{type:"loading"}),n.createElement(s.Icon,{type:"reload",spin:!0}))},style:".icons-list {\n  padding: 16px;\n}\n.icons-list > .m-icon {\n  margin-right: 6px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.icons-list</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.icons-list</span> > <span class="token class">.m-icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">6</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},1159:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u5229\u7528 ",["code","Icon"]," \u7ec4\u4ef6\u5c01\u88c5\u4e00\u4e2a\u53ef\u590d\u7528\u7684\u81ea\u5b9a\u4e49\u56fe\u6807\u3002\u53ef\u4ee5\u901a\u8fc7 ",["code","component"]," \u5c5e\u6027\u4f20\u5165\u4e00\u4e2a\u7ec4\u4ef6\u6765\u6e32\u67d3\u6700\u7ec8\u7684\u56fe\u6807\uff0c\u4ee5\u6ee1\u8db3\u7279\u5b9a\u7684\u9700\u6c42\u3002\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u4f7f\u7528\u4e86 ",["code","@svgr/webpack"]," \u6765\u5c06 ",["code","svg"]," \u56fe\u6807\u8f6c\u5316\u4e3a ",["code","React"]," \u7ec4\u4ef6\u3002"]],"en-US":[["p","Create a reusable React component by using ",["code","<Icon component={...} />"],". The property ",["code","component"]," takes a React component that renders to ",["code","svg"]," element. This demo shows how to convert ",["code","svg"]," icon to a React component by using ",["code","webpack"]," and loader ",["code","@svgr/webpack"],"."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u56fe\u6807","en-US":"Custom Icon"},filename:"components/icon/demo/custom.md",id:"components-icon-demo-custom"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"modo-mobile"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> HeartSvg <span class="token keyword">from</span> <span class="token string">"./assets/heart.svg"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> AntDesignSvg <span class="token keyword">from</span> <span class="token string">"./assets/ant-design.svg"</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// use webpack loader `@svgr/webpack`,</span>\n<span class="token comment" spellcheck="true">// which converts the `*.svg` file into a React component.</span>\n\n<span class="token keyword">const</span> HeartIcon <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>HeartSvg<span class="token punctuation">}</span></span> <span class="token attr-name">{...props}</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> AntDesignIcon <span class="token operator">=</span> props <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>AntDesignSvg<span class="token punctuation">}</span></span> <span class="token attr-name">{...props}</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-icons-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HeartIcon</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">"hotpink"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AntDesignIcon</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fontSize<span class="token punctuation">:</span> <span class="token string">"32px"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(9),Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n}),t=a(415),e=o(a(1160)),p=o(a(1161));function o(n){return n&&n.__esModule?n:{default:n}}return n.createElement("div",{className:"custom-icons-list"},n.createElement(function(a){return n.createElement(t.Icon,s({component:e.default},a))},{style:{color:"hotpink"}}),n.createElement(function(a){return n.createElement(t.Icon,s({component:p.default},a))},{style:{fontSize:"32px"}}))},style:".custom-icons-list {\n  padding: 16px;\n}\n.custom-icons-list > .m-icon {\n  margin-right: 6px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.custom-icons-list</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">16</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.custom-icons-list</span> > <span class="token class">.m-icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">6</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},1160:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},e=function(n){return n&&n.__esModule?n:{default:n}}(a(0));s.default=function(n){return e.default.createElement("svg",t({className:"icon",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},n),e.default.createElement("defs",null),e.default.createElement("path",{d:"M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9z"}))}},1161:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},e=function(n){return n&&n.__esModule?n:{default:n}}(a(0));s.default=function(n){return e.default.createElement("svg",t({viewBox:"0 0 200 200",width:"1em",height:"1em"},n),e.default.createElement("defs",null,e.default.createElement("linearGradient",{x1:"62.102%",y1:"0%",x2:"108.197%",y2:"37.864%",id:"a"},e.default.createElement("stop",{stopColor:"#4285EB",offset:"0%"}),e.default.createElement("stop",{stopColor:"#2EC7FF",offset:"100%"})),e.default.createElement("linearGradient",{x1:"69.644%",y1:"0%",x2:"54.043%",y2:"108.457%",id:"b"},e.default.createElement("stop",{stopColor:"#29CDFF",offset:"0%"}),e.default.createElement("stop",{stopColor:"#148EFF",offset:"37.86%"}),e.default.createElement("stop",{stopColor:"#0A60FF",offset:"100%"})),e.default.createElement("linearGradient",{x1:"69.691%",y1:"-12.974%",x2:"16.723%",y2:"117.391%",id:"c"},e.default.createElement("stop",{stopColor:"#FA816E",offset:"0%"}),e.default.createElement("stop",{stopColor:"#F74A5C",offset:"41.473%"}),e.default.createElement("stop",{stopColor:"#F51D2C",offset:"100%"})),e.default.createElement("linearGradient",{x1:"68.128%",y1:"-35.691%",x2:"30.44%",y2:"114.943%",id:"d"},e.default.createElement("stop",{stopColor:"#FA8E7D",offset:"0%"}),e.default.createElement("stop",{stopColor:"#F74A5C",offset:"51.264%"}),e.default.createElement("stop",{stopColor:"#F51D2C",offset:"100%"}))),e.default.createElement("g",{fill:"none",fillRule:"evenodd"},e.default.createElement("g",{fillRule:"nonzero"},e.default.createElement("path",{d:"M91.588 4.177L4.18 91.513a11.981 11.981 0 0 0 0 16.974l87.408 87.336a12.005 12.005 0 0 0 16.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c1.17-1.169 2.944-1.169 4.114 0l27.783 27.76c4.209 4.205 11.032 4.205 15.24 0 4.209-4.205 4.209-11.022 0-15.227L108.581 4.056c-4.719-4.594-12.312-4.557-16.993.12z",fill:"url(#a)"}),e.default.createElement("path",{d:"M91.588 4.177L4.18 91.513a11.981 11.981 0 0 0 0 16.974l87.408 87.336a12.005 12.005 0 0 0 16.989 0l36.648-36.618c4.209-4.205 4.209-11.023 0-15.228-4.208-4.205-11.031-4.205-15.24 0l-27.783 27.76c-1.17 1.169-2.945 1.169-4.114 0l-69.802-69.744c-1.17-1.169-1.17-2.942 0-4.11l69.802-69.745c2.912-2.51 7.664-7.596 14.642-8.786 5.186-.883 10.855 1.062 17.009 5.837L108.58 4.056c-4.719-4.594-12.312-4.557-16.993.12z",fill:"url(#b)"}),e.default.createElement("path",{d:"M153.686 135.855c4.208 4.205 11.031 4.205 15.24 0l27.034-27.012c4.7-4.696 4.7-12.28 0-16.974l-27.27-27.15c-4.218-4.2-11.043-4.195-15.254.013-4.209 4.205-4.209 11.022 0 15.227l18.418 18.403c1.17 1.169 1.17 2.943 0 4.111l-18.168 18.154c-4.209 4.205-4.209 11.023 0 15.228z",fill:"url(#c)"})),e.default.createElement("ellipse",{fill:"url(#d)",cx:100.519,cy:100.437,rx:23.6,ry:23.581})))}},1162:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u5bf9\u4e8e\u4f7f\u7528 ",["a",{title:null,href:"http://iconfont.cn/"},"iconfont.cn"]," \u7684\u7528\u6237\uff0c\u901a\u8fc7\u8bbe\u7f6e ",["code","createFromIconfontCN"]," \u65b9\u6cd5\u53c2\u6570\u5bf9\u8c61\u4e2d\u7684 ",["code","namespace"]," \u548c ",["code","scriptUrl"]," \u5b57\u6bb5\uff0c \u5373\u53ef\u8f7b\u677e\u5730\u4f7f\u7528\u5df2\u6709\u9879\u76ee\u4e2d\u7684\u56fe\u6807\u3002"]],"en-US":[["p","If you are using ",["a",{title:null,href:"http://iconfont.cn/"},"iconfont.cn"],", you can use the icons in your project gracefully."]]},meta:{order:3,title:{"zh-CN":"\u4f7f\u7528 iconfont.cn","en-US":"Use iconfont.cn"},filename:"components/icon/demo/iconfont.md",id:"components-icon-demo-iconfont"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"modo-mobile"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> IconFont <span class="token operator">=</span> Icon<span class="token punctuation">.</span><span class="token function">createFromIconfontCN</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  scriptUrl<span class="token punctuation">:</span> <span class="token string">"//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icons-list<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconFont</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon-tuichu<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconFont</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon-facebook<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IconFont</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon-twitter<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(9),a(415).Icon.createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"}));return n.createElement("div",{className:"icons-list"},n.createElement(s,{type:"icon-tuichu"}),n.createElement(s,{type:"icon-facebook"}),n.createElement(s,{type:"icon-twitter"}))},style:".icons-list > .m-icon {\n  margin-right: 6px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.icons-list</span> > <span class="token class">.m-icon</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-right</span><span class="token punctuation">:</span> <span class="token number">6</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});