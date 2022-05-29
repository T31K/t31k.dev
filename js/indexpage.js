$(document).ready(function() {
  $('label.label').on('click', function() {
    $('div.inner').toggleClass('light')
    $('div.tags').toggleClass('light')
    $('div.top-menu').toggleClass('light')
    $(this).toggleClass('light')
    $('.ball').toggleClass('light')
  })
})
