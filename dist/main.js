(()=>{"use strict";!function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","header");const n=function(){const e=document.createElement("h1");e.innerHTML="CAFÉ <br> WOLF";const t=document.createElement("nav");t.setAttribute("id","navbar");const n=document.createElement("a");n.classList.add("nav-link"),n.setAttribute("href","#about"),n.innerHTML="about";const a=document.createElement("a");a.classList.add("nav-link"),a.setAttribute("href","#menu"),a.innerHTML="menu";const c=document.createElement("a");return c.classList.add("nav-link"),c.setAttribute("href","#contact"),c.innerHTML="contact",t.appendChild(n),t.appendChild(a),t.appendChild(c),{h1:e,nav:t}}();for(const e in n)t.appendChild(n[e]);e.appendChild(t);const a=document.createElement("div");a.setAttribute("id","main");const c=function(){const e=document.createElement("h1");e.innerHTML="beisl deluxe";const t=document.createElement("p");return t.innerHTML="In the year 1931 CAFÉ WOLF opened its doors as a espresso bar for the very first time - <br>\n    it was the birth of the espresso culture in the center of Graz.<br> Since then the\n    Café has been run by Mr. Wolf sen. & jun.",{h1:e,p:t}}();for(const e in c)a.appendChild(c[e]);e.appendChild(a);const r=document.createElement("div");r.setAttribute("id","footer");const i=function(){const e=document.createElement("p");e.innerHTML="Visit us on social media";const t=document.createElement("a"),n=document.createElement("img");n.setAttribute("src","/src/images/facebook-3-16.png"),Object.assign(t,{href:"",className:"profile-link",target:"_blank"}),t.appendChild(n);const a=document.createElement("a"),c=document.createElement("img");return c.setAttribute("src","/src/images/instagram-16.png"),Object.assign(a,{href:"",className:"profile-link",target:"_blank"}),a.appendChild(c),{p:e,a_fb:t,a_ig:a}}();for(const e in i)r.appendChild(i[e]);e.appendChild(r)}()})();