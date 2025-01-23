window.onload = init;

function init() {
   document.forms[0].onsubmit = function(event) {
      if (!isValid()) {
         event.preventDefault();
         return false;
      }
      alert("Validations...have...been...PASSED! 🧙🏽‍♂️");
      return true;
   }

   function isValid() {
      var radioButtons = document.getElementsByName("review");
      let isValid = false;

      for (var radioButton of radioButtons) {
         if (radioButton.checked) {
            isValid = true;
            break;
         }
      }
      if(!isValid){
         alert("Please select a Rating button in order to submit.")
         return false;
      }
      return true;
   }
}