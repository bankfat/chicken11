function goPage(){
  window.location.href = "index1.html";
}

const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("previewImage");
const uploadText = document.getElementById("uploadText");

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        previewImage.src = URL.createObjectURL(file);

        previewImage.style.display = "block";

        uploadText.style.display = "none";
    }

});