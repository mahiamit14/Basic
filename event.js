function sayHello(){
    alert ('Helloo!!');
}
function sayBye(){
    alert  ('Byee!!');
}
var helloButton = document.getElementById('btn2');
helloButton.addEventListener('click', sayHello);
helloButton.addEventListener('click', sayBye);
