document.getElementById('demo');
var heading = document.getElementById('demo');
heading.style.borderColor='green';

var demo = document.getElementsByClassName('demo');
demo[0].style.borderColor= 'blue';
demo[1].style.borderColor= 'blue';


var para = document.querySelectorAll('.demo');
var btm =document.getElementById('btn');
btm.addEventListener('click',function()
{alert('Hello Amit')});
