var pintando = false
var pincel = null
var step = 1
var actions = false
var emocion = null

//Reproducción de la animación de ingreso
lottie.loadAnimation({
    container: document.getElementById('1_ingreso'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '1_ingreso.json'
})

//Muestra el campo de texto y el botón de continuar
setTimeout(function() {
    actions = true
    $('.content-page1 .form').show(function(){
        $('.content-page1 .page-btn').slideDown('slow', function(){
            actions = false
            step = 2
        })
    })
}, 12000)

//Oculta la primera animación y muestra la segunda al pulsar el botón de continuar
$('#btn-continuar').on('click', function(){
    if(step === 2){
        if (!$('#name').val()) return;
        actions = true
        $('.content-page1 .form').slideUp('slow')
        $('.content-page1 .page-btn').slideUp('slow')
        $('body').addClass('page2')
        $('.page-btn2').hide()
        $('.check').hide()
        $('.content-page2').show('slow', function(){
            //Reproducción de la animación de términos y condiciones
            lottie.loadAnimation({
                container: document.getElementById('2_terminos'),
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: '2_terminos.json'
            })
            setTimeout(function(){
                $('.check').slideDown('slow')
            }, 1200)
            //Evaluación del estado del check
            $('#terms').on('change', function () {
                if (this.checked) {
                    $('.content-page2 .page-btn2').slideDown('slow', function () {
                        actions = false
                        step = 3
                    })
                } else {
                    $('.content-page2 .page-btn2').slideUp('fast')
                }
            })
        })
    }
})

$('#btn-continuar2').on('click', function(){
    if(step === 3){
        actions = true
        $('body').addClass('page3')
        $('.content-page1').hide('slow')
        $('.content-page2').hide('slow')
        $('.content-page3 .page-btn3').hide('slow', function(){
            $('.content-page3').show('slow', function(){
                lottie.loadAnimation({
                    container: document.getElementById('3_instrucciones'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: '3_instrucciones.json'
                })
                setTimeout(function(){
                    $('.content-page3 .page-btn3').slideDown('slow')
                }, 8000)
                actions = false
                step = 4
            })
        })
    }
})

$('#btn-continuar3').on('click', function () {
    if (step === 4) {
        actions = true
        $('body').addClass('calibrationTest')
        $('.content-page3').hide('slow', function () {
            $('.calibrationTest').show('slow', function () {
                empezar()
                setTimeout(function () {//La calibración comienza 6 segundos después de acivar webgazer
                    $('.nav-link').trigger('click')
                    actions = false
                    step = 5
                }, 6000)
            })
        })
    }
})

$('#btn-continuar4').on('click', function () {
    if (step === 5) {
        actions = true
        $('body').addClass('page4')
        $('.calibrationTest .calibrationDiv').hide('slow', function () {
            $('.calibrationTest .page-btn4').hide('slow', function () {
                document.getElementById("plotting_canvas").style.setProperty('background-color', '#454e72')
                document.getElementById("plotting_canvas").style.setProperty('margin', '0')
                document.getElementById("plotting_canvas").style.setProperty('top', '0')
                document.getElementById("plotting_canvas").style.setProperty('right', '0')
                document.getElementById("plotting_canvas").style.setProperty('bottom', '0')
                document.getElementById("plotting_canvas").style.setProperty('left', '0')
                $('.content-page4').show('slow', function () {
                    lottie.loadAnimation({
                        container: document.getElementById('4_seleccion'),
                        renderer: 'svg',
                        loop: false,
                        autoplay: true,
                        path: '4_seleccion.json'
                    })
                    actions = false
                    step = 6
                    if (step === 6) {
                        actions = true
                    }
                })
            })
        })
    }
})

$('.ojo_feliz').on('click', function(){
    if(step === 6){
        actions = true
        $('.content-page4').hide('slow', function(){
            $('.content-page5').show('slow', function(){
                document.getElementById("plotting_canvas").style.setProperty('background-color', '#73c0ba')
                lottie.loadAnimation({
                    container: document.getElementById('5_instrucciones'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: '5_instrucciones.json'
                })
                actions = false
                step = 7
                if(step === 7){
                    actions = true
                    setTimeout(function(){
                        $('.content-page5').hide('slow', function () {
                            document.getElementById("plotting_canvas").style.setProperty('background-color', '#ffffff')
                            // Logica de pincel aca, cuando seleccione ponga la función
                            pincel = pincel10
                            pincel.init()
                            pintando = true;
                            console.log('pintando', pintando)
                            actions = false
                            step = 8
                            if(step === 8){
                                actions = true
                                setTimeout(function(){
                                    webgazer.pause()
                                    $('.content-page6').show('slow', function(){
                                        lottie.loadAnimation({
                                            container: document.getElementById('6_gracias'),
                                            renderer: 'svg',
                                            loop: false,
                                            autoplay: true,
                                            path: '6_gracias.json'
                                        })
                                        setTimeout(function(){
                                            const mc = document.querySelector("#plotting_canvas");
                                            $('.page-btn5').on('click', function(){
                                                if(window.navigator.msSaveBlob){
                                                    window.navigator.msSaveBlob(mc.msToBlob(), "archivo.jpeg");
                                                } else{
                                                    const a = document.createElement("a");
                                                    document.body.appendChild(a);
                                                    a.href = mc.toDataURL();
                                                    a.download = "archivo.jpeg";
                                                    a.click();
                                                    document.body.removeChild(a);
                                                }
                                            })
                                        }, 7000)
                                    })
                                }, 30000)
                            }
                        })
                    }, 9000)
                }
            })
        })
    }
})

$('.ojo_aburrido').on('click', function(){
    if(step === 6){
        actions = true
        $('.content-page4').hide('slow', function(){
            $('.content-page5').show('slow', function(){
                document.getElementById("plotting_canvas").style.setProperty('background-color', '#73c0ba')
                lottie.loadAnimation({
                    container: document.getElementById('5_instrucciones'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: '5_instrucciones.json'
                })
                actions = false
                step = 7
                if(step === 7){
                    actions = true
                    setTimeout(function(){
                        $('.content-page5').hide('slow', function () {
                            document.getElementById("plotting_canvas").style.setProperty('background-color', '#ffffff')
                            // Logica de pincel aca, cuando seleccione ponga la función
                            pincel = pincel15
                            pincel.init()
                            pintando = true;
                            console.log('pintando', pintando)
                            actions = false
                            step = 8
                            if(step === 8){
                                actions = true
                                setTimeout(function(){
                                    webgazer.pause()
                                    $('.content-page6').show('slow', function(){
                                        lottie.loadAnimation({
                                            container: document.getElementById('6_gracias'),
                                            renderer: 'svg',
                                            loop: false,
                                            autoplay: true,
                                            path: '6_gracias.json'
                                        })
                                        setTimeout(function(){
                                            const mc = document.querySelector("#plotting_canvas");
                                            $('.page-btn5').on('click', function(){
                                                if(window.navigator.msSaveBlob){
                                                    window.navigator.msSaveBlob(mc.msToBlob(), "archivo.jpeg");
                                                } else{
                                                    const a = document.createElement("a");
                                                    document.body.appendChild(a);
                                                    a.href = mc.toDataURL();
                                                    a.download = "archivo.jpeg";
                                                    a.click();
                                                    document.body.removeChild(a);
                                                }
                                            })
                                        }, 7000)
                                    })
                                }, 30000)
                            }
                        })
                    }, 9000)
                    actions = false
                    step = 8
                }
            })
        })
    }
})

$('.ojo_enojado').on('click', function(){
    if(step === 6){
        actions = true
        $('.content-page4').hide('slow', function(){
            $('.content-page5').show('slow', function(){
                document.getElementById("plotting_canvas").style.setProperty('background-color', '#73c0ba')
                lottie.loadAnimation({
                    container: document.getElementById('5_instrucciones'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: '5_instrucciones.json'
                })
                actions = false
                step = 7
                if(step === 7){
                    actions = true
                    setTimeout(function(){
                        $('.content-page5').hide('slow', function () {
                            document.getElementById("plotting_canvas").style.setProperty('background-color', '#ffffff')
                            // Logica de pincel aca, cuando seleccione ponga la función
                            pincel = pincel11
                            pincel.init()
                            pintando = true;
                            console.log('pintando', pintando)
                            actions = false
                            step = 8
                            if(step === 8){
                                actions = true
                                setTimeout(function(){
                                    webgazer.pause()
                                    $('.content-page6').show('slow', function(){
                                        lottie.loadAnimation({
                                            container: document.getElementById('6_gracias'),
                                            renderer: 'svg',
                                            loop: false,
                                            autoplay: true,
                                            path: '6_gracias.json'
                                        })
                                        setTimeout(function(){
                                            const mc = document.querySelector("#plotting_canvas");
                                            $('.page-btn5').on('click', function(){
                                                if(window.navigator.msSaveBlob){
                                                    window.navigator.msSaveBlob(mc.msToBlob(), "archivo.jpeg");
                                                } else{
                                                    const a = document.createElement("a");
                                                    document.body.appendChild(a);
                                                    a.href = mc.toDataURL();
                                                    a.download = "archivo.jpeg";
                                                    a.click();
                                                    document.body.removeChild(a);
                                                }
                                            })
                                        }, 7000)
                                    })
                                }, 30000)
                            }
                        })
                    }, 9000)
                    actions = false
                    step = 8
                }
            })
        })
    }
})

$('.ojo_optimista').on('click', function(){
    if(step === 6){
        actions = true
        $('.content-page4').hide('slow', function(){
            $('.content-page5').show('slow', function(){
                document.getElementById("plotting_canvas").style.setProperty('background-color', '#73c0ba')
                lottie.loadAnimation({
                    container: document.getElementById('5_instrucciones'),
                    renderer: 'svg',
                    loop: false,
                    autoplay: true,
                    path: '5_instrucciones.json'
                })
                actions = false
                step = 7
                if(step === 7){
                    actions = true
                    setTimeout(function(){
                        $('.content-page5').hide('slow', function () {
                            document.getElementById("plotting_canvas").style.setProperty('background-color', '#ffffff')
                            // Logica de pincel aca, cuando seleccione ponga la función
                            pincel = pincel14
                            pincel.init()
                            pintando = true;
                            console.log('pintando', pintando)
                            actions = false
                            step = 8
                            if(step === 8){
                                actions = true
                                setTimeout(function(){
                                    webgazer.pause()
                                    $('.content-page6').show('slow', function(){
                                        lottie.loadAnimation({
                                            container: document.getElementById('6_gracias'),
                                            renderer: 'svg',
                                            loop: false,
                                            autoplay: true,
                                            path: '6_gracias.json'
                                        })
                                        setTimeout(function(){
                                            const mc = document.querySelector("#plotting_canvas");
                                            $('.page-btn5').on('click', function(){
                                                if(window.navigator.msSaveBlob){
                                                    window.navigator.msSaveBlob(mc.msToBlob(), "archivo.jpeg");
                                                } else{
                                                    const a = document.createElement("a");
                                                    document.body.appendChild(a);
                                                    a.href = mc.toDataURL();
                                                    a.download = "archivo.jpeg";
                                                    a.click();
                                                    document.body.removeChild(a);
                                                }
                                            })
                                        }, 7000)
                                    })
                                }, 30000)
                            }
                        })
                    }, 9000)
                    actions = false
                    step = 8
                }
            })
        })
    }
})

function drawPixels(ctx, x, y) {
    for (var i = -10; i < 10; i += 4) {
        for (var j = -10; j < 10; j += 4) {
            if (Math.random() > 0.5) {
                ctx.fillStyle = ['red', 'orange', 'yellow', 'green',
                    'light-blue', 'blue', 'purple'][getRandomInt(0, 6)];
                ctx.fillRect(x + i, y + j, 4, 4);
            }
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function midPointBtw(p1, p2) {
    return {
      x: p1.x + (p2.x - p1.x) / 2,
      y: p1.y + (p2.y - p1.y) / 2
    };
  }

function getPattern(ctx) {
    var patternCanvas = document.createElement('canvas'),
        dotWidth = 20,
        dotDistance = 5,
        patternCtx = patternCanvas.getContext('2d');

    patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;

    patternCtx.fillStyle = 'red';
    patternCtx.beginPath();
    patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
    patternCtx.closePath();
    patternCtx.fill();
    return ctx.createPattern(patternCanvas, 'repeat');
  }


var pincel10 = {
    ctx: null,
    init: function () {
        var el = document.getElementById('plotting_canvas');
        pincel10.ctx = el.getContext('2d');

        pincel10.ctx.lineJoin = pincel10.ctx.lineCap = 'round';
    },
    pos: function (x, y) {
        drawPixels(pincel10.ctx, x, y);
    }
}

var pincel11 = {
    points: [],
    ctx: null,
    init: function () {
        var el = document.getElementById('plotting_canvas');
        pincel11.ctx = el.getContext('2d');

        pincel11.ctx.lineWidth = 1;
        pincel11.ctx.lineJoin = pincel11.ctx.lineCap = 'round';
        pincel11.ctx.strokeStyle = getPattern(pincel11.ctx);


        pincel11.points.push({ x: posx, y: posy });
    },
    pos: function (x, y) {
        pincel11.points.push({ x: x, y: y });

        pincel11.ctx.clearRect(0, 0, pincel11.ctx.canvas.width, pincel11.ctx.canvas.height);

        var p1 = pincel11.points[0];
        var p2 = pincel11.points[1];

        pincel11.ctx.beginPath();
        pincel11.ctx.moveTo(p1.x, p1.y);

        for (var i = 1, len = pincel11.points.length; i < len; i++) {
            var midPoint = midPointBtw(p1, p2);
            pincel11.ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
            p1 = pincel11.points[i];
            p2 = pincel11.points[i + 1];
        }
        pincel11.ctx.lineTo(p1.x, p1.y);
        pincel11.ctx.stroke();
    }
}


var pincel14 = {
    points: [],
    ctx: null,
    init: function () {
        var el = document.getElementById('plotting_canvas');
        pincel14.ctx = el.getContext('2d');

        pincel14.ctx.lineWidth = 1;
        pincel14.ctx.lineJoin = pincel14.ctx.lineCap = 'round';


        pincel14.points.push({ x: posx, y: posy });
    },
    pos: function (x, y) {
        pincel14.ctx.clearRect(0, 0, pincel14.ctx.canvas.width, pincel14.ctx.canvas.height);
        pincel14.points.push({ x: x, y: y });

        pincel14.ctx.beginPath();
        pincel14.ctx.moveTo(pincel14.points[0].x, pincel14.points[0].y);
        for (var i = 1; i < pincel14.points.length; i++) {
            pincel14.ctx.lineTo(pincel14.points[i].x, pincel14.points[i].y);
            var nearPoint = pincel14.points[i - 5];
            if (nearPoint) {
                pincel14.ctx.moveTo(nearPoint.x, nearPoint.y);
                pincel14.ctx.lineTo(pincel14.points[i].x, pincel14.points[i].y);
            }
        }
        pincel14.ctx.stroke();
    }
}


var pincel15 = {
    points: [],
    ctx: null,
    init: function () {
        var el = document.getElementById('plotting_canvas');
        pincel15.ctx = el.getContext('2d');

        pincel15.ctx.lineWidth = 1;
        pincel15.ctx.lineJoin = pincel15.ctx.lineCap = 'round';


        pincel15.points.push({ x: posx, y: posy });
    },
    pos: function (x, y) {
        pincel15.points.push({ x: x, y: y });

        pincel15.ctx.beginPath();
        pincel15.ctx.moveTo(pincel15.points[pincel15.points.length - 2].x, pincel15.points[pincel15.points.length - 2].y);
        pincel15.ctx.lineTo(pincel15.points[pincel15.points.length - 1].x, pincel15.points[pincel15.points.length - 1].y);
        pincel15.ctx.stroke();

        for (var i = 0, len = pincel15.points.length; i < len; i++) {
            dx = pincel15.points[i].x - pincel15.points[pincel15.points.length - 1].x;
            dy = pincel15.points[i].y - pincel15.points[pincel15.points.length - 1].y;
            d = dx * dx + dy * dy;

            if (d < 1000) {
                pincel15.ctx.beginPath();
                pincel15.ctx.strokeStyle = 'rgba(0,0,0,0.3)';
                pincel15.ctx.moveTo(pincel15.points[pincel15.points.length - 1].x + (dx * 0.2), pincel15.points[pincel15.points.length - 1].y + (dy * 0.2));
                pincel15.ctx.lineTo(pincel15.points[i].x - (dx * 0.2), pincel15.points[i].y - (dy * 0.2));
                pincel15.ctx.stroke();
            }
        }
    }
}