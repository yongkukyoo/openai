
  
const openai = new OpenAI("openai.js");
  
function onImageUpload(event) {
const file = event.target.files[0];
const reader = new FileReader();
reader.onload = function() {
const image = reader.result;
const caption = openai.generateCaption(image);
document.getElementById("caption").innerText = caption;
};
reader.readAsDataURL(file);
}

document.getElementById("image-upload").addEventListener("change", onImageUpload);
