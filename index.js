//You have written 7 characters, you have 43 characters left. 
/*
Tweet count 
Slicing 
*/

function tweetCount() {
    var totalcharss = 50; 
    var msg_left;
    var strokess;
    
    alert("Note that, your characters can't go beyond 50 chars");
    var msg = prompt("Enter your characters here:");

    strokess = msg.length;
    alert("You have entered " + strokess + " Characters... ");

    var acceptedMsg = msg.slice(0,51);
    alert("Your accepted message is: " + acceptedMsg)

    msg_left = totalcharss - strokess;
    alert("You have " + msg_left + " Characters... ");
}

/*
var firstName = "Redolf";
alert(firstName);
var slicedName = firstName.slice(0,1);
alert(slicedName); 
var slicedName2 = firstName.slice(5,6);
alert(slicedName2);
var slicedName3 = firstName.slice(0,4);
alert(slicedName3);
var slicedName4 = firstName.slice(1,4);
alert(slicedName4);
*/