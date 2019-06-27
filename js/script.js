
var eventType = prompt("What type of event are you attending, casual, semi-formal or formal?");
var resultOne;
if (eventType === "casual"){
 resultOne = "something comfy";
}
else if(eventType === "semi-formal"){
 resultOne = "a polo";
}
else if(eventType === "formal") {
 resultOne = "a suit";
}
var tempFahr = prompt("what is the tempurature?");
var resultTwo;
if(tempFahr < 54 ){
 resultTwo = "a coat";
}
else if(tempFahr > 70 ){
 resultTwo = "no jacket";
}
else {
 resultTwo = "jacket";
}

var result = 'Since it is' + ' ' + tempFahr + ' ' + 'degrees outside, and the event type is' + ' ' + eventType + ' ' + 'you should wear' + ' ' + resultOne + ' ' + 'and' + ' ' + resultTwo;
        
console.log(result);