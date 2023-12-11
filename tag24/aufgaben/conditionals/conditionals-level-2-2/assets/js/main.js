function checkAirQuality() {
  let airQuality = document.querySelector("#aQual").value;
  let qualityResult = document.querySelector("span");
  let targetContainer = document.querySelector("body");
  let resultOne = document.querySelector(".resultOne");
  let resultTwo = document.querySelector(".resultTwo");
  if (airQuality <= 50) {
    qualityResult.innerHTML = `${airQuality}`;
    targetContainer.classList.remove("bad", "moderate");
    targetContainer.classList.add("good");
    resultOne.innerHTML = "Level of health concern: Good";
    resultTwo.innerHTML = "Level of health effect: Little or no risk";
  } else if (airQuality >= 50 && airQuality <= 100) {
    qualityResult.innerHTML = `${airQuality}`;
    targetContainer.classList.remove("bad", "good");
    targetContainer.classList.add("moderate");
    resultOne.innerHTML = "Level of health concern: Moderate";
    resultTwo.innerHTML = "Level of health effect: Acceptable quality";
  } else {
    qualityResult.innerHTML = `${airQuality}`;
    targetContainer.classList.remove("moderate", "good");
    targetContainer.classList.add("bad");
    resultOne.innerHTML = "Level of health concern: Bad";
    resultTwo.innerHTML = "Level of health effect: Generable publics not likely affected";
  }
}
