var text = document.getElementById("text");
var button = document.getElementById("button");
var head = document.getElementById("head");

function myclick() {
var val = text.value;
window.alert(val);
var firebaseRef = firebase.database().ref();

firebaseRef.set(val);
firebaseRef.child(val).set("ssssss");


    
}