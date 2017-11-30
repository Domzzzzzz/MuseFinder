// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require ekko-lightbox
//= require geocomplete
//= require_tree .

// Adds geocomplete functionality to the location field
$(function(){
  $('#location-field').geocomplete();
});

// This function displays password fields when the 'Change password' btn clicked
$(function(){
  $('#show-fields').click(function(e){
    e.preventDefault();
    $('#hidden-fields').removeClass('hidden');
    $('#update-pw').addClass('hidden');
    $('#cancel-update-pw').removeClass('hidden');
  });
});

// This function hides password fields when the 'Hide fields' btn clicked
$(function(){
  $('#hide-fields').click(function(e){
    e.preventDefault();
    $('#hidden-fields').addClass('hidden');
    $('#update-pw').removeClass('hidden');
    $('#cancel-update-pw').addClass('hidden');
  });
});

// The 2 following functions toggle truncated/nontruncated post caption
$(function(){
  $('.more').click(function(e){
    e.preventDefault();
    var postId = $(this).data('post-id');
    $('#trunc-' + postId).addClass('hidden');
    $('#nontrunc-' + postId).removeClass('hidden');
  });
});

$(function(){
  $('.less').click(function(e){
    e.preventDefault();
    var postId = $(this).data('post-id');
    $('#trunc-' + postId).removeClass('hidden');
    $('#nontrunc-' + postId).addClass('hidden');
  });
});

// The 2 following functions hide and unhide posts
$(function(){
  $('.hide-post').click(function(e){
    e.preventDefault();
    var postId = $(this).data('post-id');
    $('#unhide-' + postId).removeClass('hidden');
    $('#post-' + postId).addClass('hidden');
  });
});

$(function(){
  $('.unhide-post').click(function(e){
    e.preventDefault();
    var postId = $(this).data('post-id');
    $('#post-' + postId).removeClass('hidden');
    $('#unhide-' + postId).addClass('hidden');
  });
});
