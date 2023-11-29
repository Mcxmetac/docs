"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[1621],{8022:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>g,toc:()=>l});var t=n(1527),i=n(7279);const a={},r="Signing Messages",g={id:"getting-started/sign-message",title:"Signing Messages",description:"To learn more, please see our wallet guide on signing & verifying messages.",source:"@site/docs/050-getting-started/02-sign-message.mdx",sourceDirName:"050-getting-started",slug:"/getting-started/sign-message",permalink:"/getting-started/sign-message",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/050-getting-started/02-sign-message.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Quick Start",permalink:"/quickstart"},next:{title:"Sending an ERC20 token",permalink:"/getting-started/erc20-token"}},o={},l=[];function c(e){const s={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"signing-messages",children:"Signing Messages"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",children:"// Get the wallet provider and signer instances\nconst wallet = sequence.getWallet()\nconst provider = wallet.getProvider()\nconst signer = wallet.getSigner()\n\n// Prepare the message string\nconst message = `I've been to web3 & back again :D`\n\n// Sign the message\nconst signature = await signer.signMessage(message)\nconsole.log('message signature:', signature)\n\n// Validate the signed message. The sequence utils `isValidMessageSignature` method\n// supports validating both EOA and Smart Wallet (EIP1271 + EIP6492)\n// signatures with this simple call.\nconst isValid = await wallet.utils.isValidMessageSignature(\n  await wallet.getAddress(),\n  message,\n  signature,\n  provider.getChainId()\n)\n\nconsole.log('isValid?', isValid)\nif (!isValid) throw new Error('signature is invalid')\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To learn more, please see our wallet guide on ",(0,t.jsx)(s.a,{href:"/wallet/guides/sign-message",children:"signing & verifying messages"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7279:(e,s,n)=>{n.d(s,{Z:()=>g,a:()=>r});var t=n(959);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function g(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);