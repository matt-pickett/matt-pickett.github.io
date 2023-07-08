$(document).ready(function() {
  scrollFunction();
  toggleHomeContent();
});

$(window).scroll(function() {
  scrollFunction();
  toggleHomeContent();
});

// Scroll to top arrow button
function scrollFunction() {
  let scroll_top = document.getElementById("scroll_top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scroll_top.style.display = "block";
  } else {
    scroll_top.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// Show/hide text on home picture based on scroll position
function toggleHomeContent() {
  let home = document.getElementById("Home");
  let intro = document.querySelector(".intro");
  let name1 = document.querySelector(".name1");
  let name2 = document.querySelector(".name2");
  let aboutBtn = document.getElementById("aboutBtn");

  if (home.getBoundingClientRect().bottom <= intro.getBoundingClientRect().bottom) {
    intro.style.visibility = 'hidden';
    homecontainer.style.zIndex = '-1';
  }
  else {
    intro.style.visibility = 'visible';
    homecontainer.style.zIndex = '0';
  }

  if (home.getBoundingClientRect().bottom <= name1.getBoundingClientRect().bottom) {
    name1.style.visibility = 'hidden';
  }
  else {
    name1.style.visibility = 'visible';
  }

  if (home.getBoundingClientRect().bottom <= name2.getBoundingClientRect().bottom) {
    name2.style.visibility = 'hidden';
  }
  else {
    name2.style.visibility = 'visible';
  }

  if (home.getBoundingClientRect().bottom <= aboutBtn.getBoundingClientRect().bottom) {
    aboutBtn.style.transition = 'none';
    aboutBtn.style.visibility = 'hidden';
  }
  else {
    aboutBtn.style.visibility = 'visible';
    aboutBtn.style.transition = 'all 0.3s ease-out';
  }
}

function collapseNavbarMobile() {
  if ($(window).width() < 992) {
    $("#navbarNav").collapse("hide");
  }
}

// Scroll to section minus navbar height
$('#aboutBtn').click(function(){
  position = $('#About').offset().top - $('#Navbar').height();
  $("html, body").animate({scrollTop: position}, '500');
  collapseNavbarMobile();
});

$('#aboutNav').click(function(){
  position = $('#About').offset().top - $('#Navbar').height();
  $("html, body").animate({scrollTop: position}, '500');
  collapseNavbarMobile();
});

$('#experienceNav').click(function(){
  position = $('#Experience').offset().top - $('#Navbar').height();
  $("html, body").animate({scrollTop: position}, '500');
  collapseNavbarMobile();
});

$('#projectsNav').click(function(){
  position = $('#Projects').offset().top - $('#Navbar').height();
  $("html, body").animate({scrollTop: position}, '500');
  collapseNavbarMobile();
});

$('#contactNav').click(function(){
  position = $('#Contact').offset().top - $('#Navbar').height();
  $("html, body").animate({scrollTop: position}, '500');
  collapseNavbarMobile();
});

