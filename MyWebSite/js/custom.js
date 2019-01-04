(function($) {
  // Toggle Nav letter Change
  $(document).ready(function(){
     $('.menu__label, #logo ,.shape-overlays, .menu__inner').on('click', function(e) {
        e.stopPropagation();
    $('.toggle-nav').on('click', function(e) {
        $(this).toggleClass('open');
        $('#menu').trigger('click');
        changeLetters($(this));
});
  
function changeLetters(btn) {
    var m = $('.toggle-nav span.m');
    var e = $('.toggle-nav span.e');
    var n = $('.toggle-nav span.n');
    var u = $('.toggle-nav span.u');

    e.toggleClass('btn-close');
    if(btn.hasClass('open'))
    {
        m.text("E").css("top" ,"-4px","left" ,"27px"  );
        n.text("I").css("top" ,"-4px","left" ,"27px"  );
        u.text("T").css("top" ,"-4px","left" ,"27px"  );
    }
    else
        {
            m.text("M");
            n.text("N");
            u.text("U");
        }
    }
});
})(jQuery);







  

