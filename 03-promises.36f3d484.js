!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var a=r("iU1Pc"),i=document.querySelector(".form"),l={firstDelay:0,stepDelay:0,delayTimer:0,amountDelay:0};i.addEventListener("submit",(function(t){t.preventDefault(),console.dir(t.target),l.firstDelay=+t.target[0].value,l.stepDelay=+t.target[1].value,l.amountDelay=+t.target[2].value,function(t){var n=function(t){setTimeout((function(){var n,o;(n=t+1,o=l.delayTimer+l.stepDelay*t,new Promise((function(e,t){Math.random()>.3?e("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms")):t("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))).then((function(t,n){e(a).Notify.info(t,n)})).catch((function(t,n){e(a).Notify.info(t,n)}))}),l.delayTimer+l.stepDelay*t)};t.preventDefault(),l.delayTimer=l.firstDelay;for(var o=0;o<l.amountDelay;o+=1)n(o)}(t)}))}();
//# sourceMappingURL=03-promises.36f3d484.js.map