"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[4764],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(a),c=l,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8754:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(7462),l=(a(7294),a(3905));const r={},i="Response Payloads",s={unversionedId:"waas/implementation/responses",id:"waas/implementation/responses",title:"Response Payloads",description:"When interacting with the WaaS API, each intent payload will trigger a corresponding response payload. This could be either a successful response or a prompt for a different action.",source:"@site/docs/10-waas/03-implementation/02-responses.mdx",sourceDirName:"10-waas/03-implementation",slug:"/waas/implementation/responses",permalink:"/waas/implementation/responses",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/10-waas/03-implementation/02-responses.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Action payloads",permalink:"/waas/implementation/payloads"}},d={},o=[{value:"General Response Structure",id:"general-response-structure",level:2},{value:"Types of Responses",id:"types-of-responses",level:2},{value:"Transaction Receipt Response",id:"transaction-receipt-response",level:3},{value:"Example",id:"example",level:4},{value:"How to Detect",id:"how-to-detect",level:4},{value:"Failed Transaction Response",id:"failed-transaction-response",level:3},{value:"How to Detect",id:"how-to-detect-1",level:4},{value:"Signed Message Response",id:"signed-message-response",level:3},{value:"Example",id:"example-1",level:4},{value:"How to Detect",id:"how-to-detect-2",level:4},{value:"Session Opened Response",id:"session-opened-response",level:3},{value:"Example",id:"example-2",level:4},{value:"How to Detect",id:"how-to-detect-3",level:4},{value:"Validation Required Response",id:"validation-required-response",level:3},{value:"How to Detect",id:"how-to-detect-4",level:4},{value:"Note",id:"note",level:3}],p={toc:o},m="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"response-payloads"},"Response Payloads"),(0,l.kt)("p",null,"When interacting with the WaaS API, each intent payload will trigger a corresponding response payload. This could be either a successful response or a prompt for a different action."),(0,l.kt)("h2",{id:"general-response-structure"},"General Response Structure"),(0,l.kt)("p",null,"Regardless of the specific response type, all responses have a standard structure with the following fields:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Identifies the type of response"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null},"Holds content defined by response type"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"types-of-responses"},"Types of Responses"),(0,l.kt)("h3",{id:"transaction-receipt-response"},"Transaction Receipt Response"),(0,l.kt)("p",null,"Triggered upon successful execution of a ",(0,l.kt)("a",{parentName:"p",href:"/waas/implementation/payloads#send-transaction-payload"},"send transaction intent"),". The code for this response is ",(0,l.kt)("inlineCode",{parentName:"p"},"transactionReceipt"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"txHash"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Transaction hash of the Ethereum transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metaTxHash"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Hash of the meta transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request"),(0,l.kt)("td",{parentName:"tr",align:null},"TransactionsPacket"),(0,l.kt)("td",{parentName:"tr",align:null},"The original request packet of the transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receipt"),(0,l.kt)("td",{parentName:"tr",align:null},"MetaTxnReceipt"),(0,l.kt)("td",{parentName:"tr",align:null},"Receipt of the meta transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nativeReceipt"),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"Native receipt of the Ethereum transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simulations"),(0,l.kt)("td",{parentName:"tr",align:null},"SimulateResult[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of simulation results"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MetaTxnReceipt"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for the receipt"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Status of the transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"revertReason"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Reason for transaction revert, if any"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Index number of the receipt"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logs"),(0,l.kt)("td",{parentName:"tr",align:null},"MetaTxnReceiptLog[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of logs for the meta transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receipts"),(0,l.kt)("td",{parentName:"tr",align:null},"MetaTxnReceipt[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Array of meta transaction receipts"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"txnReceipt"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"String representation of the transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MetaTxnReceiptLog"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The address that generated the log"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topics"),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of topics associated with the log"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Data sent with the log"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockNumber"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"The block number where this log was emitted"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transactionHash"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Hash of the transaction that generated the log"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transactionIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the transaction in the block"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"blockHash"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Hash of the block containing the log"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"logIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Index of the log in the block"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removed"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the log was removed due to a chain reorganization"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SimulateResult"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executed"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the simulation was executed"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"succeeded"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the simulation succeeded"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of the simulation"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reason"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Reason for failure, if simulation failed"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gasUsed"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of gas used in the simulation"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gasLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Gas limit for the simulation"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n    "metaTxHash": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n    "nativeReceipt": {\n      "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n      "blockNumber": "0x2f63834",\n      "contractAddress": "0x0000000000000000000000000000000000000000",\n      "cumulativeGasUsed": "0xdb374",\n      "gasUsed": "0x14a00",\n      "logs": [\n        {\n          "address": "0x4d4ee1b8583e31fe789eaf2e1b6e011c220c10b6",\n          "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n          "blockNumber": "0x2f63834",\n          "data": "0x0000000000000000000000001119e72b4af230becebd933d0e07f0eec51d8c2a0000000000000000000000000000000000000000000000000000000000000001",\n          "logIndex": "0x14",\n          "removed": false,\n          "topics": [\n            "0x1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881"\n          ],\n          "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n          "transactionIndex": "0x5"\n        },\n        {\n          "address": "0x4d4ee1b8583e31fe789eaf2e1b6e011c220c10b6",\n          "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n          "blockNumber": "0x2f63834",\n          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",\n          "logIndex": "0x15",\n          "removed": false,\n          "topics": [\n            "0x5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7",\n            "0xacc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0"\n          ],\n          "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n          "transactionIndex": "0x5"\n        },\n        {\n          "address": "0x0000000000000000000000000000000000001010",\n          "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n          "blockNumber": "0x2f63834",\n          "data": "0x000000000000000000000000000000000000000000000000001284e7c67266000000000000000000000000000000000000000000000000014c0fa753f2298415000000000000000000000000000000000000000000001386f7e2c243dcc978070000000000000000000000000000000000000000000000014bfd226c2bb71e15000000000000000000000000000000000000000000001386f7f5472ba33bde07",\n          "logIndex": "0x16",\n          "removed": false,\n          "topics": [\n            "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",\n            "0x0000000000000000000000000000000000000000000000000000000000001010",\n            "0x00000000000000000000000000e91788bcb998379027d36e6407a9187d7f313c",\n            "0x000000000000000000000000959c65b72147faf3450d8b50a0de57e72ffc5e0d"\n          ],\n          "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n          "transactionIndex": "0x5"\n        }\n      ],\n      "logsBloom": "0x00000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000008800000002000000000001004000000000000000000000000000000000800000000000000000000100000000400000000200400000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000002000000000000000000000000000000004000008000000000000001000000000000000000000000000000100000020000000000000000000000002000000020020002020040000000000000000040100000",\n      "root": "0x",\n      "status": "0x1",\n      "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n      "transactionIndex": "0x5"\n    },\n    "receipt": {\n      "id": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n      "index": 0,\n      "logs": [\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000001119e72b4af230becebd933d0e07f0eec51d8c2a0000000000000000000000000000000000000000000000000000000000000001",\n          "topics": [\n            "0x1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881"\n          ]\n        },\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",\n          "topics": [\n            "0x5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7",\n            "0xacc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0"\n          ]\n        }\n      ],\n      "receipts": [\n        {\n          "id": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n          "index": 0,\n          "logs": null,\n          "receipts": null,\n          "revertReason": null,\n          "status": "SUCCEEDED",\n          "txnReceipt": ""\n        }\n      ],\n      "revertReason": null,\n      "status": "SUCCEEDED"\n    },\n    "request": {\n      "code": "sendTransaction",\n      "expires": 1699440762,\n      "identifier": "ts-sdk-1699440462686-0x153824576D03629b264683B430bBF9AcEA1d0975",\n      "issued": 1699440462,\n      "network": "137",\n      "transactions": [\n        {\n          "data": "0x",\n          "to": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "type": "transaction",\n          "value": "0x00"\n        }\n      ],\n      "wallet": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6"\n    },\n    "simulations": [\n      {\n        "executed": true,\n        "gasLimit": 1147,\n        "gasUsed": 860,\n        "reason": null,\n        "result": "0x",\n        "succeeded": true\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h4",{id:"how-to-detect"},"How to Detect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isSentTransactionResponse(res)) {\n  // It's a transaction receipt\n}\n")),(0,l.kt)("h3",{id:"failed-transaction-response"},"Failed Transaction Response"),(0,l.kt)("p",null,"Triggered upon failed to execute a ",(0,l.kt)("a",{parentName:"p",href:"/waas/implementation/payloads#send-transaction-payload"},"send transaction intent"),". The code for this response is ",(0,l.kt)("inlineCode",{parentName:"p"},"transactionFailed"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"error"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The error message describing why the transaction failed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"request"),(0,l.kt)("td",{parentName:"tr",align:null},"TransactionsPacket"),(0,l.kt)("td",{parentName:"tr",align:null},"The packet of transactions that were attempted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simulations"),(0,l.kt)("td",{parentName:"tr",align:null},"SimulateResult[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Results from the transaction simulation attempts.")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SimulateResult"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"executed"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the simulation was executed"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"succeeded"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the simulation succeeded"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"The result of the simulation"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"reason"),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," null"),(0,l.kt)("td",{parentName:"tr",align:null},"Reason for failure, if simulation failed"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gasUsed"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of gas used in the simulation"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gasLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Gas limit for the simulation"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionFailed",\n  "data": {\n    "error": "This is an error message",\n    "request": {\n      "code": "sendTransaction",\n      "expires": 1699443005,\n      "identifier": "ts-sdk-1699442705965-0x153824576D03629b264683B430bBF9AcEA1d0975",\n      "issued": 1699442705,\n      "network": "137",\n      "transactions": [\n        {\n          "data": "0x",\n          "to": "0x839eE023B21f4Ffe2294025DE0AC30Ba7278D6Fd",\n          "type": "transaction",\n          "value": "0x00"\n        }\n      ],\n      "wallet": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6"\n    },\n    "simulations": [\n      {\n        "executed": true,\n        "gasLimit": 7908,\n        "gasUsed": 5931,\n        "reason": "This is an error message",\n        "result": null,\n        "succeeded": false\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h4",{id:"how-to-detect-1"},"How to Detect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isFailedTransactionResponse(res)) {\n  // It's a failed transaction\n}\n")),(0,l.kt)("h3",{id:"signed-message-response"},"Signed Message Response"),(0,l.kt)("p",null,"Triggered after a successful ",(0,l.kt)("a",{parentName:"p",href:"/waas/implementation/payloads#sign-message-payload"},"sign message intent"),". The code is ",(0,l.kt)("inlineCode",{parentName:"p"},"signedMessage"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The signed message"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signature"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The signature"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "signedMessage",\n  "data": {\n    "message": "Hello World",\n    "signature": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"\n  }\n}\n')),(0,l.kt)("h4",{id:"how-to-detect-2"},"How to Detect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isSignedMessageResponse(res)) {\n  // It's a signed message\n}\n")),(0,l.kt)("h3",{id:"session-opened-response"},"Session Opened Response"),(0,l.kt)("p",null,"Occurs after successfully executing an ",(0,l.kt)("a",{parentName:"p",href:"/waas/implementation/payloads#open-session-payload"},"open session intent"),". The code is ",(0,l.kt)("inlineCode",{parentName:"p"},"sessionOpened"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Session ID (resembling an address)"),(0,l.kt)("td",{parentName:"tr",align:null},"No")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The Sequence wallet address"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "sessionOpened",\n  "data": {\n    "sessionId": "0xBdeAfd3ee0550a73f615D2BaEA2E3D6d48FC857D",\n    "wallet": "0x44c2Ea42Fb006a613a7b41D142576eD6B5055902"\n  }\n}\n')),(0,l.kt)("h4",{id:"how-to-detect-3"},"How to Detect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isOpenSessionResponse(res)) {\n  // It's a session opened\n}\n")),(0,l.kt)("h3",{id:"validation-required-response"},"Validation Required Response"),(0,l.kt)("p",null,"Some actions may necessitate additional validation. In such cases, the response code is ",(0,l.kt)("inlineCode",{parentName:"p"},"validationRequired"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," field contains:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sessionId"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Session ID (resembling an address)"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h4",{id:"how-to-detect-4"},"How to Detect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isValidationRequiredResponse(res)) {\n  // Validation is required\n}\n")),(0,l.kt)("h3",{id:"note"},"Note"),(0,l.kt)("p",null,"Both ",(0,l.kt)("inlineCode",{parentName:"p"},"sendTransaction")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"signMessage")," intents could require validation. Always check for a ",(0,l.kt)("inlineCode",{parentName:"p"},"validationRequired")," response before assuming you've received a transaction receipt or a signed message."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isValidationRequiredResponse(res)) {\n  // Handle validation\n}\n\nif (payloads.responses.isSendTransactionResponse(res)) {\n  // It's a transaction receipt\n}\n")))}u.isMDXComponent=!0}}]);