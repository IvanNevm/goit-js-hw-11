import{a as p,S as f,i}from"./assets/vendor-BfjKTZs6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="49622703-1639e63074f827bd1b79f059d",y="https://pixabay.com/api/";async function g(s){try{return(await p.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),t}}const l=document.querySelector(".gallery");let h=new f(".gallery a");function L(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:u,downloads:d})=>`
      <a href="${n}" class="gallery-item">
        <img src="${o}" alt="${e}" loading="lazy" />
        <div class="info">
          <p> Likes: <span class="loader">${r}</span></p>
          <p> Views: <span class="loader">${a}</span></p>
          <p> Comments: <span class="loader">${u}</span></p>
          <p> Downloads: <span class="loader">${d}</span></p>
        </div>
      </a>
    `).join("");l.innerHTML=t,h.refresh()}function b(){l.innerHTML=""}function S(){document.querySelector(".loader").classList.add("visible")}function w(){document.querySelector(".loader").classList.remove("visible")}const q=document.querySelector(".form"),v=document.querySelector('input[name="search-text"]'),c=document.querySelector(".loading-message");function P(){c.style.display="block"}function $(){c.style.display="none"}q.addEventListener("submit",async s=>{s.preventDefault();const t=v.value.trim();if(!t){i.warning({title:"Warning",message:"Search field cannot be empty!"});return}b(),S(),P();try{const o=await g(t);o.hits.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):L(o.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{w(),$()}});
//# sourceMappingURL=index.js.map
