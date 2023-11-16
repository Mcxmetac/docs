"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[3192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),f=s,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return t?a.createElement(m,i(i({ref:n},p),{},{components:t})):a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,i=new Array(r);i[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[d]="string"==typeof e?e:s,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(7462),s=(t(7294),t(3905));const r={},i="Transaction receipts",o={unversionedId:"waas/waas-auth/transaction-receipts",id:"waas/waas-auth/transaction-receipts",title:"Transaction receipts",description:"Any methods that involve sending transactions will return either successful or failed transaction receipts. Failed transaction receipts are generated without executing the transaction.",source:"@site/docs/10-waas/04-waas-auth/06-transaction-receipts.mdx",sourceDirName:"10-waas/04-waas-auth",slug:"/waas/waas-auth/transaction-receipts",permalink:"/waas/waas-auth/transaction-receipts",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/10-waas/04-waas-auth/06-transaction-receipts.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Validation",permalink:"/waas/waas-auth/validation"}},c={},l=[{value:"Successful transaction response",id:"successful-transaction-response",level:2},{value:"Failed transaction response",id:"failed-transaction-response",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,s.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"transaction-receipts"},"Transaction receipts"),(0,s.kt)("p",null,"Any methods that involve sending transactions will return either ",(0,s.kt)("em",{parentName:"p"},"successful")," or ",(0,s.kt)("em",{parentName:"p"},"failed")," transaction receipts. Failed transaction receipts are generated without executing the transaction."),(0,s.kt)("h2",{id:"successful-transaction-response"},"Successful transaction response"),(0,s.kt)("p",null,"Any transaction that is successfully included in a block will return a ",(0,s.kt)("inlineCode",{parentName:"p"},"SentTransactionResponse")," object. This must be checked for before accessing the transaction hash, using the ",(0,s.kt)("inlineCode",{parentName:"p"},"isSentTransactionResponse")," type guard."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n});\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst tx = await waas.sendTransaction({\n  chainId: 42161,\n  transactions: [{\n    to: '0xD72C236Be524Ec24F72329317e2785E687105B69', value: '0'\n  }]\n})\n\nif (isSentTransactionResponse(tx)) {\n  console.log(tx)\n}\n")),(0,s.kt)("p",null,"The relevant fields are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"txHash"),": The transaction hash of the transaction that was sent to the network."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"receipt.logs"),": Logs emitted by the transaction."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"receipt.status"),": The status of the transaction. ",(0,s.kt)("inlineCode",{parentName:"li"},"SUCCEEDED")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"FAILED"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"receipt.revertReason"),": If the transaction was executed but reverted, it includes the reason.")),(0,s.kt)("p",null,"To view the full response object, see the ",(0,s.kt)("a",{parentName:"p",href:"/waas/implementation/responses#transaction-receipt-response"},"Transaction Receipt Response")," section."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n    "metaTxHash": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n    "nativeReceipt": { ... },\n    "receipt": {\n      "id": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n      "index": 0,\n      "logs": [\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000001119e72b4af230becebd933d0e07f0eec51d8c2a0000000000000000000000000000000000000000000000000000000000000001",\n          "topics": [\n            "0x1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881"\n          ]\n        },\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",\n          "topics": [\n            "0x5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7",\n            "0xacc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0"\n          ]\n        }\n      ],\n      "receipts": [ ... ],\n      "revertReason": null,\n      "status": "SUCCEEDED"\n    },\n    "request": { ... },\n    "simulations": [ ... ]\n  }\n}\n')),(0,s.kt)("h2",{id:"failed-transaction-response"},"Failed transaction response"),(0,s.kt)("p",null,"WaaS will try to catch any failing transactions before they are sent to the network. This is done by simulating the transaction on the network before sending it. If the simulation fails, the transaction will not be sent to the network and a ",(0,s.kt)("inlineCode",{parentName:"p"},"FailedTransactionResponse")," will be returned."),(0,s.kt)("p",null,"To view the full response object, see the ",(0,s.kt)("a",{parentName:"p",href:"/waas/implementation/responses#failed-transaction-response"},"Transaction Receipt Response")," section."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Sequence, isSentTransactionResponse } from '@0xsequence/waas'\n\nconst waas = new Sequence({\n  key: '${process.env.SEQUENCE_API_KEY}',\n});\n\nawait waas.signIn({ idToken }, \"Session name\")\n\nconst tx = await waas.sendTransaction({\n  chainId: 137,\n  transactions: [{\n    // This address always fails on Polygon, give it a try :D\n    to: '0x839eE023B21f4Ffe2294025DE0AC30Ba7278D6Fd', value: '0'\n  }]\n})\n\nif (isSentTransactionResponse(tx)) {\n  // ... This will never be executed\n} else {\n  // tx can only be `SentTransactionResponse` or `FailedTransactionResponse`\n  console.log(tx)\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "transactionFailed",\n  "data": {\n    "error": "This is an error message",\n    "request": {\n      "code": "sendTransaction",\n      "expires": 1699443005,\n      "identifier": "ts-sdk-1699442705965-0x153824576D03629b264683B430bBF9AcEA1d0975",\n      "issued": 1699442705,\n      "network": "137",\n      "transactions": [\n        {\n          "data": "0x",\n          "to": "0x839eE023B21f4Ffe2294025DE0AC30Ba7278D6Fd",\n          "type": "transaction",\n          "value": "0x00"\n        }\n      ],\n      "wallet": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6"\n    },\n    "simulations": [\n      {\n        "executed": true,\n        "gasLimit": 7908,\n        "gasUsed": 5931,\n        "reason": "This is an error message :)",\n        "result": null,\n        "succeeded": false\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);