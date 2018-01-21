$("ul").on('click', 'li', function(){
    $(this).toggleClass('done')
});
$('ul').on('click','span', function(e){
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    e.stopPropagation();
});
$("input[type=text]").keypress(function(e){
    if(e.which == 13){
        var newTodo = $(this).val();
        console.log(newTodo )
        $('ul').append(`<li><span><i class='fa fa-trash'></i></span> ${newTodo}</li>`)
        $('input[type=text]').val('');
        $('input[type=text]').removeClass('inputHeight');
    }
})

$('.fa-plus').on('click', function(){
    $("input[type=text]").toggleClass('inputHeight');
})