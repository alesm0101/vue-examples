if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>r(e,o),c={module:{uri:o},exports:t,require:l};s[o]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(n(...e),t)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-examples"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.ddbde395.css",revision:null},{url:"/index.html",revision:"1482f81ecf8badb26e8f8c3e2b5edfa2"},{url:"/js/about.c56917e8.js",revision:null},{url:"/js/app.19e350ff.js",revision:null},{url:"/js/chunk-vendors.b3a00ce7.js",revision:null},{url:"/manifest.json",revision:"e3c481e008e86ffa83fd4b217a5523ed"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
