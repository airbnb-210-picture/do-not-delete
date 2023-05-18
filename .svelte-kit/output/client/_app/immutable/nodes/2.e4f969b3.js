import{S as H,i as O,s as S,k as u,q as R,a as q,l as v,m as y,r as $,h as r,c as E,b as p,G as k,H as g,J as B,K as C,n as x}from"../chunks/index.b7ecb65b.js";function d(c,i,h){const n=c.slice();return n[1]=i[h],n}function G(c){let i,h=c[1]+"",n,a,s,m,_,o;return{c(){i=u("p"),n=R(h),a=q(),s=u("img"),_=q(),o=u("br"),this.h()},l(t){i=v(t,"P",{});var e=y(i);n=$(e,h),e.forEach(r),a=E(t),s=v(t,"IMG",{src:!0,alt:!0}),_=E(t),o=v(t,"BR",{}),this.h()},h(){C(s.src,m=`${c[1]}.png`)||x(s,"src",m),x(s,"alt",`${c[1]}`)},m(t,e){p(t,i,e),k(i,n),p(t,a,e),p(t,s,e),p(t,_,e),p(t,o,e)},p:g,d(t){t&&r(i),t&&r(a),t&&r(s),t&&r(_),t&&r(o)}}}function I(c){let i,h,n,a,s,m,_,o=c[0],t=[];for(let e=0;e<o.length;e+=1)t[e]=G(d(c,o,e));return{c(){i=u("p"),h=R("feel free to check the timeline"),n=q();for(let e=0;e<t.length;e+=1)t[e].c();a=q(),s=u("h1"),m=u("pre"),_=R(` 
        Overall, the host is able to 
            1. accept rent immediately, ignore
            2. your question
            3. Refuse to help
    `)},l(e){i=v(e,"P",{});var f=y(i);h=$(f,"feel free to check the timeline"),f.forEach(r),n=E(e);for(let P=0;P<t.length;P+=1)t[P].l(e);a=E(e),s=v(e,"H1",{});var l=y(s);m=v(l,"PRE",{});var b=y(m);_=$(b,` 
        Overall, the host is able to 
            1. accept rent immediately, ignore
            2. your question
            3. Refuse to help
    `),b.forEach(r),l.forEach(r)},m(e,f){p(e,i,f),k(i,h),p(e,n,f);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,f);p(e,a,f),p(e,s,f),k(s,m),k(m,_)},p(e,[f]){if(f&1){o=e[0];let l;for(l=0;l<o.length;l+=1){const b=d(e,o,l);t[l]?t[l].p(b,f):(t[l]=G(b),t[l].c(),t[l].m(a.parentNode,a))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},i:g,o:g,d(e){e&&r(i),e&&r(n),B(t,e),e&&r(a),e&&r(s)}}}function J(c){return[[1,2,3,4,5,6,7,8,9,10,11,12,13,15]]}class M extends H{constructor(i){super(),O(this,i,J,I,S,{})}}export{M as component};
