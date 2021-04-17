var prediction1 = "YO"
var prediction2 = "WASSUP"
Webcam.set(
    {
        width: 350,
        height: 300,
        image_format: 'jpeg',
        jpeg_quality: 90
    })
    camera = document.getElementById("camera")
    Webcam.attach('#camera')

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "result_photo" src = "' + data_uri + '"</img>'
    })
}

console.log("ml5 version:", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json", modelLoaded)

function modelLoaded()
{
    console.log("YASS MODEL LOADED PEPALS")
}

function check()
{
    speak()
}

function speak()
{
    synth = window.speechSynthesis
    speakData1 = "First prediction is " + prediction1
    speakData2 = "Second prediction is " + prediction2
    utterThis = new SpeechSynthesisUtterance(speakData1 + speakData2)
    synth.speak(utterThis)
}