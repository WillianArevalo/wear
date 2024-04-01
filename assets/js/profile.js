document.addEventListener("DOMContentLoaded", function () {
  var btnChangeImage = document.getElementById("btn-change-image");

  btnChangeImage.addEventListener("click", function () {
    var inputImage = document.getElementById("change-image");
    inputImage.click();

    inputImage.addEventListener("change", function () {
      var image = document.getElementById("image-profile");
      var file = inputImage.files[0];
      var reader = new FileReader();
      reader.onloadend = function () {
        image.src = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        image.src = "";
      }
    });
  });
});
