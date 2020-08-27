
//selector    event-listener        callback/action
$('p').hover(function(){
    $(this).addClass('blowup')
    
}, function(){
    
    $(this).removeClass('blowup')
})