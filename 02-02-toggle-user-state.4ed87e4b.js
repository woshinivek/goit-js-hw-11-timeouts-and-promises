const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=(e,a)=>{const n=e.map((e=>e.name===a?{...e,active:!e.active}:e));return new Promise((e=>{e(n)}))},n=e=>console.table(e);a(e,"Mango").then(n),a(e,"Lux").then(n);
//# sourceMappingURL=02-02-toggle-user-state.4ed87e4b.js.map
