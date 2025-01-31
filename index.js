import{i,S as c}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const d=r=>`
         <li class="gallery-item list">
            <a class="gallery-link" href="${r.largeImageURL}">
                <img
                    class="gallery-image"
                    width="150 px"
                    heigth="150 px"
                    src="${r.previewURL}"
                    data-source="${r.largeImageURL}"
                    alt="${r.tags}"
                />
                <div class="info-about">
                    <div class="info">
                        <span class="cl-name">Likes</span>
                        <span class="cl-number" >${r.likes}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Views</span>
                        <span class="cl-number" >${r.views}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Comments</span>
                        <span class="cl-number" >${r.comments}</span>
                        </div>
                    <div class="info">
                        <span class="cl-name">Downloads</span>
                        <span class="cl-number" >${r.downloads}</span>
                        </div>
                </div>
            </a>
        </li>
        `,u=r=>{r.preventDefault();const a="48542018-8722dafc38583a35c899e9bbe",o=r.currentTarget.elements.userQuery.value.trim();if(o.length==0){i.show({title:"Attention !!",color:"red",position:"center",message:"Заполните поле для формирования запроса.."});return}fetch("https://pixabay.com/api/?key="+a+"&q="+encodeURIComponent(o)+"&image_type=photo&orientation=horizontal&safesearch=true").then(t=>{if(!t.ok)throw new Error(response.status);return t.json()}).then(t=>{const e=t.hits,s=document.querySelector(".js-gallery");if(e.length==0){i.show({title:"",color:"green",position:"center",message:"Sorry, there are no images matching your search query. Please try again!."}),s.innerHTML="",r.reset();return}const n='<div class="loader"></div>'+e.map(l=>d(l)).join("");s.innerHTML=n,new c(".gallery-item a",{captionsData:"alt",captionDelay:250})}).catch(t=>{console.log(t)})},m=document.querySelector(".js-search-form");m.addEventListener("submit",u);
//# sourceMappingURL=index.js.map
