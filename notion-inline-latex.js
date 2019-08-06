// ==UserScript==
// @name            Notion Inline LaTeX
// @namespace       https://github.com/Penguinlay/notion-inline-latex
// @match           https://www.notion.so/*
// @version         0.1
// @description     User Script for Inline LaTeX Rendering in notion.so
// @require         https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/katex.min.js
// @require         https://cdn.jsdelivr.net/npm/katex@0.10.2/dist/contrib/auto-render.min.js
// ==/UserScript==

// Note:
// Script does not change the content.
// It merely changes the display after the contents are loaded.
// Need at least one math block present on the page for the script to work properly.
// Small value for startUpWaitTime and keyUpWaitTime can make the script to load improperly.
// Add delimiters as desired though delimiters other than default one have not been tested yet.

// Acknowledgement
// This script is inspired by the project by Evert Heylen.
// https://github.com/evertheylen/notion-inline-math

// declare/init vars
let timer;                              // timer identifier
let startUpWaitTime = 2000;             // ms after startup (adjust as needed)
let keyUpWaitTime   = 2000;             // ms after keyup   (adjust as needed)

// render inline LaTeX
function renderInlineLaTeX() {
    renderMathInElement(document.body, {
        delimiters: [
            // LaTeX delimiters (uncomment/add as needed)
            // { left: "$$" , right: "$$" , display: true  },
            // { left: "\\[", right: "\\]", display: true  },
            // { left: "\\(", right: "\\)", display: false },
            { left: "$"  , right: "$"  , display: false }
        ]
    });
    console.log("Inline LaTeX rendered.");
}

// on startup...
console.log("Rendering inline LaTeX on startup...");
clearTimeout(timer);
timer = setTimeout(renderInlineLaTeX, startUpWaitTime);

// on keyup...
document.addEventListener("keyup", () => {
    console.log("Rendering inline LaTeX on keyup...");
    clearTimeout(timer);
    timer = setTimeout(renderInlineLaTeX, keyUpWaitTime);
});
