const shape3 = document.getElementById("shape3");
const centerCircle = document.getElementById("center-circle");

const title = document.getElementById("name");

shape3.addEventListener("click", function () {
  centerCircle.classList.add("change-image-3");
  title.innerHTML = "Haydarova Dono";
});
