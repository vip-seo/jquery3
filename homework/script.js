$(function() {
	$('button#settings').on('click', function(){
        $('#modal').addClass('show');
    });
    $('div#content>span').on('click', function(){
        $('#modal').removeClass('show');
    });

 let color;

    $('ul').on('click', 'li', function(){
       //console.log($(this).text());
       reset();
       resetBody();
       const el = $(this);
       color = el.text();
       el.addClass('active');
       $('#ok').removeAttr('disabled');
    
    });

    $('button#end').on('click', function(){
        $('#modal').removeClass('show');
    });

    $('#ok').on('click', function(){
        const color = $('li').filter('.active').text();
        $('#modal').removeClass('show');
        $('body').addClass(color);
        console.log(color);
    });

function reset(){
    $('li').removeClass('active');
};
function resetBody(){
    $('body').removeClass(color);
};

$('li').each(function (i) {
    if ($(this).hasClass('green')) {
        $(this).removeClass('green');
        $(this).addClass('red');
    } else {
        $(this).addClass('blue');
    }
})

// function tryActiveButton() {
//     $('li').
// }
});