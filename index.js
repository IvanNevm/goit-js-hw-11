import{a as f,S as p,i}from"./assets/vendor-BfjKTZs6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d="49622703-1639e63074f827bd1b79f059d",m="https://pixabay.com/api/";async function y(s){try{return(await f.get(m,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),t}}const c=document.querySelector(".gallery");let g=new p(".gallery a");function h(s){const t=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:r,views:a,comments:l,downloads:u})=>`
      <a href="${n}" class="gallery-item">
        <img src="${o}" alt="${e}" loading="lazy" />
        <div class="info">
          <p> Likes: <span class="info-value">${r}</span></p>
          <p> Views: <span class="info-value">${a}</span></p>
          <p> Comments: <span class="info-value">${l}</span></p>
          <p> Downloads: <span class="info-value">${u}</span></p>
        </div>
      </a>
    `).join("");c.innerHTML=t,g.refresh()}function L(){c.innerHTML=""}function v(){document.querySelector(".loader").classList.add("visible")}function b(){document.querySelector(".loader").classList.remove("visible")}const S=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');S.addEventListener("submit",async s=>{s.preventDefault();const t=w.value.trim();if(!t){i.warning({title:"Warning",message:"Search field cannot be empty!"});return}L(),v();try{const o=await y(t);o.hits.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):h(o.hits)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later!"})}finally{b()}});
//# sourceMappingURL=index.js.map
