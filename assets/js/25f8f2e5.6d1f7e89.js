"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7462),a=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var b=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==i&&(d(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(k,(0,r.Z)({},e,t)))}function x(e){const t=(0,b.Z)();return a.createElement(v,(0,r.Z)({key:String(t)},e))}},4301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_label:"Wallet transaction history"},s="Wallet transaction history",c={unversionedId:"indexer/transaction-history",id:"indexer/transaction-history",title:"Wallet transaction history",description:"Fetch the transaction history for any wallet address",source:"@site/docs/04-indexer/04-transaction-history.mdx",sourceDirName:"04-indexer",slug:"/indexer/transaction-history",permalink:"/indexer/transaction-history",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/04-transaction-history.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Wallet transaction history"},sidebar:"sidebar",previous:{title:"Tokens API",permalink:"/indexer/fetch-tokens"},next:{title:"All unique tokens in a contract",permalink:"/indexer/unique-tokens"}},u={},d=[{value:"Fetch the transaction history for any wallet address",id:"fetch-the-transaction-history-for-any-wallet-address",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wallet-transaction-history"},"Wallet transaction history"),(0,a.kt)("h2",{id:"fetch-the-transaction-history-for-any-wallet-address"},"Fetch the transaction history for any wallet address"),(0,a.kt)("p",null,"Fetches the transaction / token history for any wallet address of any ERC20, ERC721 and ERC1155 token.\nThe response includes decoded transaction details for easy consumption / rendering."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,a.kt)("inlineCode",{parentName:"em"},"GetTransactionHistory")," Method:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTransactionHistory"),(0,a.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,a.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter")," (object)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- optionally specify a contract address to filter"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"accountAddresses")," (string array) -- optionally specify a list of wallet account addresses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contractAddresses")," (string array) -- optionally specify a list of contract address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"transactionHashes")," (string array) -- optionally specify a list of transaction hashes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metaTransactionIDs")," (string array) -- optionally specify a list of meta transaction IDs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fromBlock")," (number) -- optionally specify the starting block to select a range"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"toBlock")," (number) -- optionally specify the ending block to select a range"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: ",(0,a.kt)("inlineCode",{parentName:"strong"},"GetTransactionHistory")," of a wallet account address on Polygon")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H "Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetTransactionHistory -d \'{ "filter": { "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }, "includeMetadata": true }\'\n'))),(0,a.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// try any account address you'd like :)\nconst filter = {\n    accountAddress: \"0xabc...\"\n}\n\n// query Sequence Indexer for all token transaction history on Polygon\nconst transactionHistory = await indexer.getTransactionHistory({\n    filter: filter,\n    includeMetadata: true\n})\n    \nconsole.log('transaction history in account:', transactionHistory)\n"))),(0,a.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTransactionHistory(accountAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    filter := &indexer.TransactionHistoryFilter{\n        AccountAddress: &accountAddress,\n    }\n    includeMetadata := true\n\n    _, history, err := seqIndexer.GetTransactionHistory(context.Background(), filter, nil, &includeMetadata)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("transaction history:", history)\n}\n'))),(0,a.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}f.isMDXComponent=!0}}]);