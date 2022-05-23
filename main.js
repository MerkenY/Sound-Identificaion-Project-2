function start(){
navigator.mediaDevices.getUserMedia({audio: true});
classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Kof6hQVLs/model.json", modelready);
}

function modelready(){
classifier.classify(gotresults);
}

function gotresults(error,results)
{if(error){ 
console.error(error);
}
else{console.log(results);}
}