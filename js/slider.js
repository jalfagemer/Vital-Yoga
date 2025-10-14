$(document).ready(function() {
 // hides the infobox as soon as the DOM is ready (a little sooner that page load)  Remove this line if you want the info to display by default
  $('.caption-container').hide();
  
 // shows and hides and toggles the infobox on click  
  $('#slick-show').click(function() {
    $('.caption-container').show('slow');
    return false;
  });
  $('#slick-hide').click(function() {
    $('.caption-container').hide('fast');
    return false;
  });
  $('#slick-toggle').click(function() {
    $('.caption-container').toggle(400);
    return false;
  });

 // slides down, up, and toggle the infobox on click    
  $('#slick-down').click(function() {
    $('.caption-container').slideDown('slow');
    return false;
  });
  $('#slick-up').click(function() {
    $('.caption-container').slideUp('fast');
    return false;
  });
  $('#slick-slidetoggle').click(function() {
    $('.caption-container').slideToggle(400);
    return false;
  });
});