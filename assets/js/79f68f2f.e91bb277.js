"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[1186],{4019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(1527),r=n(7279);n(370),n(1804);const s={sidebar_label:"REST API"},o="Metadata REST API Reference & Usage",c={id:"metadata/rest-api",title:"Metadata REST API Reference & Usage",description:"Our Metadata API service is now managed through Sequence Builder. Usage is charged in credits - issued monthly based your subscription plan. Sign up to grab your API access key.",source:"@site/docs/250-metadata/05-rest-api.mdx",sourceDirName:"250-metadata",slug:"/metadata/rest-api",permalink:"/metadata/rest-api",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/250-metadata/05-rest-api.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"REST API"},sidebar:"sidebar",previous:{title:"Contract metadata",permalink:"/metadata/contract-metadata"},next:{title:"Relayer",permalink:"/relayer"}},i={},l=[{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"REST endpoints",id:"rest-endpoints",level:2},{value:"RPC Client",id:"rpc-client",level:2},{value:"Metadata RPC Methods",id:"metadata-rpc-methods",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"metadata-rest-api-reference--usage",children:"Metadata REST API Reference & Usage"}),"\n",(0,a.jsxs)(t.admonition,{title:"changes to METADATA API usage and billing",type:"warning",children:[(0,a.jsxs)(t.p,{children:["Our Metadata API service is now managed through ",(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.a,{href:"https://sequence.build/landing",children:"Sequence Builder"})}),". Usage is charged in credits - issued monthly based your subscription plan. Sign up to grab your API access key."]}),(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.a,{href:"https://sequence.build/landing",children:["Get started with the ",(0,a.jsx)(t.strong,{children:"Sequence Builder"})," Free Plan today!"]})})]}),"\n",(0,a.jsx)(t.p,{children:"The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata\nfor Ethereum-compatible chains."}),"\n",(0,a.jsxs)(t.p,{children:["Quite simply, the Metadata API allows you to query the token metadata of any ERC20, ERC721 or ERC1155\ncontract on a ",(0,a.jsx)(t.a,{href:"/multi-chain-support",children:"number of supported Ethereum chains"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["As well, the Sequence Metadata service is automatically integrated in the ",(0,a.jsx)(t.a,{href:"/indexer",children:"Sequence Indexer"}),".\nBut as we demonstrate below, it's also useful to be able to query the token/contract metadata directly too :)"]}),"\n",(0,a.jsxs)(t.admonition,{title:"PRO TIP: RPC vs REST endpoints",type:"info",children:[(0,a.jsx)(t.p,{children:"Sequence Metadata service is available with both RPC and REST endpoints. We recommend the RPC endpoints\nfor your application, but the REST endpoints are an available option for convenience."}),(0,a.jsxs)(t.p,{children:["For RPC endpoint see ",(0,a.jsx)(t.a,{href:"/metadata/token-metadata",children:"Token metadata RPC"})," and ",(0,a.jsx)(t.a,{href:"/metadata/contract-metadata",children:"Contract metadata RPC"}),"."]})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.p,{children:"Let's say you'd like to query the metadata of a Skyweaver 1155 card on the Polygon network. Of course,  the\nbelow example will work for any network / contract / token combination as well."}),"\n",(0,a.jsxs)(t.p,{children:["First, the Skyweaver 1155 assets contract is located at address ",(0,a.jsx)(t.code,{children:"0x631998e91476DA5B870D741192fc5Cbc55F5a52E"}),"\non the Polygon network. Second, let's build the metadata lookup endpoint to query Skyweaver's contract\nfor token ID ",(0,a.jsx)(t.code,{children:"20"}),":"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Request:"}),"\n",(0,a.jsx)(t.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20",children:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Response:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "tokenId": "20",\n    "contractAddress": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n    "name": "Unstoppable Chop",\n    "description": "Attach Silence to target unit. Do 4\xa0damage to it.",\n    "image": "https://assets.skyweaver.net/TNqWLuJZ/webapp/cards/full-cards/6x/20-silver.png",\n    "decimals": 2,\n    "properties": {\n      "baseCardId": 20,\n      "goldCardId": 131092,\n      "grade": "oldSilver",\n      "id": 20,\n      "silverCardId": 65556\n    },\n    "attributes": null\n  }\n]\n'})}),"\n",(0,a.jsxs)(t.p,{children:["If you'd like to query a number of tokens at the same time, you can include more token ids comma-separated:\n",(0,a.jsx)(t.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22",children:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22"})," -- click\nto see the JSON response to query token ids ",(0,a.jsx)(t.code,{children:"20"}),", ",(0,a.jsx)(t.code,{children:"21"}),", and ",(0,a.jsx)(t.code,{children:"22"})," in a single batched request."]}),"\n",(0,a.jsxs)(t.p,{children:["Feel free to try tweaking the metadata.sequence.app URL above for your own contract, or another popular\nproject to see how the responses come back. You can change the network to ",(0,a.jsx)(t.a,{href:"/multi-chain-support",children:"one of our supported networks"}),"\nand specify any contract and/or token id."]}),"\n",(0,a.jsxs)(t.p,{children:["In addition to easily querying ",(0,a.jsx)(t.em,{children:"token-level metadata"})," like in the above example, you can also query ",(0,a.jsx)(t.em,{children:"contract-level metadata"}),".\nContract-level metadata provides you more information about a contract address such as a name, contract type, logo, and description.\nSimply change the metadata URL above to just query the contract address: ",(0,a.jsx)(t.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E",children:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E"})]}),"\n",(0,a.jsx)(t.p,{children:"and see result:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "chainId": 137,\n  "address": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n  "name": "Skyweaver",\n  "type": "ERC1155",\n  "symbol": "SKYWVR",\n  "logoURI": "https://assets.skyweaver.net/_tX5dRVi/webapp/icons/skyweaver-token.png",\n  "extensions": {\n    "link": "https://www.skyweaver.net/",\n    "description": "Skyweaver is a Free-to-Play, trading card game powered by Polygon and Ethereum.",\n    "ogImage": "https://skyweaver.net/images/skyweavercover.jpg",\n    "originAddress": "0x631998e91476da5b870d741192fc5cbc55f5a52e"\n  }\n}\n'})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["The Metadata API service is accessible either with a simple ",(0,a.jsx)(t.a,{href:"#rest-endpoints",children:"REST interface"}),", or a ",(0,a.jsx)(t.a,{href:"#rpc-client",children:"RPC client"}),".\nFor the RPC client, we offer Web browser, node and Go clients. We recommend the RPC client for most integrations, but\nmake the REST interface available for convenience."]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"rest-endpoints",children:"REST endpoints"}),"\n",(0,a.jsxs)(t.p,{children:["As mentioned in the ",(0,a.jsx)(t.a,{href:"#example",children:"example"})," above. The general format of the REST endpoint is:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>[/<tokenID>]\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Where ",(0,a.jsx)(t.code,{children:"<network>"})," must be one of the ",(0,a.jsx)(t.code,{children:"Chain ID"})," or ",(0,a.jsx)(t.code,{children:"Chain Handle"})," of ",(0,a.jsx)(t.a,{href:"/multi-chain-support#networks",children:"the supported networks"}),"."]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Fetch contract-level metadata:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Example: ",(0,a.jsx)(t.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E",children:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Fetch token-level metadata:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>/<tokenID>[,<tokenID>,...]\n"})}),"\n",(0,a.jsx)(t.p,{children:"Examples:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20",children:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21",children:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21"})}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(t.h2,{id:"rpc-client",children:"RPC Client"}),"\n",(0,a.jsx)(t.p,{children:"The Metadata RPC interface offers the full capabilities of the Metadata service."}),"\n",(0,a.jsxs)(t.p,{children:["We provide SDKs for ",(0,a.jsx)(t.a,{href:"https://github.com/0xsequence/sequence.js",children:"Web / node.js"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/0xsequence/go-sequence",children:"Go"}),".\nOr if you'd like to integrate the Metadata service with another language target, simply follow the API reference below\nto implement the HTTP requests. Additionally, read the Typescript client source code as ",(0,a.jsx)(t.a,{href:"https://github.com/0xsequence/sequence.js/blob/master/packages/metadata/src/metadata.gen.ts",children:"reference\nimplementation of the Metadata RPC client"})," as well."]}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"metadata-rpc-methods",children:"Metadata RPC Methods"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Metadata API endpoint:"})," ",(0,a.jsx)(t.a,{href:"https://metadata.sequence.app",children:"https://metadata.sequence.app"})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Metadata RPC methods:"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"GetTokenMetadata"})," - fetch token metadata of ERC721 or ERC1155 tokens from a single contract"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"GetTokenMetadataBatch"})," - fetch token metadata of ERC721 or ERC1155 token from a batch of contracts"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"GetContractInfo"})," - fetch contract metadata of an ERC20, ERC721 or ERC1155 contract address"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"GetContractInfoBatch"})," - fetch contract metadata of a batch of ERC20, ERC721 or ERC1155 contract addresses"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1804:(e,t,n)=>{n.d(t,{Z:()=>o});n(959);var a=n(5924);const r={tabItem:"tabItem_l_5p"};var s=n(1527);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},370:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(959),r=n(5924),s=n(74),o=n(8903),c=n(331),i=n(4053),l=n(3608),d=n(7979);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,u]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(9506);const b={tabList:"tabList_Pq82",tabItem:"tabItem_kpXA"};var g=n(1527);function j(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:c}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),r=c[n].value;r!==a&&(l(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function v(e){const t=(0,x.Z)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(t))}},7279:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var a=n(959);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);