let images = [
  { url: "./images/png/photo1.png"},
  { url: "./images/png/photo2.png"},
  { url: "./images/png/photo3.png"}
]

 let image = document.querySelector(".projects__img");
 let dots  = document.querySelectorAll(".projects__svg_circle");
 let title = document.querySelectorAll(".projects_link_size");
 let info  = document.querySelectorAll(".projects__list");

 let setImages = () => {
 image.style.backgroundImage = `url(${images[currentIndex].url})`;
 };

 
 let left = document.querySelector(".left");
 let rigth = document.querySelector('.right');
 let currentIndex = 0;
 
 left.addEventListener('click', () => {
    for(let k =0; k <= images.length-1;k++){
      dots[k].classList.remove('active');
      title[k].classList.remove('activeTitle');
      info[k].classList.remove('listActive');
    }
    currentIndex -= 1;
    if(currentIndex < 0){
      currentIndex = images.length -1;
    }
    dots[currentIndex].classList.add('active');
    title[currentIndex].classList.add('activeTitle');
    info[currentIndex].classList.add('listActive');
    setImages();
  })
  
  
  rigth.addEventListener('click', () => {
    for(let k =0; k <= images.length-1;k++){
      dots[k].classList.remove('active');
      title[k].classList.remove('activeTitle');
      info[k].classList.remove('listActive');
      }
  currentIndex += 1;
  if(currentIndex  === images.length){
  currentIndex = 0;
    }
    dots[currentIndex].classList.add('active');
    title[currentIndex].classList.add('activeTitle');
    info[currentIndex].classList.add('listActive');
    setImages();
  });                        
                                                                                                             
function setDots(){
  for(let i=0; i<dots.length ; i++){
      dots[i].addEventListener('click',()=>{
          for(let k = 0; k<dots.length; k++){
            title[k].classList.remove('activeTitle');
             dots[k].classList.remove('active');
            info[k].classList.remove('listActive');  
          }
          currentIndex = i;
         title[currentIndex].classList.add('activeTitle');
          info[currentIndex].classList.add('listActive');
         dots[currentIndex].classList.add('active');
         setImages();
      })
  }
}
setDots();


function setTitle(){
    for(let i=0; i<title.length ; i++){
      title[i].addEventListener('click',()=>{
          for(let k = 0; k<title.length; k++){
             title[k].classList.remove('activeTitle');
             dots[k].classList.remove('active');
            info[k].classList.remove('listActive');
          }
          currentIndex = i;
          title[currentIndex].classList.add('activeTitle');
          info[currentIndex].classList.add('listActive');
         dots[currentIndex].classList.add('active');
         setImages();
      })
  }
  
}
setTitle();
 
function setInfo(){
   for(let i=0; i<info.length ; i++){
      info[i].addEventListener('click',()=>{
          for(let k = 0; k<info.length; k++){
             info[k].classList.remove('listActive');  
          }
          currentIndex = i;
          info[currentIndex].classList.add('listActive');
         setImages();
      })
  }
}
setInfo();

  function sliderMotion(){
    for(let k =0; k <= images.length-1;k++){
      dots[k].classList.remove('active');
      title[k].classList.remove('activeTitle');
      info[k].classList.remove('listActive');
      }
  currentIndex += 1;
  if(currentIndex  === images.length){
  currentIndex = 0;
    }
    dots[currentIndex].classList.add('active');
    title[currentIndex].classList.add('activeTitle');
    info[currentIndex].classList.add('listActive');
    setImages();
  }

  let timerSlider = setInterval(()=> sliderMotion(), 3000);

  let blockSlider = document.querySelector('.projects')
    blockSlider.addEventListener('mouseover',()=>{
    clearInterval(timerSlider)
   })

  
  blockSlider.addEventListener('mouseleave',()=>{
    timerSlider = setInterval(()=> sliderMotion(), 3000);
  })
  