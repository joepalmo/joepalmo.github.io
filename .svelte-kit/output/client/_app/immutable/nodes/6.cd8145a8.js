import{s as E,n as H}from"../chunks/scheduler.63274e7e.js";import{S as L,i as M,r as I,s as w,g,u as P,c as y,h as v,j,x as T,f as d,k as $,v as U,a as D,y as b,d as m,b as q,t as h,w as x,z,p as O}from"../chunks/index.f57c96d8.js";import{e as C}from"../chunks/each.e59479a4.js";/* empty css                                                    */import"../chunks/paths.d9708b12.js";import{P as Q}from"../chunks/ProjectCard.a947ef12.js";import{C as W}from"../chunks/Clouds.44fbe3b2.js";function S(a,r,l){const o=a.slice();return o[1]=r[l],o}function V(a){let r,l;return r=new Q({props:{title:a[1].title,logo:a[1].logo,background:a[1].background,links:a[1].links}}),{c(){I(r.$$.fragment)},l(o){P(r.$$.fragment,o)},m(o,i){U(r,o,i),l=!0},p:H,i(o){l||(m(r.$$.fragment,o),l=!0)},o(o){h(r.$$.fragment,o),l=!1},d(o){x(r,o)}}}function A(a){let r,l,o,i,k="",_,u,p;r=new W({props:{particleBackground:!1}});let c=C(a[0]),t=[];for(let e=0;e<c.length;e+=1)t[e]=V(S(a,c,e));const B=e=>h(t[e],1,1,()=>{t[e]=null});return{c(){I(r.$$.fragment),l=w(),o=g("div"),i=g("div"),i.innerHTML=k,_=w(),u=g("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){P(r.$$.fragment,e),l=y(e),o=v(e,"DIV",{id:!0,class:!0});var s=j(o);i=v(s,"DIV",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-1vyvstg"&&(i.innerHTML=k),_=y(s),u=v(s,"DIV",{});var n=j(u);for(let f=0;f<t.length;f+=1)t[f].l(n);n.forEach(d),s.forEach(d),this.h()},h(){$(i,"class","project-blurb"),$(o,"id","body"),$(o,"class","svelte-v1lfnd")},m(e,s){U(r,e,s),D(e,l,s),D(e,o,s),b(o,i),b(o,_),b(o,u);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(u,null);p=!0},p(e,[s]){if(s&1){c=C(e[0]);let n;for(n=0;n<c.length;n+=1){const f=S(e,c,n);t[n]?(t[n].p(f,s),m(t[n],1)):(t[n]=V(f),t[n].c(),m(t[n],1),t[n].m(u,null))}for(O(),n=c.length;n<t.length;n+=1)B(n);q()}},i(e){if(!p){m(r.$$.fragment,e);for(let s=0;s<c.length;s+=1)m(t[s]);p=!0}},o(e){h(r.$$.fragment,e),t=t.filter(Boolean);for(let s=0;s<t.length;s+=1)h(t[s]);p=!1},d(e){e&&(d(l),d(o)),x(r,e),z(t,e)}}}function F(a){return[[{title:"Sensing the Dynamic Universe",logo:"/img/SDU_logo.png",background:"accessible website seeking to reach a wider audience through the sonification of astronomical data",links:{Website:"https://lweb.cfa.harvard.edu/sdu/",Video:"https://www.youtube.com/watch?v=O9Spr9QcDac",sonoUno:"https://www.sonouno.org.ar/"}}]]}class Z extends L{constructor(r){super(),M(this,r,F,A,E,{})}}export{Z as component};