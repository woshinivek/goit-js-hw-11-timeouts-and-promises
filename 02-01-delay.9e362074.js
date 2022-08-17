const e=document.querySelector(".result"),t=e=>new Promise((t=>{const n=e;setTimeout((()=>{t(n)}),n)})),n=t=>e.insertAdjacentHTML("beforeend",`<li>\n      <p>Promise Resolved after: <b> ${t}ms </b></p>\n    </li>`);t(2e3).then(n),t(1e3).then(n),t(1500).then(n);
//# sourceMappingURL=02-01-delay.9e362074.js.map
