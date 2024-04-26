window.onload = () => {
  const slider = document.getElementById("userRange");
  const output = document.getElementById("form-range-value");
  const systemSelect = document.getElementById("order-system-select");
  const systemSelectBtn = document.getElementById("order-system-select-btn");
  const systemChoise = document.getElementById("order-form-system-choice");
  const userSystem = document.getElementById("userSystem");
  
  systemSelectBtn.onclick = function(event){
    event.preventDefault();
    systemSelect.classList.toggle('list--opened');
  }

  document.addEventListener('mouseup', function(e) {
    if (!systemSelect.contains(e.target)) {
        systemSelect.classList.remove('list--opened');
    }
  });

  document.querySelectorAll('.order__form-system-item').forEach(el => {
    el.addEventListener('click', (e) => {
      systemChoise.innerHTML = e.currentTarget.innerHTML;
      userSystem.value = systemChoise.innerHTML;
      systemSelect.classList.remove('list--opened');
    })
  })

  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
}
