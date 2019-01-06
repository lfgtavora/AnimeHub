
$('#newLink').popup({
  on: 'click',
  position: 'bottom right'
});

//report content modal
function reportContentModal(event) {

  event.preventDefault();
  $('#report-modal').modal('show');
}

//report DMCA modal
function reportDmcaModal(event) {

  event.preventDefault();
  $('#dmca-modal').modal('show');
}

//report DMCA modal
function playContentModal(event) {

  event.preventDefault();
  $('#play-modal').modal('show');
}

$('.rating')
  .rating('enable')
;

$('#rating-title')
  .popup({
    on: 'click'
  });


//toggle to follow episodes
  $('.ui.button.toggle').state();
