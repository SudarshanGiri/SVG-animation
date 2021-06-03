$(window).scroll(function() {
    var hT = $('#circle').offset().top,
        hH = $('#circle').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
     console.log((hT-wH) , wS);
    if (wS > (hT+hH-wH)){
        $('#circle').addClass('scrolled');
    }
    else {
        $('#circle').removeClass('scrolled');

    }
 });
 $('.internet-quality').mouseenter(function(){
    $('.internet-quality rect').attr('transform', 'rotate(-120.8139 0 100.824)' )

 })
 $('.internet-quality').mouseleave(function(){
    $('.internet-quality rect').attr('transform', 'rotate(-57.8139 0 100.824)' )

})
/*end scroll animation*/

/* mouse leave add class for animation */
$('.delay').mouseleave(function(){
    $('.delay').addClass('mouse-leave');


})
$('.delay').mouseenter(function(){
    $('.delay').removeClass('mouse-leave');


})




