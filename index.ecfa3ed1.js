(()=>{const e=document.querySelector(".header__menu--js"),t=document.querySelector(".js-open"),o=document.querySelector(".js-close"),c=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 1200px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.ecfa3ed1.js.map