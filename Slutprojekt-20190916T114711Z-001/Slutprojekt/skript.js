//Öppnar navigation
function openNav(){
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("hamburger").style.width ="0%";
}

//Stänger navigation
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("hamburger").style.width = "80px";
}

var imagesIndex = 1;
showImages(imagesIndex);

// Nästa - Föregående kontroll
function plusImage(n) {
  showImages(imagesIndex += n);
}

function currentImage(n) {
  showImages(imagesIndex = n);
}

function showImages(n) {
  //Variabler
  var x;
  var images = document.getElementsByClassName("fade");
  var dots = document.getElementsByClassName("dot");
  
  //Kontroll av antal slides
  if (n > images.length) {imagesIndex = 1} 
  if (n < 1) {imagesIndex = images.length}
    
  //Gör att bilderna inte hamnar under varann
  for (x = 0; x < images.length; x++) {
      images[x].style.display = "none"; 
  }
  
  //Ändrar prickarnas ClassName
  for (x = 0; x < dots.length; x++) {
      dots[x].className = dots[x].className.replace(" active", "");
  }
  
  //Visar rätt bild
  images[imagesIndex-1].style.display = "block";
  //Visar rätt prick
  dots[imagesIndex-1].className += " active";
}