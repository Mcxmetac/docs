"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,d=u["".concat(c,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/key-management"},l="Key Management",i={unversionedId:"wallet/key-management/key-management",id:"wallet/key-management/key-management",title:"Key Management",description:"Each Sequence wallet can be controlled by multiple private keys, acting like a multisignature wallet. Users can either create a Sequence wallet using one of the supported social login options or create a wallet with a private key stored only on that device.",source:"@site/docs/03-wallet/21-key-management/01-key-management.mdx",sourceDirName:"03-wallet/21-key-management",slug:"/key-management",permalink:"/key-management",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/21-key-management/01-key-management.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/key-management"},sidebar:"sidebar",previous:{title:"Platforms",permalink:"/wallet/platforms"},next:{title:"Social Login Wallets",permalink:"/wallet/key-management/social-login-wallets"}},c={},s=[],m={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"key-management"},"Key Management"),(0,a.kt)("p",null,"Each Sequence wallet can be controlled by multiple private keys, acting like a multisignature wallet. Users can either create a Sequence wallet using one of the supported social login options or create a wallet with a private key stored only on that device."),(0,a.kt)("p",null,"The improved security compared to traditional blockchain wallet comes from the fact that multiple independent keys need to be compromised for a malicious actor to take control of a user\u2019s wallet, instead of a single key. The philosophy is that the more independent private-keys the user adds to their wallet, the more secure their wallet becomes, even if each individual key is only moderately secure on their own."))}p.isMDXComponent=!0}}]);