let images = [
  { url: "https://img.favcars.com/mini/hatch/mini_hatch_2010_wallpapers_14_1280x960.jpg"},
  { url: "https://img.favcars.com/mini/cabrio/mini_cabrio_2009_pictures_5_1280x960.jpg"},
  { url: "https://www.t-r-n.ru/files/modification-images/cb/a8/5c/f9/40061_tmb940.jpg"}
]

 let image = document.querySelector(".projects__img");
 let dots  = document.querySelector(".projects__svg_circle");
 let title = document.querySelector(".projects_link_size");



 let setImages = () => {
 image.style.backgroundImage = `url(${images[currentIndex].url})`
 };
  
 

 let left = document.querySelector(".left");
 let rigth = document.querySelector('.right');
 let currentIndex = 0;
 
 
  left.addEventListener('click', () => {
    currentIndex -= 1;
    if(currentIndex < 0){
      currentIndex = images.length -1;
    }
    setImages();
  })
  
  
  rigth.addEventListener('click', () => {
    currentIndex += 1;
    if(currentIndex  === images.length){
  currentIndex = 0;
    }
    setImages();
  })
