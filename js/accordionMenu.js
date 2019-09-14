jQuery(document).ready(function() {
  jQuery('#menu li ul').hide();
 
  var cookieValue = jQuery.cookie('menuCookie') || '';
  jQuery('#menu > li > span').each(function(index) {
    var $this = jQuery(this), $checkElement = $this.next('ul'); 
    if (cookieValue.indexOf(bigIndex(index)) > -1) {
      $checkElement.show();
    }
    $this.click(function() {   
      if ($checkElement.is(':hidden')) {
        $checkElement.slideDown("fast");
        cookieValue = cookieValue + bigIndex(index);
        jQuery.cookie('menuCookie', cookieValue);              
      } else {
        $checkElement.slideUp();
        cookieValue = cookieValue.replace(bigIndex(index),'');
        jQuery.cookie('menuCookie', cookieValue);
      }
      
    });
  });
  
  jQuery('button').click(function() {
    jQuery.cookie('menuCookie', '', { expires: -1 });
    jQuery('#menu > li ul').hide();
    showCookie();
  });
  
});


function bigIndex(inival) {
  return inival < 10 ? '0' + inival + '-' : '' + inival + '-';
}