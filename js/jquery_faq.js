$('#change-color').click(function (){
    $('ul').each(function(index, element){
        element.lastElementChild.style.backgroundColor = '#FFFF00';
    });
});

$('h3').click(function (){
    $('ul').children().css('font-weight', 'bold');
})

