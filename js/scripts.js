"use strict";var toogleBtn=document.getElementById("toggleBtn"),logo_hiden=document.getElementById("logo-hiden");toogleBtn.onclick=function(){document.getElementById("toogle_navigation").classList.toggle("toogle_navigation--move"),toogleBtn.classList.toggle("toggleBtn_hiden"),logo_hiden.classList.toggle("logo-hiden")};var closeBtn=document.getElementById("close_menu_btn");closeBtn.onclick=function(){document.getElementById("toogle_navigation").classList.toggle("toogle_navigation--move"),toogleBtn.classList.toggle("toggleBtn_hiden"),logo_hiden.classList.toggle("logo-hiden")};var closeBtncons=document.getElementById("consultation_btn_close");closeBtncons.onclick=function(){document.getElementById("toogle_navigation").classList.toggle("toogle_navigation--move"),toogleBtn.classList.toggle("toggleBtn_hiden"),logo_hiden.classList.toggle("logo-hiden")};var picture_hover=document.getElementById("program__list");picture_hover.onmouseenter=function(){document.getElementById("program_pictute").classList.add("program__picture_hover")};var picture_hover_off=document.getElementById("program__list");picture_hover_off.onmouseleave=function(){document.getElementById("program_pictute").classList.remove("program__picture_hover")};