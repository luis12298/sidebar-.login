var pass_eye = document.querySelector(".eye");
var input_pass = document.querySelector("#pass");
var pass_eye2 = document.querySelector(".eye");
input_pass.addEventListener("input", () => {
   if (input_pass.value.length > 0) {
      pass_eye.style.display = "block";

   } else {
      pass_eye.style.display = "none";
   }

});

pass_eye2.addEventListener("click", function (params) {

   if (input_pass.type === "password") {

      input_pass.type = "text";
      pass_eye2.name = "eye-outline";

   } else {

      input_pass.type = "password";
      pass_eye2.name = "eye-off-outline";

   }

});