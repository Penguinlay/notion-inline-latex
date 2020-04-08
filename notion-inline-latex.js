// ==UserScript==
// @name            Notion Inline LaTeX
// @namespace       https://github.com/Penguinlay/notion-inline-latex
// @match           https://www.notion.so/*
// @version         0.5
// @description     User Script for Inline LaTeX Rendering in notion.so
// @require         https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js
// @require         https://cdn.jsdelivr.net/gh/howyay/js-hosting@f633cdd963413765f5c9f9c6eabcf56dac52ba1a/katex/contrib/auto-render.min.js
// @grant           GM_addStyle
// ==/UserScript==

// Note:
// Script does not change the content.
// It merely changes the display after the contents are loaded.
// Need at least one math block present on the page for the script to work properly.
// Small value for startUpWaitTime and keyUpWaitTime can make the script load improperly.
// Add delimiters as desired though delimiters other than default one have not been tested yet.

// Acknowledgement
// This script is inspired by the project by Evert Heylen.
// https://github.com/evertheylen/notion-inline-math

// right-padding for inline math mode
GM_addStyle(`
.katex {
    padding-right: 0 !important;
}
`);

// declare/init vars
let timer; // timer identifier
let startUpWaitTime = 3000; // ms after startup (adjust as needed)
let pageChangeWaitTime = 1500; // ms after page changed (adjust as needed)
let userActionWaitTime = 100; // ms after keyup   (adjust as needed)

// render inline LaTeX
function renderInlineLaTeX() {
  renderMathInElement(document.body, {
    delimiters: [
      // LaTeX delimiters (uncomment/add as needed)
      { left: "$$" , right: "$$" , display: true  },
      // { left: "\\[", right: "\\]", display: true  },
      // { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false }
    ]
  });
  console.log("Inline LaTeX is rendered.");
}

let url = window.location.href;

['click', 'popstate'].forEach(evt =>
    window.addEventListener(evt, function() {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                renderOnPageChange();
            }
            url = location.href;
        });
    }, true)
);

function renderOnPageChange() {
    console.log("Rendering inline LaTeX on navigation...");
    clearTimeout(timer);
    timer = setTimeout(renderInlineLaTeX, pageChangeWaitTime);
}

function renderOnUserAction(evt) {
  if (evt.target.isContentEditable) return;
  console.log("Rendering inline LaTeX on user actions...");
  clearTimeout(timer);
  timer = setTimeout(renderInlineLaTeX, userActionWaitTime);
}

// on startup...
console.log("Rendering inline LaTeX on startup...");
clearTimeout(timer);
timer = setTimeout(renderInlineLaTeX, startUpWaitTime);

// on user actions...
document.addEventListener("keydown", renderOnUserAction);
document.addEventListener("mousedown", renderOnUserAction);
