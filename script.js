const imageContainer = document.querySelector(".image-container");
const loaderContainer = document.getElementById("loader-container");
const blueThemeButton = document.getElementById("blue-theme");
const yellowThemeButton = document.getElementById("yellow-theme");
const pinkThemeButton = document.getElementById("pink-theme");
const umbrellaImage = document.getElementById("umbrella-image");
const logoUploadButton = document.getElementById("logo-upload-button");
const logoUploadInput = document.createElement("input");

logoUploadInput.setAttribute("type", "file");
logoUploadInput.setAttribute("accept", ".jpg,.png");
logoUploadInput.style.display = "none";

function hideLoader() {
  loaderContainer.style.opacity = "0";
}

function showLoader() {
  loaderContainer.style.opacity = "1";
}

function handleLogoUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    const uploadedLogo = document.getElementById("uploaded-logo");
    uploadedLogo.src = reader.result;
    uploadedLogo.style.display = "block";
    umbrellaImage.style.zIndex = "-1";
    
  };
}
logoUploadButton.addEventListener("click", () => {
  logoUploadInput.click();
});

logoUploadInput.addEventListener("change", handleLogoUpload);

// change color for blue buttons 
blueThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#C5E0DC";
    logoUploadButton.style.backgroundColor = "#0000FF";
    setTimeout(() => {
      umbrellaImage.src = "./icon/Blue copy.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 3000);
  });
});

// change color for yellow buttons 
yellowThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F7E09E";
    logoUploadButton.style.backgroundColor = "#FFA500";
    setTimeout(() => {
      umbrellaImage.src = "./icon/Yello.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 3000);
  }, 0);
});

// change color for pink buttons 
pinkThemeButton.addEventListener("click", () => {
  showLoader();
  setTimeout(() => {
    umbrellaImage.style.display = "none";
    document.body.style.backgroundColor = "#F4C4C4";
    logoUploadButton.style.backgroundColor = "#FF00FF";
    setTimeout(() => {
      umbrellaImage.src = "./icon/Pink copy.png";
      umbrellaImage.style.display = "block";
      hideLoader();
    }, 3000);
  }, 0);
});