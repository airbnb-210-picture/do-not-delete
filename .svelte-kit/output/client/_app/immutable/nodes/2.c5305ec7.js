import{S as k,i as x,s as P,a as u,k as _,q as R,c as v,l as m,m as b,r as $,h as f,b as p,G as g,H as y,J as G,K as H,n as d}from"../chunks/index.b7ecb65b.js";function q(c,s,o){const r=c.slice();return r[1]=s[o],r}function E(c){let s,o=c[1]+"",r,h,n,l,t,a;return{c(){s=_("p"),r=R(o),h=u(),n=_("img"),t=u(),a=_("br"),this.h()},l(e){s=m(e,"P",{});var i=b(s);r=$(i,o),i.forEach(f),h=v(e),n=m(e,"IMG",{src:!0,alt:!0}),t=v(e),a=m(e,"BR",{}),this.h()},h(){H(n.src,l=`${c[1]}.png`)||d(n,"src",l),d(n,"alt",`${c[1]}`)},m(e,i){p(e,s,i),g(s,r),p(e,h,i),p(e,n,i),p(e,t,i),p(e,a,i)},p:y,d(e){e&&f(s),e&&f(h),e&&f(n),e&&f(t),e&&f(a)}}}function O(c){let s,o,r,h,n=c[0],l=[];for(let t=0;t<n.length;t+=1)l[t]=E(q(c,n,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();s=u(),o=_("h1"),r=_("pre"),h=R(` 
        Overall, the host is able to 
            1. accept rent immediately, ignore
            2. your question
            3. Refuse to help
    `)},l(t){for(let i=0;i<l.length;i+=1)l[i].l(t);s=v(t),o=m(t,"H1",{});var a=b(o);r=m(a,"PRE",{});var e=b(r);h=$(e,` 
        Overall, the host is able to 
            1. accept rent immediately, ignore
            2. your question
            3. Refuse to help
    `),e.forEach(f),a.forEach(f)},m(t,a){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,a);p(t,s,a),p(t,o,a),g(o,r),g(r,h)},p(t,[a]){if(a&1){n=t[0];let e;for(e=0;e<n.length;e+=1){const i=q(t,n,e);l[e]?l[e].p(i,a):(l[e]=E(i),l[e].c(),l[e].m(s.parentNode,s))}for(;e<l.length;e+=1)l[e].d(1);l.length=n.length}},i:y,o:y,d(t){G(l,t),t&&f(s),t&&f(o)}}}function S(c){return[[1,2,3,4,5,6,7,8,9,10,11,12,13,15]]}class C extends k{constructor(s){super(),x(this,s,S,O,P,{})}}export{C as component};
