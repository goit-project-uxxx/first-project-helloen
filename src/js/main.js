let toogleBtn = document.getElementById('toggleBtn');

toogleBtn.onclick = function () {
  let element = document.getElementById('toogle_navigation');
  element.classList.toggle('toogle_navigation--move');
  toogleBtn.classList.toggle('toggleBtn_hiden');
};
let closeBtn = document.getElementById('close_menu_btn');

closeBtn.onclick = function () {
  let element = document.getElementById('toogle_navigation');
  element.classList.toggle('toogle_navigation--move');
  toogleBtn.classList.toggle('toggleBtn_hiden');
};
