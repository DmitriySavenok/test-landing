
  const aboutSlider = document.querySelector('#about-review');
  const next = document.querySelector('#review-next');
  const prev = document.querySelector('#review-prev');
  
  next.addEventListener('click', function(){
    aboutSlider.scrollBy(135,0);
  })
  
  prev.addEventListener('click', function(){
    aboutSlider.scrollBy(-135,0);
  })
