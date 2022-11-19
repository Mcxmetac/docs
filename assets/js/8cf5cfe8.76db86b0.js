"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6535],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2097:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(9960);const o=function(e){const t=e.cards;return n.createElement("div",{className:"container",style:{padding:5}},n.createElement("div",{className:"row is-multiline"},t.map(((e,t)=>n.createElement("div",{className:"col col--6",key:t,style:{padding:5}},n.createElement(a.Z,{className:"card",to:e.route,style:{height:"100%",textAlign:"center"}},n.createElement("div",{className:"card__body"},n.createElement("h4",null,e.title),n.createElement("p",null,e.description))))))))}},8981:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(2097);const i={slug:"/intro/overview"},s="Sequence web3 stack & wallet",l={unversionedId:"intro/overview",id:"intro/overview",title:"Sequence web3 stack & wallet",description:"Sequence provides users with a seamless web3 wallet to access Ethereum-compatible networks, and a powerful web3 infrastructure stack",source:"@site/docs/01-intro/01-overview.mdx",sourceDirName:"01-intro",slug:"/intro/overview",permalink:"/intro/overview",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/01-intro/01-overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/intro/overview"},sidebar:"sidebar",next:{title:"Ethereum Compatibility",permalink:"/intro/eth-compat"}},c={},u=[{title:"\ud83d\udc64 Wallet",description:"Sequence Wallet is a seamless and super friendly experience for web3. No blockchain knowledge required. Available on Web and Mobile.",route:"/wallet"},{title:"\u26d3\ufe0f Indexer",description:"Sequence Indexer is a powerful API to query any blockchain token and NFT data. Easily display any tokens or NFTs in your apps/games instantly from any EVM chain.",route:"/indexer"},{title:"\ud83e\udd84 Metadata",description:"Sequence Metadata is a simple API to instantly retrieve token and NFT metadata and render within your apps and games.",route:"/metadata"},{title:"\u26fd Relayer",description:"Sequence Relayer extends the capabilities of an EVM chain by offering batches, parallel and sponsored transactions.",route:"/relayer"},{title:"\ud83c\udf0e Web SDK",description:"Sequence Web SDK is a simple & powerful Ethereum development library, built on ethers.js. Available for Web browsers and node.js. Compatible with Metamask and any other wallet.",route:""},{title:"\ud83d\udcf1 Mobile SDK",description:"Sequence Mobile SDK offers you the ability to integrate web3 capabilities into your iOS or Android apps/games.",route:""},{title:"\ud83d\udd79 Unity SDK",description:"Easily connect your Unity game to the world of web3 with the Sequence web3 Unity SDK. No blockchain or web3 experience required.",route:"/unity-sdk"},{title:"\ud83c\udfae Unreal SDK",description:"Easily connect your Unreal game to the world of web3 with the Sequence web3 Unity SDK. No blockchain or web3 experience required.",route:"/games-sdk"},{title:"\ud83d\udda5 Server SDK",description:"Sequence Server SDK allows you to easily integrate the Sequence Wallet and Stack from your backend.",route:""},{title:"\ud83c\udf20 Niftyswap",description:"An AMM collectible swap protocol for semi-fungible assets built on the ERC-1155 standard.",route:"https://niftyswap.io"},{title:"\ud83d\udcb3 On Ramps",description:"With the Sequence Wallet, you automatically have on-ramp integrations to the major on-ramp providers, including: Wyre, Moonpay and Ramp.",route:""},{title:"\ud83c\udf09 Node-Gateway",description:"Enhance the capabilities of any Ethereum-compatible JSON-RPC node with higher uptime, fault-tolerance and scalability.",route:"/node-gateway"}],p=[{value:"The Sequence Stack",id:"the-sequence-stack",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sequence-web3-stack--wallet"},"Sequence web3 stack & wallet"),(0,a.kt)("p",null,"Sequence provides users with a seamless web3 wallet to access Ethereum-compatible networks, and a powerful web3 infrastructure stack\nfor developers that makes it easy to build web3 apps and games."),(0,a.kt)("p",null,'Sequence is designed as a modular web3 system focused on open standards, compatibility and interoperability with Ethereum-compatible networks\nand developer tools. With Sequence, you can use just one of the modules, or the entire stack. As well, feel free to combine\nSequence with your favorite developer tools. This is one of the beautiful aspects of "web3" -- open standards and\ncompatibility :)'),(0,a.kt)("p",null,"Thanks for browsing our documentation below which will take you through our Wallet, Infrastructure stack and SDKs. If you have\nany questions, feel free to visit us on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/sequence"},"Discord")," to speak with our development and partnership teams."),(0,a.kt)("p",null,"Finally, be sure to check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/0xsequence"},"Sequence Github")," page to view source of our SDKs and example projects."),(0,a.kt)("h2",{id:"the-sequence-stack"},"The Sequence Stack"),(0,a.kt)(o.Z,{cards:u,mdxType:"Cards"}))}m.isMDXComponent=!0}}]);