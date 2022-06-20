








//Objects



//Arrays - List of Values 
/*
var list = ["Redolf","Anita","Bucky","Angela",100,true,false,];
    list2 = [];
    list3 = new Array(18,false); 

var listy = ["Hans","Mata","Becham"],
    listy2 = [],
    listy3 = new Array("Cena","Yul"); 

    list.push("Kwame"); // push method adds an item to an array adds,| Kwame to array
    list.pop(); //pop method removes the last item from an array | removes Kwame

var firstItemRemoved = list.shift(); //shift method removes an item from the start or front of an array
var secondtItemRemoved = list.shift();
    list.unshift("Christable"); //unshift adds an item to the from of an array 
    list.indexOf(100); //index of gives the index of an element. 
*/





    
/*
function avg(num1, num2) {
    alert("The age of the man is " + (num1 + num2));
    alert("The age of the children too are " + num1 + " and " + num2);
}
*/






/*
Dog Age to Human Age App. 
Dog Age to Human Age Formula 
humanAge = (dogAge - 2) X 4 + 21
*/
/*
function humanAge() {
    var dogName = prompt("What is your dog's name? ");
    var dogAge = prompt ("What is your dog's age? ");
    humanAge = (dogAge - 2) * 4 + 21;

    alert("Hey " + dogName + " your human age is " + humanAge);
}
*/






//Welcome a user with his name being in the form of a title case. eg Hello Alex
/*
function welcomeHome2() {

    var firstName = prompt("What is your name?");

    var firstLetter = firstName.slice(0,1);
    var upperCaseFirstLetter = firstLetter.toUpperCase();

    var restOfLetters = firstName.slice(1,firstName.length);
    var lowerCaseRestOfLetters = restOfLetters.toLowerCase();

    var titleCaseLetters = upperCaseFirstLetter + lowerCaseRestOfLetters;
    alert("Hello " + titleCaseLetters);
}
*/





/*
function welcomeHome() {
    var firstName = prompt("What is you name?");
    alert("Welcome " + firstName.slice(0,1).toUpperCase() + firstName.slice(1,firstName.length).toLowerCase());
}
*/





//You have written 7 characters, you have 43 characters left. 
/*
Tweet count 
Slicing 
*/
/*
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
*/




/*
function upperCasefunction(){
    // alert("Hello buddy");
    var firstName2 = "RedolF";
    alert(firstName2.toUpperCase());
    alert(firstName2.toLowerCase());
}
*/








//Slicing
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