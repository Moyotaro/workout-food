

anime.timeline()
  .add({
    targets: '.tittle .line',
    opacity: [0.5, 1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700
  })
  .add({
    targets: '.tittle .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
  })
  .add({
    targets: '.tittle .ampersand',
    opacity: [0, 1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  })
  .add({
    targets: '.tittle .letters-left',
    opacity: [0, 1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  })
  .add({
    targets: '.tittle .letters-right',
    opacity: [0, 1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  })
  .add({
    targets: '.tittle',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  // すくろーるのとこ
$(function () {
  $.scrollify({
    section: ".page",
    scrollSpeed: 700,
    easing: "easeOutExpo"
  });
});


// ぼたんかわいい最高( ´∀｀)
$(function () {
  $('.bottom-left a').on('click', function() {
    $('.bottom-left a').removeClass('active');
    $(this).addClass('active');
    return false;
  })
  $('.bottom-left a').on('click', function() {
    $('.bottom-content div').removeClass('active');
    $(this.hash).addClass('active');
  });
});

let animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

let Buttons = document.getElementsByClassName("button");

for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener('click', animateButton, false);
}