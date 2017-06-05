$(() =>  {
  $("input[type='radio']").click(function(){
    moveRight();
    this.addClass("select");
  });


  // Obteniendo los el ancho y el alto de todas las li que contienen la imagen
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
  // Funcion de auto play
  setInterval(() => {moveRight(); }, 5000);

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

  $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('div.btn-prev').click(function () {
        moveLeft();
    });

    $('div.btn-next').click(function () {
        moveRight();
    });

});
