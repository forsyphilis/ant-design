webpackJsonp([28,197],{855:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(10),s(6)),p=t(o),c=(s(188),s(187)),e=t(c),i=s(1),u=t(i),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"]],"en-US":[["p","The simplest usage that close the notification box after 4.5s."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/notification/demo/basic.md",id:"components-notification-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'Notification Title\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Open the notification box<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){e["default"].open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};return u["default"].createElement(p["default"],{type:"primary",onClick:n},"Open the notification box")}}},856:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(10),s(6)),p=t(o),c=(s(16),s(14)),e=t(c),i=(s(188),s(187)),u=t(i),l=s(1),k=t(l),r=s(2);t(r);n.exports={content:{"zh-CN":[["p","\u56fe\u6807\u53ef\u4ee5\u88ab\u81ea\u5b9a\u4e49\u3002"]],"en-US":[["p","The icon can be customized to any react node."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u56fe\u6807","en-US":"Customized Icon"},filename:"components/notification/demo/custom-icon.md",id:"components-notification-demo-custom-icon"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'Notification Title\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation" >,</span>\n    icon<span class="token punctuation" >:</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>smile-circle<span class="token punctuation" >"</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#2db7f5\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Open the notification box<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){u["default"].open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",icon:k["default"].createElement(e["default"],{type:"smile-circle",style:{color:"#2db7f5"}})})};return k["default"].createElement(p["default"],{type:"primary",onClick:n},"Open the notification box")}}},857:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(10),s(6)),p=t(o),c=(s(188),s(187)),e=t(c),i=s(1),u=t(i),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4",["code","4.5s"],"\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a ",["code","0"]," \u5373\u53ef\u3002"]],"en-US":[["p",["code","Duration"]," can be used to specify how long the notification stays open. After the duration time elapses,\nthe notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,\nthe notification box will never close automatically."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6","en-US":"Duration after which the notification box is closed"},filename:"components/notification/demo/duration.md",id:"components-notification-demo-duration"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> args <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'Notification Title\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'I will never close automatically. I will be close automatically. I will never close automatically.\'</span><span class="token punctuation" >,</span>\n    duration<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span>args<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Open the notification box<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){var n={message:"Notification Title",description:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:0};e["default"].open(n)};return u["default"].createElement(p["default"],{type:"primary",onClick:n},"Open the notification box")}}},858:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(10),s(6)),p=t(o),c=(s(188),s(187)),e=t(c),i=s(1),u=t(i),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u6837\u5f0f\u548c\u6587\u5b57\u3002"]],"en-US":[["p","To customize the style or font of the close button."]]},meta:{order:3,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6309\u94ae","en-US":"Custom close button"},filename:"components/notification/demo/with-btn.md",id:"components-notification-demo-with-btn"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> close <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'Notification was closed. Either the close button was clicked or duration time elapsed.\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> key <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`open</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>Date<span class="token punctuation" >.</span><span class="token function" >now</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btnClick <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// to hide notification box</span>\n    notification<span class="token punctuation" >.</span><span class="token function" >close</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btn <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>btnClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      Confirm\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'Notification Title\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'A function will be be called after the notification is closed (automatically after the "duration" time of manually).\'</span><span class="token punctuation" >,</span>\n    btn<span class="token punctuation" >,</span>\n    key<span class="token punctuation" >,</span>\n    onClose<span class="token punctuation" >:</span> close<span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Open the notification box<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\nmountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){console.log("Notification was closed. Either the close button was clicked or duration time elapsed.")},a=function(){var a="open"+Date.now(),s=function(){e["default"].close(a)},t=u["default"].createElement(p["default"],{type:"primary",size:"small",onClick:s},"Confirm");e["default"].open({message:"Notification Title",description:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',btn:t,key:a,onClose:n})};return u["default"].createElement("div",null,u["default"].createElement(p["default"],{type:"primary",onClick:a},"Open the notification box"))}}},859:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var o=(s(10),s(6)),p=t(o),c=(s(188),s(187)),e=t(c),i=s(1),u=t(i),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"]],"en-US":[["p","A notification box with a icon at the left side."]]},meta:{order:2,title:{"zh-CN":"\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u63d0\u9192\u6846","en-US":"Notification with icon"},filename:"components/notification/demo/with-icon.md",id:"components-notification-demo-with-icon"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotificationWithIcon <span class="token operator" >=</span> type <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  notification<span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'Notification Title\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'success\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Success<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'info\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Info<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'warning\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Warning<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'error\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>Error<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){return function(){return e["default"][n]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})}};return u["default"].createElement("div",null,u["default"].createElement(p["default"],{onClick:n("success")},"Success"),u["default"].createElement(p["default"],{onClick:n("info")},"Info"),u["default"].createElement(p["default"],{onClick:n("warning")},"Warning"),u["default"].createElement(p["default"],{onClick:n("error")},"Error"))},style:"\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"}},1211:function(n,a,s){n.exports={basic:s(855),"custom-icon":s(856),duration:s(857),"with-btn":s(858),"with-icon":s(859)}}});