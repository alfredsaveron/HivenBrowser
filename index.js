// Click the menu and Go Incognito!

(function(){
      
  $('.menu-button, .menu').on('click', function() {
    $('.menu').fadeToggle('fast');
  });
  
  $('#incognito').on('click', function() {
    var $this = $(this);
    
    if ($this.text() == "Go incognito") {
      
      $('.browser').addClass('hvr-radial-out-animation');
      $('.browser-address').addClass('browser-address-animation');
      $('.google-logo, .google-search').fadeOut('fast', function() {
        $('.incognito-logo, .incognito-header, .incognito-info').fadeIn('fast');
        $('.hat-top, .hat-bottom').addClass('animated swing');
        $('.glasses').addClass('animated rotateInUpRight');
      });
      
      setTimeout(function() { 
        $this.find('a').text('Back to Normal');
      }, 300);
      
    } else {
      
      $('.browser').removeClass('hvr-radial-out-animation');      
      $('.browser-address').removeClass('browser-address-animation');
      $('.incognito-logo, .incognito-header, .incognito-info').fadeOut('fast', function() {
          $('.google-logo, .google-search').fadeIn('fast');
      });  
      
      setTimeout(function() { 
        $this.find('a').text('Go incognito');
      }, 300);
      
    }
    
  });
  
})();
