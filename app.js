
const centerCircle = document.getElementById("center-circle");
const title = document.getElementById("name");
const comment = document.getElementById("comment")

const shape1 = document.getElementById("shape1");
shape1.addEventListener("click", function () {
  const classNumber = 1
  centerCircle.classList.add(`change-image-${classNumber}`);

  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(`change-image-${i}`, "Mirabbos", "«Никогда не ошибается тот, кто ничего не делает, Никогда не ошибается тот, кто ничего не делает»")
    }
  }

});
const shape2 = document.getElementById("shape2");
shape2.addEventListener("click", function () {
  const classNumber = 2
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
      removeClasses(`change-image-${i}`, "Husan", "«Никогда не ошибается тот, кто ничего не делает»")
    }
  }
});
const shape3 = document.getElementById("shape3");
shape3.addEventListener("click", function () {
  const classNumber = 3
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
    removeClasses(`change-image-${i}`, "Haydarova Dono", "«Никогда не ошибается тот, кто ничего не делает»")
  }
  }
});
const shape4 = document.getElementById("shape4");
const classNumber = 4
shape4.addEventListener("click", function () {
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
    removeClasses(`change-image-${i}`, "SOmeone", "«Никогда не ошибается тот, кто ничего не делает»")
  }
  }
});
const shape5 = document.getElementById("shape5");
shape5.addEventListener("click", function () {
  const classNumber = 5
  centerCircle.classList.add(`change-image-${classNumber}`);
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
    removeClasses(`change-image-${i}`, "Hasan", "«Никогда не ошибается тот, кто ничего не делает»")
  }
  }
});
const shape6 = document.getElementById("shape6");
shape6.addEventListener("click", function () {
  const classNumber = 6
  centerCircle.classList.add(`change-image-${classNumber}`);
  
  for (let i = 1; i <= 6; i++) {
    if (i != classNumber) {
    removeClasses(`change-image-${i}`, "Ibrohim", "«Никогда не ошибается тот, кто ничего не делает»")
  }
  }
});

function removeClasses(className, name, com) {
  title.innerHTML = name
  comment.innerHTML = com
  centerCircle.classList.remove(className)
}

// const someting = document.getElementById("outline-border")
// someting.style.visibility = "visible"






const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.getElementById('here');
const backdrop = document.getElementById("backdrop")

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmMovieButton = addMovieModal.querySelector(".btn--success");

const inputs = addMovieModal.querySelectorAll("input");
const infoList = document.getElementById("movie-list");

const movies = [];

const updateUI = () => {
    if (movies.length === 0) {
        infoList.classList.remove("visible");

    } else {
        infoList.classList.add("visible");
    }
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible")
};


const toggleMovieModal = () => {
    addMovieModal.classList.toggle("visible");
    toggleBackdrop();
};

const cancelAddMovie = () => {
    toggleMovieModal();
}

const backdropClickHandler = () => {
    toggleMovieModal();
}

const renderElements = (OzingizHaqizda, Fan , Qiziqish) => {
    const newElement = document.createElement("li");
    newElement.className = "movie-element";
    newElement.innerHTML = `
    <div class = "movie-element__image">
    <img src="${OzingizHaqizda}" alt="${Fan}">
    </div>
    <div class="movie-element__info">
    <h2>${Fan}</h2>
    <p>${Qiziqish}/5 stars </p>
    </div>`;
    infoList.append(newElement);
    console.log()
}



const addMovieHandler = () => {
    const FanValue = inputs[0].value;
    const OzingizHaqizdaValue = inputs[1].value;
    const QiziqishValue= inputs[2].value;

    if (
      FanValue.trim() === "" ||
      QiziqishValue.trim() === "" ||
      OzingizHaqizdaValue.trim() === "" 
      
    ) {
        alert("Mistake");
        return;
    }

    renderElements(FanValue, OzingizHaqizdaValue, QiziqishValue);
    

    const newInfo = {
        Fan: FanValue,
        OzingizHaqizda: OzingizHaqizdaValue,
        rating: QiziqishValue,

    };
    movies.push(newInfo);

    updateUI()
    toggleMovieModal();
    console.log(movies)
}



startAddMovieButton.addEventListener('click', backdropClickHandler);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmMovieButton.addEventListener('click', addMovieHandler);

