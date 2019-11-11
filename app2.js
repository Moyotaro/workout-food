
let carousel = $(".carousel"),
    currdeg = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e) {
    if (e.data.d == "n") {
        currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + 60;
    }
    carousel.css({
        "transform": "rotateY(" + currdeg + "deg)"
    });
}

// あこーでぃおん
$(function () {
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.s_01 .accordion_one .accordion_header').click(function () {
        //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
        $(this).next('.accordion_inner').slideToggle();
        $(this).toggleClass("open");
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