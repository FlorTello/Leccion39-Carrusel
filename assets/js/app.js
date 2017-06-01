// $(document).ready(function(){
//   alert('Cargo JQuery');
// });
//
// $( function(){
//   alert('Cago JQuery');
// });
//
// $( =>{
//   alert('Cago JQuery');
// });

$( () =>{
  $("a:first-child").click((e)=>{
    e.preventDefault();
    $(".brand-popup").show();
    // $(".brand-popup").removeClass('hide');
    // $(".brand-popup").addClass('show');
  });
  $("a:last-child").click((e)=>{
    e.preventDefault();
    $(".brand-popup").toggle();
    // $(".brand-popup").removeClass('hide');
    // $(".brand-popup").addClass('show');
  });
  $(".popup-link").on('click',(e) => {
  e.preventDefault();
  $('.brand-popup').show();
  //$('.brand-popup').removeClass('hide');
  //$('.brand-popup').addClass('show');

  });

  $(".brand-popup .popup-close").on('click',(e) => {
    e.preventDefault();
    $('.brand-popup').hide();
    //$('.brand-popup').removeClass('show');
    //$('.brand-popup').addClass('hide');
  });

});
