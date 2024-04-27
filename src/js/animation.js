const width = window.innerWidth;

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

if (width > 1024) {
  for (let elm of elements) {
    observer.observe(elm);
  }
} else {
  for (let elm of elements) {
    elm.classList.add('element-show')
  }
}
