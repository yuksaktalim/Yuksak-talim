const centerCircle = document.getElementById("center-circle");
const title = document.getElementById("name");
const comment = document.getElementById("comment");

const shape1 = document.getElementById("shape1");
shape1.addEventListener("click", function () {
  const classNumber = 1;
  centerCircle.classList.add(`change-image-${classNumber}`);

  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(
        `change-image-${i}`,
        "Mirabbos",
        "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»"
      );
    }
  }
});
const shape2 = document.getElementById("shape2");
shape2.addEventListener("click", function () {
  const classNumber = 2;
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(
        `change-image-${i}`,
        "Husan",
        "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»"
      );
    }
  }
});
const shape3 = document.getElementById("shape3");
shape3.addEventListener("click", function () {
  const classNumber = 3;
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(
        `change-image-${i}`,
        "Haydarova Dono",
        "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»"
      );
    }
  }
});
const shape4 = document.getElementById("shape4");
const classNumber = 4;
shape4.addEventListener("click", function () {
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(
        `change-image-${i}`,
        "SOmeone",
        "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»"
      );
    }
  }
});
const shape5 = document.getElementById("shape5");
shape5.addEventListener("click", function () {
  const classNumber = 5;
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(
        `change-image-${i}`,
        "Hasan",
        "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»"
      );
    }
  }
});
const shape6 = document.getElementById("shape6");
shape6.addEventListener("click", function () {
  const classNumber = 6;
  centerCircle.classList.add(`change-image-${classNumber}`);

  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(
        `change-image-${i}`,
        "Ibrohim",
        "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»"
      );
    }
  }
});

function removeClasses(className, name, com) {
  title.innerHTML = name;
  comment.innerHTML = com;
  centerCircle.classList.remove(className);
}

// const someting = document.getElementById("outline-border")
// someting.style.visibility = "visible"
