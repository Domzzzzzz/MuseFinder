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
//= require turbolinks
//= require_tree .

// This function displays email and password fields when the 'Change email & password' link is clicked
$(function(){
  $('#show-fields').click(function(e){
    e.preventDefault();
    $('#hidden-fields').removeClass('hidden');
    $('#update-info').addClass('hidden');
  });
});

// Adds geocomplete functionality to the location field
$(function(){
  $('#location-field').geocomplete();
});
