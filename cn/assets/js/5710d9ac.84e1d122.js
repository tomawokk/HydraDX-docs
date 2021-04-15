(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(89)),i=(n(90),{id:"node_setup",title:"\u642d\u5efa HydraDX \u8282\u70b9"}),o={unversionedId:"node_setup",id:"node_setup",isDocsHomePage:!1,title:"\u642d\u5efa HydraDX \u8282\u70b9",description:"\u672c\u8282\u5c06\u5f15\u5bfc\u60a8\u642d\u5efa\u53ca\u8fd0\u884c HydraDX \u9a8c\u8bc1\u8282\u70b9\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/node_setup.md",slug:"/node_setup",permalink:"/cn/node_setup",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_setup.md",version:"current",sidebar:"sidebar",previous:{title:"\u8d28\u62bc",permalink:"/cn/staking"},next:{title:"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5",permalink:"/cn/performance_benchmark"}},l=[{value:"00 \u57fa\u672c\u6027\u80fd\u8981\u6c42",id:"00-required-technical-specifications",children:[]},{value:"01 \u786e\u4fdd\u7cfb\u7edf\u65f6\u95f4\u540c\u6b65",id:"01-check-whether-your-system-clock-is-synchronized",children:[]},{value:"02 \u8c03\u6574\u9632\u706b\u5899\u8bbe\u7f6e",id:"02-adjust-your-firewall-settings",children:[]},{value:"03 \u4e0b\u8f7d\u6216\u5b89\u88c5\u7f16\u8bd1\u6587\u4ef6",id:"03-download-or-build-a-binary",children:[]},{value:"04 \u8fd0\u884c\u7f16\u8bd1\u6587\u4ef6",id:"04-run-the-binary",children:[]},{value:"05 \u5c06\u7a0b\u5e8f\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u52a8\u8fd0\u884c",id:"05-running-with-systemd",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u672c\u8282\u5c06\u5f15\u5bfc\u60a8\u642d\u5efa\u53ca\u8fd0\u884c HydraDX \u9a8c\u8bc1\u8282\u70b9\u3002"),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u4fdd\u8bc1\u9a8c\u8bc1\u8282\u70b9\u5728\u7ebf\u8fd0\u884c\u65f6\u95f4\uff0c\u8fd0\u884c\u5e76\u5408\u7406\u8bbe\u7f6e\u8282\u70b9\uff0c\u9700\u8981\u4e00\u5b9a\u7684\u6280\u672f\u77e5\u8bc6\u3002\u5982\u679c\u5bf9\u76f8\u5173\u6280\u672f\u77e5\u8bc6\u4e0d\u662f\u5f88\u4e86\u89e3\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u628a\u4ee4\u724c\u4ee5 ",Object(c.b)("a",{parentName:"p",href:"/start_nominating"},"\u63d0\u540d"),"  \u7684\u65b9\u5f0f\u8d28\u62bc\u7ed9\u6709\u7ecf\u9a8c\u548c\u6280\u672f\u7684\u9a8c\u8bc1\u4eba\u3002\u5982\u6b64\u4e00\u6765\uff0c\u60a8\u53ef\u4ee5\u540c\u65f6\u4fdd\u62a4\u81ea\u5df1\u548c\u53ef\u80fd\u8d28\u62bc\u60a8\u8282\u70b9\u7684\u63d0\u540d\u4eba\u514d\u53d7\u975e\u81ea\u613f\u635f\u5931\u3002"))),Object(c.b)("h2",{id:"00-required-technical-specifications"},"00 \u57fa\u672c\u6027\u80fd\u8981\u6c42"),Object(c.b)("p",null,"\u4ee5\u4e0b\u662f\u8fd0\u884c\u9a8c\u8bc1\u8282\u70b9\u7684\u786c\u4ef6\u53ca\u7cfb\u7edf\u7684\u57fa\u672c\u6027\u80fd\u8981\u6c42: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7cfb\u7edf: Ubuntu 20.04"),Object(c.b)("li",{parentName:"ul"},"CPU: Intel Core i7-7700K @ 4.5Ghz (\u6216\u540c\u7b49\u5355\u6838\u6027\u80fd)"),Object(c.b)("li",{parentName:"ul"},"\u5185\u5b58: 64GB RAM"),Object(c.b)("li",{parentName:"ul"},"\u786c\u76d8: NVMe SSD \u2265200GB (\u968f\u7740\u94fe\u7684\u589e\u957f\uff0c\u6570\u636e\u4f1a\u8d8a\u6765\u8d8a\u591a)")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u4ee5\u4e0a\u662f\u8fd0\u884c\u9a8c\u8bc1\u8282\u70b9\u7684\u6700\u4f4e\u8981\u6c42\u3002\u5982\u679c\u60a8\u4e0d\u786e\u5b9a\u81ea\u5df1\u7684\u8ba1\u7b97\u673a\u662f\u5426\u6ee1\u8db3\u8981\u6c42\uff0c\u8bf7\u60a8\u505a ",Object(c.b)("a",{parentName:"p",href:"/performance_benchmark"},"\u57fa\u672c\u6027\u80fd\u6d4b\u8bd5")," \u3002"))),Object(c.b)("h2",{id:"01-check-whether-your-system-clock-is-synchronized"},"01 \u786e\u4fdd\u7cfb\u7edf\u65f6\u95f4\u540c\u6b65"),Object(c.b)("p",null,"\u5728\u8fd0\u884c\u9a8c\u8bc1\u8282\u70b9\u4e4b\u524d\uff0c\u8bf7\u786e\u8ba4\u60a8\u7684\u7cfb\u7edf\u65f6\u95f4\u5df2\u7ecf\u4e0e\u7f51\u7edc\u540c\u6b65\u3002\u6240\u6709\u7684\u9a8c\u8bc1\u8282\u70b9\u662f\u5728\u540c\u6b65\u5de5\u4f5c\u7684\uff0c\u56e0\u6b64\u8fd9\u4e00\u6b65\u5f88\u5173\u952e\u3002Ubuntu 20.04 \u7684\u65f6\u949f\u9ed8\u8ba4\u662f\u4e0e\u7f51\u7edc\u540c\u6b65\u7684\uff0c\u5982\u8981\u786e\u8ba4\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u4ee3\u7801\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'$ timedatectl | grep "System clock"\nSystem clock synchronized: yes\n')),Object(c.b)("p",null,"\u5982\u679c\u663e\u793a\u4e3a \u201cno\u201d \uff08\u8868\u793a\u4e0d\u540c\u6b65\uff09\uff0c\u5219\u9700\u624b\u52a8\u5b89\u88c5 NTP \u5e76\u518d\u6b21\u786e\u8ba4\u65f6\u949f\u662f\u5426\u540c\u6b65\uff08\u4e00\u76f4\u5230\u540c\u6b65\u4e3a\u6b62\uff09\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ apt install ntp\n$ ntpq -p\n")),Object(c.b)("h2",{id:"02-adjust-your-firewall-settings"},"02 \u8c03\u6574\u9632\u706b\u5899\u8bbe\u7f6e"),Object(c.b)("p",null,"\u7aef\u53e3 ",Object(c.b)("inlineCode",{parentName:"p"},"30333")," \u662f Hydradx \u7528\u4e8e\u7f51\u7edc\u6240\u6709\u8282\u70b9\u670d\u52a1\u5668\u7684 P2P \u670d\u52a1\u3002\u5982\u679c\u60a8\u7684\u8ba1\u7b97\u673a\u662f\u4ee5\u9a8c\u8bc1\u4eba\u7684\u8eab\u4efd\u8fd0\u884c\u7684\uff0c\u6211\u4eec\u5efa\u8bae\u628a\u9632\u706b\u5899\u8bbe\u7f6e\u4e3a\u4ec5\u53ef\u4ee5\u6b64\u7aef\u53e3\u7528\u4e8e\u8fdc\u7aef\u8bbf\u95ee\u3002"),Object(c.b)("p",null,"\u5982\u679c\u60a8\u7684\u673a\u5668 ",Object(c.b)("em",{parentName:"p"},"\u4e0d")," \u7528\u4f5c\u9a8c\u8bc1\u8282\u70b9\uff0c\u90a3\u60a8\u53ef\u8003\u8651\u540c\u65f6\u6253\u5f00\u7aef\u53e3 ",Object(c.b)("inlineCode",{parentName:"p"},"9944"),"\uff08\u7528\u4e8e RPC Websocket \u670d\u52a1\uff09\u548c\u7aef\u53e3 ",Object(c.b)("inlineCode",{parentName:"p"},"9933"),"\uff08\u7528\u4e8e HTTP \u670d\u52a1\uff09\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u7aef\u53e3 ",Object(c.b)("inlineCode",{parentName:"p"},"9944")," \u901a\u8fc7 ",Object(c.b)("a",{parentName:"p",href:"/polkadotjs_apps_local"},"Polkadot/apps")," \u8fde\u63a5\u5230\u60a8\u7684\u8282\u70b9\u3002"),Object(c.b)("h2",{id:"03-download-or-build-a-binary"},"03 \u4e0b\u8f7d\u6216\u5b89\u88c5\u7f16\u8bd1\u6587\u4ef6"),Object(c.b)("p",null,"\u60a8\u53ef\u4ee5\u5728 ",Object(c.b)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/releases"},"github")," \u4e0a\u4e0b\u8f7d\u6700\u65b0\u7684\u7f16\u8bd1\u6587\u4ef6\u3002"),Object(c.b)("p",null,"\u6216\u8005\u60a8\u53ef\u4ee5\u7528\u4ee5\u4e0b\u4ee3\u7801\u81ea\u5df1\u6784\u5efa\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\n$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n\n# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# Build the binary\n$ cd HydraDX-node/\n$ cargo build --release\n")),Object(c.b)("p",null,"\u5982\u679c\u60a8\u662f\u7528\u4ee5\u4e0a\u4ee3\u7801\u6765\u6784\u5efa\u7684\uff0c\u60a8\u7684\u7f16\u8bd1\u6587\u4ef6\u5c31\u5728\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"target/release/hydra-dx\n")),Object(c.b)("h2",{id:"04-run-the-binary"},"04 \u8fd0\u884c\u7f16\u8bd1\u6587\u4ef6"),Object(c.b)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u8fd0\u884c\u7f16\u8bd1\u6587\u4ef6:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u9a8c\u8bc1\u8282\u70b9\u9700\u8981\u5b8c\u6574\u7684\u6570\u636e\u94fe\u3002\u5982\u679c\u60a8\u4e4b\u524d\u8bbe\u7f6e\u8fc7\u8282\u70b9\u5e76\u6ca1\u6709\u5f00\u542f ",Object(c.b)("inlineCode",{parentName:"p"},"--validator")," \u7684\u8bdd\uff0c\u5728\u52a0\u5165\u5e76\u8fd0\u884c\u60a8\u7684\u9a8c\u8bc1\u8282\u70b9\u4e4b\u524d\u9700\u8981\u91cd\u7f6e\u53ca\u66f4\u65b0\u6570\u636e\u94fe\uff1a"),Object(c.b)("pre",{parentName:"div"},Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna\n")))),Object(c.b)("p",null,"\u5728\u8fd0\u884c\u7f16\u8bd1\u6587\u4ef6\u524d\uff0c\u60a8\u9700\u8981\u4e3a\u60a8\u7684\u8282\u70b9\u8d77\u540d\uff0c\u8fd9\u4e2a\u540d\u79f0\u5c06\u4f1a\u548c\u6240\u6709\u5728 Hydradx Snakenet \u8fd0\u884c\u7684\u8282\u70b9\u4e00\u8d77\uff0c\u5728 ",Object(c.b)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/HydraDX%20Snakenet"},"Telemetry")," \u9875\u9762\u4e2d\u5217\u51fa\u3002"),Object(c.b)("h2",{id:"05-running-with-systemd"},"05 \u5c06\u7a0b\u5e8f\u8bbe\u7f6e\u4e3a\u5f00\u673a\u81ea\u52a8\u8fd0\u884c"),Object(c.b)("p",null,"\u6211\u4eec\u5efa\u8bae\u5c06 Hydradx \u8282\u70b9\u52a0\u5165\u7cfb\u7edf\u670d\u52a1\uff0c\u4ee5\u907f\u514d\u91cd\u542f\u540e\u7a0b\u5e8f\u4e0d\u4f1a\u81ea\u52a8\u5f00\u542f\u3002\u4e3a\u6b64\uff0c\u8bf7\u521b\u5efa\u4ee5\u4e0b\u6587\u4ef6\uff0c\u5e76\u66ff\u6362 ",Object(c.b)("inlineCode",{parentName:"p"},"{VARIABLE}")," \u4e2d\u7684\u53d8\u91cf\u4e3a\u60a8\u7684\u8282\u70b9\u540d\u79f0\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ touch /etc/systemd/system/hydradx-validator.service\n")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"[Unit]\nDescription=HydraDX validator\n\n[Service]\nType=exec\nUser={UNIX_USER}\nExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"\u5efa\u8bae\u8bbe\u7f6e RestartSec\uff0c\u5982\u679c\u53d1\u751f\u5d29\u6e83\uff0c\u5b83\u4f1a\u5ef6\u8fdf\u8282\u70b9\u7684\u91cd\u65b0\u542f\u52a8\u3002\u5ef6\u8fdf\u91cd\u542f\uff0c\u4e3a\u8ba1\u7b97\u673a\u5c06\u6240\u6709\u975e\u6301\u4e45\u6027\u6570\u636e\uff08\u5982\u5171\u8bc6\u6295\u7968\uff09\u5199\u5165\u78c1\u76d8\uff0c\u9884\u7559\u4e86\u65f6\u95f4\u3002\u5982\u679c\u5728\u7a0b\u5e8f\u5d29\u6e83\u540e\u7acb\u5373\u91cd\u542f\u8282\u70b9\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6df7\u4e71\u6216\u4e8c\u6b21\u7b7e\u540d\uff0c\u4ece\u800c\u89e6\u53d1\u8d23\u7f5a\u673a\u5236\u3002"))),Object(c.b)("p",null,"\u5728\u5c06 Hydradx \u8bbe\u7f6e\u4e3a\u7cfb\u7edf\u8fd0\u884c\u7a0b\u5e8f\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u4e0e\u7a0b\u5e8f\u4ea4\u6d41\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"# Start the node at system boot\n$ systemctl enable hydradx-validator.service\n\n# Start the node manually\n$ systemctl start hydradx-validator.service\n\n# Check the status of the node\n$ systemctl status hydradx-validator.service\n\n# Check the logs of the node\n$ journalctl -f -u hydradx-validator.service\n")),Object(c.b)("p",null,"\u606d\u559c\u60a8\uff0c\u73b0\u5728\u60a8\u5df2\u7ecf\u5b8c\u6210\u9a8c\u8bc1\u8282\u70b9\u642d\u5efa\u5e76\u6b63\u5728\u8fd0\u884c\uff01"),Object(c.b)("p",null,"\u63a5\u4e0b\u6765\u524d\u5f80 ",Object(c.b)("a",{parentName:"p",href:"/start_validating"},"\u5f00\u59cb\u9a8c\u8bc1")," \uff0c\u5b8c\u6210\u5269\u4e0b\u7684\u6b65\u9aa4\u3002"))}s.isMDXComponent=!0},89:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||p[u]||c;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(16),r=n(92);function c(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var c=void 0===a?{}:a,i=c.forcePrependBaseUrl,o=void 0!==i&&i,l=c.absolute,b=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+s:s}(c,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},92:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);