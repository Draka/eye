function parpadeo() {
    console.log('e')
    var ojos = $('.content-page1 .eye')
    ojos.attr('src', 'images/ojo1_p.svg')
    setTimeout(function(){
        ojos.attr('src', 'images/ojo1.svg')
    }, 600)
    setTimeout(function(){
        parpadeo()
    }, Math.random()*7000+3000)
}

parpadeo()
var step = 1
var actions = false

$(document).on('click', function(){
    if (actions) {
        return
    }
    // hace la animación y evita clicks erroneos
    if (step === 1){
        actions = true
        $('.content-page1 .text1').hide('slow', function(){
            $('.content-page1 .text2').show('slow', function(){
                actions = false
                step = 2
            })
        })
    }
    if (step === 2){
        actions = true
        $('.content-page1 .text2').hide('slow', function(){
            $('.content-page1 .text3').show('slow', function(){
                actions = false
                step = 3
            })
            $('.content-page1 .form, .content-page1 .page-btn').slideDown('slow', function(){
            })
        })
    }
})

$('#btn-continuar').on('click', function(){
    if (step === 3){
        if (!$('#name').val()) return;

        actions = true
        $('body').addClass('page2')
        $('.content-page1').hide('slow', function(){
            $('.content-page2').show('slow', function(){
                actions = false
                step = 4
            })
        })
    }
})