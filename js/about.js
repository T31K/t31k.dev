$(document).ready( function() { 
    $('i.play').on('click', function(){
        if ($(this).attr('class').includes('pause')) {
        $(this).attr('class', 'fas fa-play-circle play')
        } else {
            $(this).attr('class', 'fas fa-pause-circle play')
        }
    })
})
