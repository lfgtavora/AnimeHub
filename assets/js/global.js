$('.ui.dropdown')
  .dropdown({
    useLabels: true
  });

//on about page
$('.ui.accordion')
  .accordion()
;


  $("figure").on("click", function(){
    $('.trailer').modal({
    blurring: false,
    duration: 200,
  }).modal('show');
  });


  $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade')
      ;
    })
  ;


  $(".plot").mCustomScrollbar({
      theme:"light-3",
      autoHideScrollbar: true
  });

  $(".alarm-box").mCustomScrollbar({
      theme:"light-3"
  });

//clear dropdown menu

  $('.clear.button')
    .on('click', function() {
      $('.ui.search.dropdown')
        .dropdown('clear')
      ;
    })
  ;

  //bitcoin donation modal
  function bitcoinModal(event) {

    event.preventDefault();
    $('#bitcoin').modal('show');
  }

//login popup
  $('.logged')
  .popup({
    popup : $('logged-box'),
    on    : 'click',
    position: 'bottom right'
  })
;

//notification popup
  $('.notification')
  .popup({
    popup : $('notification-box'),
    on    : 'click',
    position: 'bottom right'
  })
;



//===================== scrolls bar fixed on top ===============================

// When the user scrolls the page, execute myFunction
window.onscroll = function() {barFixed()};

// Get the header
var header = document.getElementById("bar-options");

// Get the offset position of the navbar
var sticky = header.offsetTop + 420;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function barFixed() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
