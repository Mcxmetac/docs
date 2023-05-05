"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[6786],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return a?n.createElement(m,c(c({ref:t},i),{},{components:a})):n.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:a,className:c}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,c),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(7462),r=a(7294),o=a(6010),c=a(2466),l=a(6550),s=a(1980),u=a(7392),i=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[c,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=m({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,i.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=s??d;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var h=a(2389);const y="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,c.o5)(),p=e=>{const t=e.currentTarget,a=i.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:c}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>i.push(e),onKeyDown:f,onClick:p},c,{className:(0,o.Z)("tabs__item",v,c?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function C(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function E(e){const t=(0,h.Z)();return r.createElement(C,(0,n.Z)({key:String(t)},e))}},3070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),c=a(5162);const l={sidebar_label:"Contract metadata"},s="Contract Metadata",u={unversionedId:"metadata/contract-metadata",id:"metadata/contract-metadata",title:"Contract Metadata",description:"* Learn how to query contract-level metadata directly for any contract",source:"@site/docs/05-metadata/04-contract-metadata.mdx",sourceDirName:"05-metadata",slug:"/metadata/contract-metadata",permalink:"/metadata/contract-metadata",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/05-metadata/04-contract-metadata.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Contract metadata"},sidebar:"sidebar",previous:{title:"Token metadata",permalink:"/metadata/token-metadata"},next:{title:"REST API",permalink:"/metadata/rest-api"}},i={},d=[{value:"Fetch contract metadata of any ERC20, ERC721 or ERC1155 contract address",id:"fetch-contract-metadata-of-any-erc20-erc721-or-erc1155-contract-address",level:2},{value:"Contract-level Metadata Standards",id:"contract-level-metadata-standards",level:2}],p={toc:d};function f(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-metadata"},"Contract Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/metadata/token-metadata#fetch-token-metadata-for-any-erc721-or-erc1155-contract"},"Learn how to query contract-level metadata directly for any contract")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/metadata/token-metadata#token-metadata-standards"},"Learn about contract-level metadata for ERC20, ERC721 and ERC1155 tokens"))),(0,r.kt)("admonition",{title:"PRO TIP: Sequence Indexer also returns token metadata",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When using the ",(0,r.kt)("a",{parentName:"p",href:"/indexer"},"Sequence Indexer"),", pass ",(0,r.kt)("inlineCode",{parentName:"p"},'"includeMetadata": true')," to your request to\nquery token metadata for any ERC20, ERC721 or ERC1155 contract. See below how to fetch\ncontract-level metadata directly.")),(0,r.kt)("h2",{id:"fetch-contract-metadata-of-any-erc20-erc721-or-erc1155-contract-address"},"Fetch contract metadata of any ERC20, ERC721 or ERC1155 contract address"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Metadata ",(0,r.kt)("inlineCode",{parentName:"em"},"GetContractInfoBatch")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Metadata/GetContractInfoBatch"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainID"),' (string) -- the chain id, as a name or number (ie. "1" or "mainnet", "137" or "polygon", etc.)'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddresses")," (string of strings) -- array of contract addresses")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetContractInfoBatch")," of some contracts on Polygon")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(c.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H "Content-Type: application/json" https://metadata.sequence.app/rpc/Metadata/GetContractInfoBatch -d \'{ "chainID": "polygon", "contractAddresses": ["0x631998e91476DA5B870D741192fc5Cbc55F5a52E", "0x17b66009af459dc8ebf37acf8a8b355379be2fe5", "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", "0x2953399124f0cbb46d2cbacd8a89cf0599974963", "0x7227e371540cf7b8e512544ba6871472031f3335", "0x7c0ebabfc394ec6d926e801fe0e69a1f15a7fe4d", "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063", "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4"] }\'\n'))),(0,r.kt)(c.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceMetadataClient } from '@0xsequence/metadata'\n\nconst metadataClient = new SequenceMetadataClient()\n\nconst contractMetadata = await metadataClient.getContractInfoBatch({\n  chainID: 'polygon',\n  contractAddresses: [\n    '0x631998e91476DA5B870D741192fc5Cbc55F5a52E',\n    '0x17b66009af459dc8ebf37acf8a8b355379be2fe5',\n    '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',\n    '0x2953399124f0cbb46d2cbacd8a89cf0599974963',\n    '0x7227e371540cf7b8e512544ba6871472031f3335',\n    '0x7c0ebabfc394ec6d926e801fe0e69a1f15a7fe4d',\n    '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',\n    '0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4'\n  ]\n})\n\nconsole.log('Contract info for above addresses:', contractMetadata)\n"))),(0,r.kt)(c.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"contract-level-metadata-standards"},"Contract-level Metadata Standards"),(0,r.kt)("p",null,"Additionally, OpenSea added something called ",(0,r.kt)("inlineCode",{parentName:"p"},"contractURI")," (",(0,r.kt)("a",{parentName:"p",href:"https://docs.opensea.io/docs/contract-level-metadata"},"https://docs.opensea.io/docs/contract-level-metadata"),")."))}f.isMDXComponent=!0}}]);