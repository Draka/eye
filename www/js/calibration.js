var PointCalibrate = 0;
var CalibrationPoints = {};

/**
 * Clear the canvas and the calibration button.
 */
function ClearCanvas() {
  $(".Calibration").hide();
  var canvas = document.getElementById("plotting_canvas");
  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Show the instruction of using calibration at the start up screen.
 */
function PopUpInstruction() {
  ClearCanvas();
  /*swal({
    title: "Calibrar",
    text: "Haga clic en cada uno de los 9 puntos de la pantalla. Debe hacer clic en cada punto 5 veces hasta que se vuelva amarillo. Esto calibrará los movimientos de los ojos.",
    buttons: {
      cancel: false,
      confirm: true
    }
  }).then(isConfirm => {*/
    ShowCalibrationPoint();
  /*});*/
}

/**
  * Show the help instructions right at the start.
  */
function helpModalShow() {
  // $('#helpModal').modal('show');
}

/**
 * Load this function when the index page starts.
* This function listens for button clicks on the html page
* checks that all buttons have been clicked 5 times each, and then goes on to measuring the precision
*/
$(document).ready(function () {
  ClearCanvas();
  helpModalShow();
  $(".Calibration").click(function () { // click event on the calibration buttons

    var id = $(this).attr('id');

    if (!CalibrationPoints[id]) { // initialises if not done
      CalibrationPoints[id] = 0;
    }
    CalibrationPoints[id]++; // increments values

    if (CalibrationPoints[id] == 5) { //only turn to yellow after 5 clicks
      //$(this).css('background-color', 'yellow');
      $(this).prop('disabled', true); //disables the button
      PointCalibrate++;
    }

    //Show the middle calibration point after all other points have been clicked.
    if (PointCalibrate == 8) {
      $("#Pt5").show();
    }

    if (PointCalibrate >= 9) { // last point is calibrated
      //using jquery to grab every element in Calibration class and hide them except the middle point.
      $(".Calibration").hide();
      $("#Pt5").show();

      // clears the canvas
      var canvas = document.getElementById("plotting_canvas");
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

      //Change to the next screen
      $('.calibrationTest .page-btn4').slideDown('slow')
    }
  });
  let clickCount = 0
  let w = window.innerWidth
  let h = window.innerHeight
  $('#Pt1').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateX: [
          {value: (w/2)-25, duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt2').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateX: [
          {value: w-100, duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt3').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateY: [
          {value: (h/2)-48, duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt6').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateY: [
          {value: h-110 , duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt9').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateX: [
          {value: (w/2)-25 , duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt8').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateX: [
          {value: 0 , duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt7').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateY: [
          {value: (h/2)-48 , duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt4').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        translateX: [
          {value: (w/2)-48 , duration: 3000}
        ]
      })
      clickCount = 0
    }
  })
  $('#Pt5').on('click', function(){
    clickCount++
    if(clickCount === 5){
      anime({
        targets: 'div.ojo_calibrar',
        rotate: {
          value: 720,
          duration: 3000
        },
        scale: 5
      })
    }
  })
});

/**
 * Show the Calibration Points
 */
function ShowCalibrationPoint() {
  $(".Calibration").show();
  $("#Pt5").hide(); // initially hides the middle button
}

/**
* This function clears the calibration buttons memory
*/
function ClearCalibration() {
  // Clear data from WebGazer

  //$(".Calibration").css('background-color', 'red');
  //$(".Calibration").css('opacity', 0.2);
  //$(".Calibration").prop('disabled', false);

  CalibrationPoints = {};
  PointCalibrate = 0;
}

// sleep function because java doesn't have one, sourced from http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}