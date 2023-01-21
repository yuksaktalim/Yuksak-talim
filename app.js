const shape1 = document.getElementById("shape1");
const centerCircle = document.getElementById("center-circle");

const title = document.getElementById("name");

shape1.addEventListener("click", function () {
  centerCircle.classList.add("change-image");
  title.innerHTML = "Dono";
});
