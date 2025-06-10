const imgDiv = document.querySelectorAll(".image");
const journeyImgs = document.querySelectorAll(".journey-img");
const videoElement = document.querySelectorAll(".video-element");

imgDiv.forEach(function (img) {
  const src = img.getAttribute("data-src");
  img.style.backgroundImage = `url(${src})`;
});

journeyImgs.forEach(function (journeyImg) {
  const src = journeyImg.getAttribute("data-src");
  journeyImg.style.backgroundImage = `url(${src})`;
  journeyImg.addEventListener("mouseenter", function () {
    videoElement.forEach(function (each) {
      each.play();
    });
  });
  journeyImg.addEventListener("mouseleave", function () {
    videoElement.forEach(function (each) {
      each.pause();
      each.currentTime = 0;
    });
  });
});
