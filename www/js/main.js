isPaint = false
async function empezar() {
    //Set up the webgazer video feedback.
    var setup = function () {
        //Set up the main canvas. The main canvas is used to calibrate the webgazer.
        var canvas = document.getElementById("plotting_canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
    };
    setup();
    // Pinttura
    var canvas = document.getElementById('plotting_canvas');
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#00CC99';
    ctx.beginPath();
    ctx.moveTo(window.innerWidth / 2, window.innerHeight / 2);

    isPaint = false
    webgazer.params.showVideoPreview = true;
    // webgazer.params.storingPoints = true;
    //start the webgazer tracker
    await webgazer.setRegression('ridge') /* currently must set regression and tracker */
        //.setTracker('clmtrackr')
        .setGazeListener(function (data, clock) {
            // console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
            //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
            if (isPaint && data) {
                // ctx.lineTo(data.x, data.y);
                // ctx.stroke();
            }
        }).begin();
    webgazer.showVideoPreview(true) /* shows all video previews */
        .showPredictionPoints(true) /* shows a square every 100 milliseconds where current prediction is */
        .applyKalmanFilter(true); /* Kalman Filter defaults to on. Can be toggled by user. */



};

// Set to true if you want to save the data even if you reload the page.
window.saveDataAcrossSessions = true;

window.onbeforeunload = function () {
    webgazer.end();
}

/**
 * Restart the calibration process by clearing the local storage and reseting the calibration point
 */
function Restart() {
    $("Accuracy").html('Sin calibrar');
    webgazer.clearData();
    ClearCalibration();
    PopUpInstruction();
}


function paint() {
    isPaint = !isPaint
    if (isPaint) {
        webgazer.params.storingPoints = true;
    } else {
        webgazer.params.storingPoints = false;
    }
}