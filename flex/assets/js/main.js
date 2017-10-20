$(document).ready(function() {


// Add jQuery here

$('.nav_hurr').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.hurr').removeClass('hide');
  $('.item.hurr').addClass('show');
});


$('.nav_agate').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.agate').removeClass('hide');
  $('.item.agate').addClass('show');
});


$('.nav_cart').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.cart').removeClass('hide');
  $('.item.cart').addClass('show');
});


$('.nav_mot').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.mot').removeClass('hide');
  $('.item.mot').addClass('show');
});


$('.nav_score').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.score').removeClass('hide');
  $('.item.score').addClass('show');
});


$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});


$('.thumbnail').click(function(event) {
  $(this).toggleClass('lightbox');
});













  });
