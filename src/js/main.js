let toogleBtn = document.getElementById('toggleBtn');
let logo_hiden = document.getElementById('logo-hiden');

toogleBtn.onclick = function () {
  let element = document.getElementById('toogle_navigation');
  element.classList.toggle('toogle_navigation--move');
  toogleBtn.classList.toggle('toggleBtn_hiden');
  logo_hiden.classList.toggle('logo-hiden');
};

// let consultation_btn = document.getElementById('consultation_btn');

// consultation_btn.onclick = function () {
//   let consultation_btn_click = document.getElementById('toogle_navigation');
//   consultation_btn_click.classList.toggle('toogle_navigation--move');
// };

let closeBtn = document.getElementById('close_menu_btn');

closeBtn.onclick = function () {
  let element = document.getElementById('toogle_navigation');
  element.classList.toggle('toogle_navigation--move');
  toogleBtn.classList.toggle('toggleBtn_hiden');
  logo_hiden.classList.toggle('logo-hiden');
};
let closeBtncons = document.getElementById('consultation_btn');

closeBtncons.onclick = function () {
  let element = document.getElementById('toogle_navigation');
  element.classList.toggle('toogle_navigation--move');
  toogleBtn.classList.toggle('toggleBtn_hiden');
  logo_hiden.classList.toggle('logo-hiden');
};
let picture_hover = document.getElementById('program__list');

picture_hover.onmouseenter = function () {
  let hover = document.getElementById('program_pictute');
  hover.classList.add('program__picture_hover');
};

let picture_hover_off = document.getElementById('program__list');

picture_hover_off.onmouseleave = function () {
  let hoveroff = document.getElementById('program_pictute');
  hoveroff.classList.remove('program__picture_hover');
};
