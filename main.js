camera = document.getElementById("camera")
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'png',
    png_quality: 100
});

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();
function start() {
    recognition.start();

}
recognition.onresult = function (event) {
    content = event.results[0][0].transcript; 
    console.log(content)
    if (content == "Selfie.") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera)
    setTimeout(function () {
        img_id = "selfie1"
        take_snapshot();
        speak_data = "taking your next selfie in 10 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);

    }, 5000);
    setTimeout(function () {
        img_id = "selfie2"
        take_snapshot();
        speak_data = "taking your next selfie in 15 seconds"
        var utterthis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);

    }, 10000);
    setTimeout(function () {
        img_id = "selfie3"
        take_snapshot();
        

    }, 15000);
}


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){ 
            document.getElementById("result1").innerHTML = '<img id="selfie1" src ="'+data_uri+'">';
        }
        if(img_id=="selfie2"){ 
            document.getElementById("result2").innerHTML = '<img id="selfie2" src ="'+data_uri+'">';
        }
        if(img_id=="selfie3"){ 
            document.getElementById("result3").innerHTML = '<img id="selfie3" src ="'+data_uri+'">';
        }
    });
}
















