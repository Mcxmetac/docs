"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[98],{5896:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>l});var a=s(1527),o=s(7279);const t={},i="Session Management",r={id:"waas/waas-auth/manage-sessions",title:"Session Management",description:"Sequence Auth + Embedded Wallet handles the following aspects of your application:",source:"@site/docs/110-waas/02-waas-auth/03-manage-sessions.mdx",sourceDirName:"110-waas/02-waas-auth",slug:"/waas/waas-auth/manage-sessions",permalink:"/waas/waas-auth/manage-sessions",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/110-waas/02-waas-auth/03-manage-sessions.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/waas/waas-auth/getting-started"},next:{title:"Wallets and transactions",permalink:"/waas/waas-auth/use-wallets"}},c={},l=[{value:"Sign in / Sign Up",id:"sign-in--sign-up",level:2},{value:"Email Sign In / Sign Up",id:"email-sign-in--sign-up",level:3},{value:"Google / Apple Auth",id:"google--apple-auth",level:3},{value:"List Sessions",id:"list-sessions",level:2},{value:"Close Session",id:"close-session",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"session-management",children:"Session Management"}),"\n",(0,a.jsx)(n.p,{children:"Sequence Auth + Embedded Wallet handles the following aspects of your application:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"User creation"}),"\n",(0,a.jsx)(n.li,{children:"User authentication"}),"\n",(0,a.jsx)(n.li,{children:"Session management"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"This means you don't need to implement an account system yourself; instead, you interact with the Auth + WaaS SDK whenever you need to authenticate a user."}),"\n",(0,a.jsx)(n.h2,{id:"sign-in--sign-up",children:"Sign in / Sign Up"}),"\n",(0,a.jsx)(n.p,{children:"Signing in and signing up are the same operation; the account is automatically created if it doesn't already exist."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { SequenceWaaS } from '@0xsequence/waas'\n\nconst waas = new SequenceWaaS({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'mumbai'\n})\n\n// Get a sessionHash\nconst sessionHash = await waas.getSessionHash()\n\n// Get an idToken using the social auth provider of your choice\n// (Google, Facebook, Twitter, etc.)\n// Note: remember to pass the sessionHash as a nonce!\n\n// Then sign in with Sequence WaaS\nconst res = await waas.signIn({ idToken }, \"MacBook Pro - Chrome\")\n\nconsole.log(res)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "sessionId": "0x63A21cCa14ed7454B9cF6466af422B5c597c6b57",\n  "wallet": "0xd6043fe6f06d90ec2cB36cA5CD1B193A8515f350",\n}\n'})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Sessions opened with some providers might require a second step in order to be usable for sending transactions."}),(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/waas/waas-auth/validation",children:"Email validation"}),"."]})]}),"\n",(0,a.jsx)(n.h3,{id:"email-sign-in--sign-up",children:"Email Sign In / Sign Up"}),"\n",(0,a.jsxs)(n.p,{children:["Email sign-in is directly supported by the SDK, as long as the used ",(0,a.jsx)(n.code,{children:"key"})," has been generated with the ",(0,a.jsx)(n.code,{children:"email"})," scope. Email logins work similarly to social logins, except that the ",(0,a.jsx)(n.code,{children:"idToken"})," is generated by the SDK itself."]}),"\n",(0,a.jsxs)(n.p,{children:["To open a session using an email, you will need to provide an email for the user. The Embedded Wallet Nitro API will then send an email to the user with a One-Time Password (OTP) that can be used to open a session. This OTP has to be provided to the SDK to obtain an ",(0,a.jsx)(n.code,{children:"idToken"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Once the ",(0,a.jsx)(n.code,{children:"idToken"})," is obtained, the session can be opened as usual."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { SequenceWaaS } from '@0xsequence/waas'\n\nconst waas = new SequenceWaaS({\n  projectAccessKey: 'PROJECT_ACCESS_KEY',\n  waasConfigKey: 'WAAS_CONFIG_KEY',\n  network: 'arbitrum-nova'\n})\n\n// Send validation email to the user with an OTP code\nconst { instance } = await waas.email.initiateAuth({ email })\nconst sessionHash = await sequence.getSessionHash()\n\n// Obtain OTP code from user and pass to finalizeAuth for validation\nconst { idToken } = await waas.email.finalizeAuth({ instance, answer, email, sessionHash })\n\n// Log in using the idToken, as usual\nawait waas.signIn({ idToken })\n"})}),"\n",(0,a.jsx)(n.h3,{id:"google--apple-auth",children:"Google / Apple Auth"}),"\n",(0,a.jsxs)(n.p,{children:["Google and Apple auth are directly supported by the SDK. The ",(0,a.jsx)(n.code,{children:"idToken"})," is obtained from the social auth provider and used to open a session. You can see a sample React application using Google auth below. To see a complete application, see the ",(0,a.jsx)(n.a,{href:"https://github.com/0xsequence/demo-waas-auth",children:"demo-waas-auth"})," repository. A functional demo ",(0,a.jsx)(n.a,{href:"https://0xsequence.github.io/demo-waas-auth/",children:"is also available here"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Begin with a simple ",(0,a.jsx)(n.code,{children:"main.tsx"})," file that sets up the WaaS SDK, the router, and the Google OAuth provider."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { SequenceWaaS } from '@0xsequence/waas'\nimport { GoogleOAuthProvider } from '@react-oauth/google'\nimport { createHashRouter, RouterProvider } from 'react-router-dom'\n\nconst waas = new SequenceWaaS({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'arbitrum-nova'\n})\n\nexport const router = createHashRouter([\n  {\n    path: '/login',\n    element: <Login />\n  },\n  {\n    path: '/',\n    element: <App />\n  }\n])\n\nReactDOM.createRoot(document.getElementById('root')!).render(\n  <React.StrictMode>\n      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>\n        <RouterProvider router={router} />\n      </GoogleOAuthProvider>\n  </React.StrictMode>\n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"useSessionHash"})," hook is used to obtain a session hash that is used to prevent replay attacks. The ",(0,a.jsx)(n.code,{children:"sequence.getSessionHash"})," function is used to obtain the session hash, and the ",(0,a.jsx)(n.code,{children:"sequence.onSessionStateChanged"})," function is used to update the session hash when the session state changes."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'import { sequence } from \'./main\'\nimport { useEffect, useState } from "react";\n\nexport function useSessionHash() {\n    const [sessionHash, setSessionHash] = useState("")\n    const [error, setError] = useState<any>(undefined)\n\n    useEffect(() => {\n        const handler = async () => {\n            try {\n                setSessionHash(await sequence.getSessionHash())\n            } catch (error) {\n                console.error(error)\n                setError(error)\n            }\n        }\n        handler()\n        return sequence.onSessionStateChanged(handler)\n    }, [setSessionHash, setError])\n\n    return {\n        sessionHash,\n        error,\n        loading: !!sessionHash,\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To handle the Google login, you can use the ",(0,a.jsx)(n.code,{children:"GoogleLogin"})," component from the ",(0,a.jsx)(n.code,{children:"@react-oauth/google"})," package. The ",(0,a.jsx)(n.code,{children:"handleGoogleLogin"})," function is called when the user successfully logs in."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { router, sequence } from './main'\nimport { CredentialResponse, GoogleLogin } from '@react-oauth/google'\nimport { useSessionHash } from \"./useSessionHash.ts\";\n\nfunction Login() {\n  const { sessionHash } = useSessionHash()\n  const [signingIn, setSigningIn] = useState(false)\n\n  useEffect(() => {\n    (async () => {\n      if (await sequence.isSignedIn()) {\n        router.navigate('/')\n      }\n    })()\n  }, [])\n\n  const handleGoogleLogin = async (tokenResponse: CredentialResponse) => {\n    const walletAddress = await sequence.signIn({\n      idToken: tokenResponse.credential!\n    }, \"MacBook Pro - Chrome\")\n\n    console.log(`Wallet address: ${walletAddress}`)\n    router.navigate('/')\n  }\n\n  return (\n    {!!sessionHash && (<>\n      <GoogleLogin onSuccess={handleGoogleLogin} shape=\"circle\" width={230} nonce={sessionHash} />\n    </>)}\n )\n}\n\nexport default Login\n"})}),"\n",(0,a.jsx)(n.h2,{id:"list-sessions",children:"List Sessions"}),"\n",(0,a.jsx)(n.p,{children:"This function returns a list of sessions for the current user and only includes sessions that are still valid."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { SequenceWaaS } from '@0xsequence/waas'\n\nconst waas = new SequenceWaaS({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'arbitrum-nova'\n})\n\nawait waas.signIn({ idToken }, \"MacBook Pro - Chrome\")\n\nconst sessions = await waas.listSessions()\nconsole.log(sessions)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "id": "0x574372ff1A0Eede68B5358Cce7bbb93155A9dfe0",\n    "address": "0x574372ff1a0eede68b5358cce7bbb93155a9dfe0",\n    "userId": "42#https://accounts.google.com#109234880945084120673",\n    "projectId": 42,\n    "issuer": "https://accounts.google.com",\n    "subject": "109234880945084120673",\n    "friendlyName": "Pixel 3 - Brave",\n    "createdAt": "2023-11-02T18:22:03.102950917Z",\n    "refreshedAt": "2023-11-02T18:22:03.109787921Z",\n    "expiresAt": "2123-10-09T18:22:03.102951017Z",\n    "isThis": false\n  },\n  {\n    "id": "0x3C4E11E4dbF23B87C14bd75d0Da9C75707392D21",\n    "address": "0x3c4e11e4dbf23b87c14bd75d0da9c75707392d21",\n    "userId": "42#https://accounts.google.com#109234880945084120673",\n    "projectId": 42,\n    "issuer": "https://accounts.google.com",\n    "subject": "109234880945084120673",\n    "friendlyName": "MacBook Pro - Chrome",\n    "createdAt": "2023-11-02T18:50:32.815189174Z",\n    "refreshedAt": "2023-11-02T18:50:32.819722082Z",\n    "expiresAt": "2123-10-09T18:50:32.815189234Z",\n    "isThis": true\n  }\n]\n'})}),"\n",(0,a.jsx)(n.h2,{id:"close-session",children:"Close Session"}),"\n",(0,a.jsxs)(n.p,{children:["A session can be closed using the ",(0,a.jsx)(n.code,{children:"id"})," of the session. Any session can be closed from any device with an active session."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import { SequenceWaaS } from '@0xsequence/waas'\n\nconst waas = new SequenceWaaS({\n  projectAccessKey: `${process.env.PROJECT_ACCESS_KEY}`,\n  waasConfigKey: `${process.env.WAAS_CONFIG_KEY}`,\n  network: 'arbitrum-nova'\n})\n\nawait waas.signIn({ idToken }, \"MacBook Pro - Chrome\")\n\nconst sessions = await waas.listSessions()\nawait waas.dropSession({ sessionId: sessions[0].id })\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7279:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var a=s(959);const o={},t=a.createContext(o);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);