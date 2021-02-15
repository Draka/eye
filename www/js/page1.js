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

setTimeout(function(){
    $('.content-page1 .text1').hide('slow', function(){
        $('.content-page1 .text2').show('slow', function(){
            actions = false
            step = 2
            if(step === 2){
                setTimeout(function(){
                    $('.content-page1 .text2').hide('slow', function(){
                        $('.content-page1 .text3').show('slow', function(){
                            actions = false
                            step = 3
                        })
                        $('.content-page1 .form, .content-page1 .nombreing, .content-page1 .page-btn').slideDown('slow', function(){
                        })
                    })
                }, 1500)
            }
        })
    })
}, 1500)

$('#btn-continuar').on('click', function(){
    if (step === 3){
        if (!$('#name').val()) return;

        actions = true
        $('body').addClass('page2')
        $('.content-page1').hide('slow', function(){
            $('.content-page2 .page-btn2').hide()
            $('.content-page2').show('slow', function(){
                $('#terms').on('change', function(){
                    if(this.checked){
                        $('.content-page2 .page-btn2').slideDown('slow', function(){
                            actions = false
                            step = 4
                        })
                        $('.content-page2 .dot').show()
                    }else{
                        $('.content-page2 .page-btn2').slideToggle('fast')
                        $('.content-page2 .dot').hide()
                    }
                })
            })
        })
    }
})

$('#btn-continuar2').on('click', function(){
    if(step === 4){
        actions = true;
        $('body').addClass('page3')
        $('.content-page2').hide('slow', function(){
            $('.content-page3').show('slow', function(){
                actions=false
                step = 5
            })
        })
    }
})

$('#btn-continuar3').on('click', function(){
    if(step === 5){
        actions = true;
        $('body').addClass('page4')
        $('.content-page3').hide('slow', function(){
            $('.content-page4').show('slow', function(){
                actions=false
                step = 6
            })
        })
    }
})