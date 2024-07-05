import{s as X,f as B,n as L}from"./scheduler.63274e7e.js";import{S as Y,i as Z,g as b,s as q,m as K,H as x,h as k,j as p,c as z,n as Q,f as d,A as $,k as h,a as P,y as u,o as W,z as ee,e as G,x as te}from"./index.f57c96d8.js";import{e as M}from"./each.e59479a4.js";import{b as R}from"./paths.d9708b12.js";function T(r,e,l){const t=r.slice();return t[4]=e[l][0],t[5]=e[l][1],t[7]=l,t}function U(r){let e,l=M(Object.entries(r[2])),t=[];for(let s=0;s<l.length;s+=1)t[s]=J(T(r,l,s));return{c(){e=b("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=k(s,"DIV",{class:!0});var f=p(e);for(let a=0;a<t.length;a+=1)t[a].l(f);f.forEach(d),this.h()},h(){h(e,"class","links")},m(s,f){P(s,e,f);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,null)},p(s,f){if(f&4){l=M(Object.entries(s[2]));let a;for(a=0;a<l.length;a+=1){const n=T(s,l,a);t[a]?t[a].p(n,f):(t[a]=J(n),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},d(s){s&&d(e),ee(t,s)}}}function F(r){let e,l="|   ";return{c(){e=b("span"),e.textContent=l,this.h()},l(t){e=k(t,"SPAN",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-jiury6"&&(e.textContent=l),this.h()},h(){h(e,"class","separator")},m(t,s){P(t,e,s)},d(t){t&&d(e)}}}function J(r){let e,l,t=r[4]+"",s,f,a,n=r[7]<Object.keys(r[2]).length-1,v,o=n&&F();return{c(){e=b("span"),l=b("a"),s=K(t),a=q(),o&&o.c(),v=G(),this.h()},l(c){e=k(c,"SPAN",{});var i=p(e);l=k(i,"A",{href:!0,class:!0});var j=p(l);s=Q(j,t),j.forEach(d),i.forEach(d),a=z(c),o&&o.l(c),v=G(),this.h()},h(){h(l,"href",f=r[5]),h(l,"class","svelte-htqtfz")},m(c,i){P(c,e,i),u(e,l),u(l,s),P(c,a,i),o&&o.m(c,i),P(c,v,i)},p(c,i){i&4&&t!==(t=c[4]+"")&&W(s,t),i&4&&f!==(f=c[5])&&h(l,"href",f),i&4&&(n=c[7]<Object.keys(c[2]).length-1),n?o||(o=F(),o.c(),o.m(v.parentNode,v)):o&&(o.d(1),o=null)},d(c){c&&(d(e),d(a),d(v)),o&&o.d(c)}}}function le(r){let e,l,t,s,f,a,n,v,o,c,i,j,A,I,N,y,C,S,D=Object.keys(r[2]).length>0,_=D&&U(r);return{c(){e=b("div"),l=b("div"),t=b("img"),a=q(),n=b("div"),v=b("h2"),o=K(r[0]),c=q(),i=b("p"),j=b("b"),A=q(),I=b("br"),N=q(),y=b("span"),C=new x(!1),S=q(),_&&_.c(),this.h()},l(g){e=k(g,"DIV",{id:!0,class:!0});var m=p(e);l=k(m,"DIV",{class:!0});var O=p(l);t=k(O,"IMG",{src:!0,alt:!0,class:!0}),a=z(O),n=k(O,"DIV",{class:!0});var H=p(n);v=k(H,"H2",{id:!0,class:!0});var V=p(v);o=Q(V,r[0]),V.forEach(d),H.forEach(d),O.forEach(d),c=z(m),i=k(m,"P",{id:!0,class:!0});var E=p(i);j=k(E,"B",{}),p(j).forEach(d),A=z(E),I=k(E,"BR",{}),N=z(E),y=k(E,"SPAN",{});var w=p(y);C=$(w,!1),w.forEach(d),E.forEach(d),S=z(m),_&&_.l(m),m.forEach(d),this.h()},h(){B(t.src,s=R+r[3])||h(t,"src",s),h(t,"alt",f="Logo for "+r[0]),h(t,"class","logo svelte-htqtfz"),h(v,"id","title"),h(v,"class","svelte-htqtfz"),h(n,"class","title-and-toggle svelte-htqtfz"),h(l,"class","header svelte-htqtfz"),C.a=null,h(i,"id","background"),h(i,"class","svelte-htqtfz"),h(e,"id","research-card"),h(e,"class","svelte-htqtfz")},m(g,m){P(g,e,m),u(e,l),u(l,t),u(l,a),u(l,n),u(n,v),u(v,o),u(e,c),u(e,i),u(i,j),u(i,A),u(i,I),u(i,N),u(i,y),C.m(r[1],y),u(e,S),_&&_.m(e,null)},p(g,[m]){m&8&&!B(t.src,s=R+g[3])&&h(t,"src",s),m&1&&f!==(f="Logo for "+g[0])&&h(t,"alt",f),m&1&&W(o,g[0]),m&2&&C.p(g[1]),m&4&&(D=Object.keys(g[2]).length>0),D?_?_.p(g,m):(_=U(g),_.c(),_.m(e,null)):_&&(_.d(1),_=null)},i:L,o:L,d(g){g&&d(e),_&&_.d()}}}function se(r,e,l){let{title:t="Untitled Project"}=e,{background:s="No background provided."}=e,{links:f={}}=e,{logo:a="/img/default.jpg"}=e;return r.$$set=n=>{"title"in n&&l(0,t=n.title),"background"in n&&l(1,s=n.background),"links"in n&&l(2,f=n.links),"logo"in n&&l(3,a=n.logo)},[t,s,f,a]}class fe extends Y{constructor(e){super(),Z(this,e,se,le,X,{title:0,background:1,links:2,logo:3})}}export{fe as P};
