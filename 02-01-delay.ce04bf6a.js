!function(){var e=document.querySelector(".result"),n=function(e){return new Promise((function(n){var t=e;setTimeout((function(){n(t)}),t)}))},t=function(n){return e.insertAdjacentHTML("beforeend","<li>\n      <p>Promise Resolved after: <b> ".concat(n,"ms </b></p>\n    </li>"))};n(2e3).then(t),n(1e3).then(t),n(1500).then(t)}();
//# sourceMappingURL=02-01-delay.ce04bf6a.js.map
