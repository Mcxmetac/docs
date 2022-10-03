"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9154],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(7462),r=t(7294),l=t(6010),o=t(2389),c=t(7392),i=t(7094),s=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:o,block:d,defaultValue:m,values:b,groupId:h,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=b?b:f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,c.l)(g,((e,n)=>e.value===n.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const x=null===m?m:null!=(n=null!=m?m:null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)?n:f[0].props.value;if(null!==x&&!g.some((e=>e.value===x)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+x+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:T}=(0,i.U)(),[w,I]=(0,r.useState)(x),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&g.some((n=>n.value===e))&&I(e)}const E=e=>{const n=e.currentTarget,t=N.indexOf(n),a=g[t].value;a!==w&&(C(n),I(a),null!=h&&T(h,String(a)))},O=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var a;const n=N.indexOf(e.currentTarget)+1;t=null!=(a=N[n])?a:N[0];break}case"ArrowLeft":{var r;const n=N.indexOf(e.currentTarget)-1;t=null!=(r=N[n])?r:N[N.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},g.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>N.push(e),onKeyDown:O,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},6957:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),l=t(5488),o=t(5162);const c={sidebar_label:"Native network balance"},i="Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)",s={unversionedId:"indexer/guides/native-network-balance",id:"indexer/guides/native-network-balance",title:"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)",description:"Sequence Indexer GetEtherBalance Method:",source:"@site/docs/04-indexer/03-guides/06-native-network-balance.mdx",sourceDirName:"04-indexer/03-guides",slug:"/indexer/guides/native-network-balance",permalink:"/indexer/guides/native-network-balance",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/03-guides/06-native-network-balance.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Native network balance"},sidebar:"sidebar",previous:{title:"Token contract transaction history",permalink:"/indexer/guides/transation-history-token-contract"},next:{title:"Chain ID",permalink:"/indexer/guides/chain-id"}},u={},p=[{value:"Fetch the chain ID",id:"fetch-the-chain-id",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc"},"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetEtherBalance")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetEtherBalance"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetEtherBalance")," MATIC balance of a wallet account address on Polygon")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetEtherBalance -d \'{ "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }\'\n'))),(0,r.kt)(o.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// try any account address you'd like :)\nconst accountAddress = '0xabc...'\n\n// query Sequence Indexer for all token balances of the account on Polygon\nconst tokenBalances = await indexer.getTokenBalances({\n    accountAddress: accountAddress,\n    includeMetadata: true\n})\nconsole.log('tokens in your account:', tokenBalances)\n"))),(0,r.kt)(o.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTokenBalances(accountAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    includeMetadata := true\n\n    tokenBalances, _, err := seqIndexer.GetTokenBalances(context.Background(), &accountAddress, nil, &includeMetadata, nil)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("tokenBalances:", tokenBalances)\n}\n'))),(0,r.kt)(o.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"fetch-the-chain-id"},"Fetch the chain ID"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetChainID")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetChainID"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H"Content-Type: application/json" https://mainnet-indexer.sequence.app/rpc/Indexer/GetChainID\n'))),(0,r.kt)(o.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://mainnet-indexer.sequence.app')\n\nconst { chainID } = await indexer.getChainID()\nconsole.log(chainID) // 1\n"))),(0,r.kt)(o.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetChainID() {\n    seqIndexer := indexer.NewIndexerClient("https://mainnet-indexer.sequence.app", http.DefaultClient)\n\n    chainID, err := seqIndexer.GetChainID(context.Background())\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("chainID:", chainID)\n}\n'))),(0,r.kt)(o.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}m.isMDXComponent=!0}}]);