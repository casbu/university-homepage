"use strict"

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      alert("Thanks 😎 I'll reach out to you in 3-5 business days!");
   }
}