
var typed2 = new Typed('#typed1', {
    strings: ["Save Time<br/>Save Money<br/>Hire Smartter "],
    typeSpeed: 100,
    backSpeed: 0,
    backDelay: 200,
    fadeIn: true,
    loop: true
});

var typed2 = new Typed('.typed2', {
    strings:["I am a <mark>Web ANIMATION</mark> Expert ."," I am a <mark>WordPress</mark> lover ."],
    typeSpeed: 120,
    backSpeed: 0,
    backDelay: 200,
    fadeIn: true,
    loop: true
});

function($) {
    $(document).ready(function(){
    $('.toggle-nav').on('click', function() {
    toggleNavigation($(this), $('.nav-pane'));
    changeLetters($(this));
    });
    
    function toggleNavigation(btn, nav) {
    btn.toggleClass('open');
    nav.toggleClass('open');
    }
    
    function changeLetters(btn) {
    var m = $('.toggle-nav span.m');
    var e = $('.toggle-nav span.e');
    var n = $('.toggle-nav span.n');
    var u = $('.toggle-nav span.u');
    
    e.toggleClass('btn-close');
    
    if(btn.hasClass('open'))
    {
    m.text("E").css("top" ,"-2px" );
    n.text("I").css("top" ,"-2px" );
    u.text("T").css("top" ,"-2px" );
    }
    else
    {
    m.text("M");
    n.text("N");
    u.text("U");
    }
    }
    });
    
}(jQuery);

function() {

    function SVGDDMenu( el, options ) {
        this.el = el;
        this.init();
    }
    
    SVGDDMenu.prototype.init = function() {
        this.shapeEl = this.el.querySelector( 'div.morph-shape' );
    
        var s = Snap( this.shapeEl.querySelector( 'svg' ) );
        this.pathEl = s.select( 'path' );
        this.paths = {
        reset : this.pathEl.attr( 'd' ),
        trans : this.shapeEl.getAttribute( 'data-morph-trans' ),
        open : this.shapeEl.getAttribute( 'data-morph-open' )
        };
    
        this.isOpen = false;
    
        this.initEvents();
    };
    
    SVGDDMenu.prototype.initEvents = function() {
        this.el.addEventListener( 'click', this.toggle.bind(this) );
    
        // For Demo purposes only
        [].slice.call( this.el.querySelectorAll('a') ).forEach( function(el) {
        el.onclick = function() { return false; }
        } );
    };
    
    SVGDDMenu.prototype.toggle = function() {
        var self = this;
    
        if( this.isOpen ) {
        classie.remove( self.el, 'menu--open' );
    
        self.pathEl.stop().animate( { 'path' : this.paths.reset }, 3000, mina.elastic );
    
        }
        else {
        classie.add( self.el, 'menu--open' );
    
        this.pathEl.stop().animate( { 'path' : this.paths.trans }, 320, mina.easeinout, function() {
            self.pathEl.stop().animate( { 'path' : self.paths.open }, 2500, mina.elastic );
        } );
    
        }
    
        this.isOpen = !this.isOpen;
    };
    
    new SVGDDMenu( document.getElementById( 'menu' ) );
    
}();