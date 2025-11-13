window.addEventListener('resize', () => {
  console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
});

$(window).resize(function(){
    var ratio = $(window).width()/1340;
    $('body').css('transform','scale('+(ratio)+')');
    $('body').css('-ms-transform','scale('+(ratio)+')');
    $('body').css('-moz-transform','scale('+(ratio)+')');
    $('body').css('-webkit-transform','scale('+(ratio)+')');
});